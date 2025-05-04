
import { ENDPOINTS } from '../utils/endpoints';
import { BaseController } from './base.controller';


export class AuthController extends BaseController {
    constructor(baseURL) {
        super(baseURL);
    }
    async login(credentials) {
        const response = await this.request.send({
            method: 'POST',
            path: ENDPOINTS.AUTH,
            headers: {
                'Content-Type': 'application/json'
            },
            data: credentials
        });

        if (response.status() !== 200) {
            const text = await response.text();
            throw new Error(`Авторизация не выполнена. ${response.status()}: ${text}`);
        }

        const body = JSON.parse(await response.text());
        return body.token;
    }
}