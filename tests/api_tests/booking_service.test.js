
import { test, expect } from '@playwright/test';
import { ApiClient } from '../../services/api/client/api.client';
import {BookingGuest, validateCreateBookingResponse} from "../../services/helpers";

test.describe('Booking API Tests', () => {
    let apiClient;

    test.beforeAll(async () => {
        apiClient = await ApiClient.unauthorized();
        await apiClient.authenticate();
    });

    /**
    * Тест на проверку эндпоинта на получение всех бронирований
    */
    test('Получить id всех бронирований', async () => {
        let response = await apiClient.booking.getBookings();
        expect(response.status).toBe(200);
    })

    /**
    * Создание бронирования. Проверка, что тело ответа соответствует json-схеме
    * и в параметрах бронирования все значения совпадают с переданными в запросе
    */
    test('Создание бронирования', async () => {
        const bookingGuest = new BookingGuest()
        let createBookingData = await apiClient.booking.createBooking(bookingGuest.data);
        //Проверка, что код ответа - 200
        expect(createBookingData.status).toBe(200);
        //Проверка, что данные в ответе совпадают с данными в запросе
        expect(createBookingData.json.booking).toEqual(bookingGuest.data)
        //Проверка, что ответ на запрос соответствует json-схеме
        const responseDataValidate = validateCreateBookingResponse(createBookingData.json)
        expect(responseDataValidate).toBe(true)
    })

    /**
     * Создание бронирования в базе, получение ее и проверка, что данные в базе соответствуют переданным в запросе
     */
    test('Получить информацию о бронировании по id', async () => {
        const bookingGuest = new BookingGuest()
        let createdBookingData = await apiClient.booking.createBooking(bookingGuest.data)
        let getBookingInfoResponseBody = await apiClient.booking.getBookingById(createdBookingData.json.bookingid)
        //Сравниваю тело первого запроса и тело ответа на получение информации о созданном бронировании
        expect(createdBookingData.json.booking).toEqual(getBookingInfoResponseBody.json)
    })

    /**
     * Обновление существующего бронирования. Проверка, что при обновлении изменены поля,
     * которые были переданы в запросе на обновлении, а остальные остались без изменений
     */
    test('Обновление существующего бронирования', async () => {
        const bookingGuest = new BookingGuest()
        let createdBookingData = await apiClient.booking.createBooking(bookingGuest.data)
        //Обновляем созданное бронирование
        const updatedBookingGuest = new BookingGuest()
        let fullUpdateBookingData = await apiClient.booking.updateBooking(createdBookingData.json.bookingid, updatedBookingGuest.data, apiClient.token)
        //Проверка, что код ответа 200
        expect(fullUpdateBookingData.status).toBe(200);
        //Проверка, что тело ответа соответствует телу запроса
        expect(updatedBookingGuest.data).toEqual(fullUpdateBookingData.json)
        //Проверка, что ответ на запрос соответствует json-схеме
        const responseDataValidate = validateCreateBookingResponse(fullUpdateBookingData.json)
        expect(responseDataValidate).toBe(true)
        //Получить ответ на гет запрос получения информации о бронировании и сравнить с запросом на обновление
        let updatedBookingResponseBody = await apiClient.booking.getBookingById(createdBookingData.json.bookingid)
        expect(updatedBookingResponseBody.json).toEqual(fullUpdateBookingData.json)
    })

    /**
     * Удаление бронирования. Проверка ответа на запрос удаления.
     * Проверка, что удаленное бронирование недоступно при запросе по id
     */
    test('Удаление бронирования', async () => {
        let bookingGuest = new BookingGuest()
        let createdBookingData = await apiClient.booking.createBooking(bookingGuest.data)
        //Удаление бронирования
        let deleteBooking = await apiClient.booking.deleteBooking(createdBookingData.json.bookingid, apiClient.token)
        expect(deleteBooking.status).toBe(201);
        //Проверка, что после удаления запрос этого бронирования возвращает 404
        let getDeletedBookingInfoById = await apiClient.booking.getBookingById(createdBookingData.json.bookingid)
        expect(await getDeletedBookingInfoById.status).toBe(404);
    })
});