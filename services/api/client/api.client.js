import { AuthController } from '../controllers/auth.controller';
import { BookingController } from '../controllers/booking.controller';
import dotenv from 'dotenv';

dotenv.config();

export class ApiClient {
    constructor(baseURL = process.env.BOOKSTORE_BASE_URL) {
        this.baseURL = baseURL;
        this.auth = new AuthController(this.baseURL);
        this.booking = new BookingController(this.baseURL);
        this.token = null;
    }

    /**
     * Создание экземпляра клиента без авторизации
     * @returns {Promise<ApiClient>} возвращает клиента
     */
    static async unauthorized() {
        return new ApiClient();
    }

    /**
     * Авторизация
     * @param login
     * @param password
     * @returns {Promise<null|*>} - токен авторизации
     */
    async authenticate(login = process.env.BOOKSTORE_CLIENT_LOGIN,
                       password = process.env.BOOKSTORE_CLIENT_PASSWORD) {
        this.token = await this.auth.login({ username: login, password });
        return this.token;
    }
}