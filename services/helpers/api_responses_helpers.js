import {faker} from "@faker-js/faker"
import {
    createBookingEndpoint,
    createOrUpdateBookingPayload,
    getBookingByIdEndpoint,
    updateBookingEndpoint
} from "../api_client";

/**
 * Создание нового бронирования
 * @param apiClient - Api клиент
 * @returns {Promise<{bookingGuestData: {}, responseData: *, bookingId: *, responseCode: *}>} - объект с данными о созданном бронировании и госте
 */
export async function createNewBookingDataWithFullFilled(apiClient) {
    let bookingGuest = new BookingGuest ()
    let payload = createOrUpdateBookingPayload (bookingGuest.data)
    const response = await apiClient.post(createBookingEndpoint, payload)
    if (!response.ok) {
        throw new Error(`Ошибка создания бронирования. Код ответа ${await response.status()}`)
    }
    let responseData = await response.json()
    return {
            bookingId: responseData.bookingid,
            bookingGuestData: bookingGuest.data,
            responseCode: await response.status(),
            responseData: await responseData
            }
}

/**
 * Полное обновление данных о бронировании
 * @param apiClient - Api клиент
 * @param bookingId
 * @returns {Promise<{bookingGuestData: {}, responseData: *, bookingId: *, responseCode: *}>} - объект с данными об обновленном бронировании и госте
 */
export async function updateBookingDataWithFullFilled(apiClient, bookingId) {
    let updatedBookingGuest = new BookingGuest ()
    let payload = createOrUpdateBookingPayload (updatedBookingGuest.data)
    const response = await apiClient.put(updateBookingEndpoint(bookingId), payload)
    if (!response.ok) {
        throw new Error(`Ошибка обновления бронирования. Код ответа ${await response.status()}`)
    }
    let responseData = await response.json()
    return {
        bookingGuestData: updatedBookingGuest.data,
        responseCode: await response.status(),
        responseData: await responseData
    }
}

/**
 *
 * @param apiClient - Api клиент
 * @param bookingId - Id бронирования
 * @returns {Promise<*>} - информация о бронировании
 */
export async function getBookingInformationByBookingId(apiClient, bookingId) {
    let getBookingInfo = await apiClient.get(getBookingByIdEndpoint(bookingId))
    let responseBody = await getBookingInfo.text()
    return await getBookingInfo.json()
}

/**
 * Класс для создания нового гостя.
 * Генерирует JSON-данные на основе переданных флагов.
 */
export class BookingGuest {
    data= {};

    /**
     * @param {boolean} firstname - Флаг для включения поля "firstname".
     * @param {boolean} lastname - Флаг для включения поля "lastname".
     * @param {boolean} totalprice - Флаг для включения поля "totalprice".
     * @param {boolean} depositpaid - Флаг для включения поля "depositpaid".
     * @param {boolean} bookingdates - Флаг для включения объекта "bookingdates".
     * @param {boolean} additionalneeds - Флаг для включения поля "additionalneeds".
     */
    constructor(
        firstname = true,
        lastname = true,
        totalprice = true,
        depositpaid = true,
        bookingdates = true,
        additionalneeds = true
    )
    {
        if (firstname) this.data.firstname = faker.person.firstName();
        if (lastname) this.data.lastname = faker.person.lastName();
        if (totalprice) this.data.totalprice = parseInt(faker.commerce.price({dec:0}));
        if (depositpaid) this.data.depositpaid = faker.datatype.boolean();
        if (bookingdates) {
            this.data.bookingdates = {
                checkin: faker.date.soon().toISOString().split('T')[0],
                checkout: faker.date.soon().toISOString().split('T')[0]
            };
        }
        if (additionalneeds) this.data.additionalneeds = faker.lorem.paragraph();
    }
}