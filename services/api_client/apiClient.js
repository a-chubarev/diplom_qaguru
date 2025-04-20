import dotenv from 'dotenv';
import {authEndpoint} from "./endpoints";

export class ApiClient {
    /**
     * Конструктор клиента для API
     * @param {string} baseUrl - Базовый URL API
     * @param {string} login - Логин пользователя (задается в переменных окружения)
     * @param {string} password - Пароль пользователя (задается в переменных окружения)
     * @param {import('@playwright/test').APIRequestContext} apiRequestContext - Контекст запросов Playwright
     */
    constructor(baseUrl, login, password, apiRequestContext) {
        dotenv.config(); // Загрузка переменных окружения

        this.baseUrl = baseUrl;
        this.login = login || process.env.USERNAME;
        this.password = password || process.env.PASSWORD;

        if (!this.login || !this.password) {
            throw new Error('Логин или пароль не заданы');
        }

        this.apiRequestContext = apiRequestContext;
        this.token = null;
    }

    /**
     * Авторизация пользователя и получение токена
     * @returns {Promise<void>}
     */
    async authenticate() {
        //const authEndpoint = '/auth';
        const payload = {
            username: this.login,
            password: this.password,
        };

        const response = await this.apiRequestContext.post(`${this.baseUrl}${authEndpoint}`, {
            headers: { 'Content-Type': 'application/json' },
            data: payload,
        });
        if (response.status() !== 200) {
            throw new Error(`Авторизация не пройдена. Код ответа: ${response.status()}`);
        }
        const responseBody = await response.json();
        if (!responseBody.token) {
            throw new Error('Авторизация не пройдена. Ответ не содержит токен.');
        }
        this.token = responseBody.token;
        console.log('Токен получен:', this.token);
    }

    /**
     * GET-запрос к API
     * @param {string} endpoint - Эндпоинт
     * @returns {Promise<import('@playwright/test').APIResponse>}
     */
    async get(endpoint) {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiRequestContext.get(url, {
            headers: this.getHeaders(),
        });
    }

    /**
     * POST-запрос к API
     * @param {string} endpoint - Эндпоинт
     * @param {Object} payload - Тело запроса
     * @returns {Promise<import('@playwright/test').APIResponse>}
     */
    async post(endpoint, payload) {
        return await this.apiRequestContext.post(`${this.baseUrl}${endpoint}`, {
            headers: this.getHeaders(),
            data: payload,
        });
    }

    /**
     * Возвращает заголовки с токеном авторизации
     * @returns {Object}
     */
    getHeaders() {
        if (!this.token) {
            throw new Error('Токен не установлен. Сначала выполните метод authenticate().');
        }

        return {
            'Content-Type': 'application/json',
            Cookie: `token=${this.token}`,
        };
    }
}