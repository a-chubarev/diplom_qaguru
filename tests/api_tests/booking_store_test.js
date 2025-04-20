import {expect, test} from "playwright/test";
import {ApiClient} from "../../services/api_client/apiClient";
import * as dotenv from 'dotenv';
import {getBookingIdsEndpoint} from "../../services/api_client/endpoints";

test.describe('BookingStore', () => {
    const URL = process.env.BOOKSTORE_BASE_URL
    const userLogin = process.env.BOOKSTORE_USERNAME
    const userPassword = process.env.BOOKSTORE_PASSWORD
    let apiClient

    test.beforeAll('Authorize',async ({}) => {
        apiClient = new ApiClient(URL, userLogin, userPassword);
        await apiClient.authenticate();
    });

    test('Получить id всех книг', async () => {
        let response = await apiClient.get(getBookingIdsEndpoint)
        expect(response.status()).toBe(200);
    })
})