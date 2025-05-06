import {request} from '@playwright/test';


export class Request {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async send({ method = 'GET', path = '', headers = {}, data = null }) {
        const context = await request.newContext({
            baseURL: this.baseURL
        });

        const options = {
            method,
            headers
        };

        if (method !== 'GET' && data !== null) {
            options.data = data;
        }

        return await context.fetch(path, options);
    }
}