import {authEndpoint} from './endpoints'
import {authPayload} from './payloads';

export class ApiClient {
    /**
     * Конструктор клиента для Api
     * @param baseUrl - Url магазина
     * @param login - логин пользователя (задается в переменных окружения)
     * @param password - пароль пользователя (задается в переменных окружения)
     * @param apiRequestContext
     */
    constructor(baseUrl, login, password) {
        this.baseUrl = baseUrl;
        this.login = login;
        this.password = password;

        //this.apiRequestContext = apiRequestContext;
    }

    /**
     * Авторизация пользователя
     * @returns {Promise<void>}
     */
    async authenticate() {
        const response = await this.apiRequestContext.post(authEndpoint, authPayload(this.login, this.password));
        if (response.status() !== 200) {
            throw new Error(`Авторизация не пройдена. Код ответа: ${response.status()}`);
        }
        //const responseHeaders = response.headers();
        //this.token = responseHeaders["x-challenger"];
        //console.log("Токен получен:", this.token);
    }

    getHeaders() {
        if (!this.token) {
            throw new Error("Токен не получен");
        }
        return {
            "x-challenger": this.token
        };
    }

    getHeadersWithCustomAccept(acceptType){
        if (!this.token) {
            throw new Error("Токен не получен");
        }
        return {
            "x-challenger": this.token,
            "Accept": acceptType
        };
    }

    getHeadersWithCustomAcceptContentType(acceptType, contentType){
        if (!this.token) {
            throw new Error("Токен не получен");
        }
        return {
            "x-challenger": this.token,
            "Accept": acceptType,
            "Content-Type": contentType
        };
    }

    async get(endpoint) {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiRequestContext.get(url, { headers: this.getHeaders() });
    }

    async getWithCustomAccept(endpoint, acceptType) {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiRequestContext.get(url, { headers: this.getHeadersWithCustomAccept(acceptType) });
    }

    async head(endpoint) {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiRequestContext.head(url, { headers: this.getHeaders() });
    }

    async post(endpoint, payload) {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiRequestContext.post(url, {
            headers: this.getHeaders(),
            data: payload,
        });
    }

    async postWithCustomAcceptAndContentType(endpoint, payload, acceptType, contentType) {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiRequestContext.post(url, {
            headers: this.getHeadersWithCustomAcceptContentType(acceptType, contentType),
            data: payload,
        });
    }

    async put(endpoint, payload) {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiRequestContext.put(url, {
            headers: this.getHeaders(),
            data: payload,
        });
    }

    async delete(endpoint) {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiRequestContext.delete(url, { headers: this.getHeaders() });
    }

    async options(endpoint) {
        const url = `${this.baseUrl}${endpoint}`;
        return await this.apiRequestContext.fetch(url, {method: "OPTIONS", headers: this.getHeaders() });
    }
}