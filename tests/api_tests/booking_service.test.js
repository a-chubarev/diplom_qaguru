import {expect, test} from "playwright/test";
import {
    ApiClient,
    deleteBookingEndpoint,
    getBookingByIdEndpoint
} from "../../services/api_client";
import {getBookingIdsEndpoint} from "../../services/api_client";
import * as dotenv from 'dotenv';
import {
    createNewBookingDataWithFullFilled, getBookingInformationByBookingId,
    updateBookingDataWithFullFilled
} from "../../services/helpers";
import {validateCreateBookingResponse} from "../../services/helpers";



test.describe('Booking Service Api tests', () => {
    dotenv.config();

    const URL = process.env.BOOKSTORE_BASE_URL
    const userLogin = process.env.BOOKSTORE_CLIENT_LOGIN
    const userPassword = process.env.BOOKSTORE_CLIENT_PASSWORD
    let apiClient
    let apiRequestContext

    test.beforeAll('Authorize',async ({playwright}) => {
        apiRequestContext = await playwright.request.newContext({
            baseURL: URL,
        });
        apiClient = new ApiClient(URL, userLogin, userPassword, apiRequestContext);
        await apiClient.authenticate();
    });

    /**
     * Тест на проверку эндпоинта на получение всех бронирований и соответствие тела ответа json-схеме
     */
    test('Получить id всех бронирований', async () => {
        let endpoint = getBookingIdsEndpoint();
        let response = await apiClient.get(endpoint);
        const responseDataValidate = validateCreateBookingResponse(response.json())
        expect(response.status()).toBe(200);
        expect(responseDataValidate).toBe(true)
    })

    /**
     * Создание бронирования. Проверка, что тело ответа соответствует json-схеме
     * и в параметрах бронирования все значения совпадают с переданными в запросе
     */
    test('Создание бронирования', async () => {
        let createBookingData = await createNewBookingDataWithFullFilled(apiClient)
        //Проверка, что код ответа - 200
        expect(createBookingData.responseCode).toBe(200);
        //Проверка, что данные в ответе совпадают с данными в запросе
        expect(createBookingData.responseData.booking).toEqual(createBookingData.bookingGuestData)
        //Проверка, что ответ на запрос соответствует json-схеме
        const responseDataValidate = validateCreateBookingResponse(createBookingData.responseData)
        expect(responseDataValidate).toBe(true)
    })

    /**
     * Создание бронирования в базе, получение ее и проверка, что данные в базе соответствуют переданным в запросе
     */
    test('Получить информацию о бронировании по id', async () => {
        let createdBookingData = await createNewBookingDataWithFullFilled(apiClient)
        let getBookingInfoResponseBody = await getBookingInformationByBookingId(apiClient, createdBookingData.bookingId).responseData
        //Сравниваю тело первого запроса и тело ответа на получение информации о созданном бронировании
        expect(createdBookingData.bookingGuestData.data).toEqual(getBookingInfoResponseBody)
    })

    /**
     * Обновление существующего бронирования. Проверка, что при обновлении изменены поля,
     * которые были переданы в запросе на обновлении, а остальные остались без изменений
     */
    test('Обновление существующего бронирования', async () => {
        let createdBookingData = await createNewBookingDataWithFullFilled(apiClient)
        //Обновляем созданное бронирование
        let fullUpdateBookingData = await updateBookingDataWithFullFilled(apiClient, createdBookingData.bookingId)
        //Проверка, что код ответа 200
        expect(fullUpdateBookingData.responseCode).toBe(200);
        //Проверка, что тело ответа соответствует телу запроса
        expect(fullUpdateBookingData.responseData).toEqual(fullUpdateBookingData.bookingGuestData)
        //Проверка, что ответ на запрос соответствует json-схеме
        const responseDataValidate = validateCreateBookingResponse(fullUpdateBookingData.responseData)
        expect(responseDataValidate).toBe(true)
        //Получить ответ на гет запрос получения информации о бронировании и сравнить с запросом на обновление
        let updatedBookingResponseBody = await getBookingInformationByBookingId(apiClient, createdBookingData.bookingId)
        expect(updatedBookingResponseBody.responseData).toEqual(fullUpdateBookingData.bookingGuestData)
    })

    /**
     * Удаление бронирования. Проверка ответа на запрос удаления.
     * Проверка, что удаленное бронирование недоступно при запросе по id
     */
    test('Удаление бронирования', async () => {
        let createdBookingData = await createNewBookingDataWithFullFilled(apiClient)
        //Удаление бронирования
        let deleteBooking = await apiClient.delete(deleteBookingEndpoint(createdBookingData.bookingId))
        expect(deleteBooking.status()).toBe(201);
        //Проверка, что после удаления запрос этого бронирования возвращает 404
        let getDeletedBookingInfoById = await apiClient.get(getBookingByIdEndpoint(createdBookingData.bookingId))
        expect(await getDeletedBookingInfoById.status()).toBe(404);
    })
})