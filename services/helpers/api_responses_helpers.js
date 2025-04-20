import {faker} from "@faker-js/faker"
import {createBookingEndpoint, createOrUpdateBookingPayload} from "../api_client";

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
            bookingGuestData: bookingGuest.data
            }
}

/**
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
        if (totalprice) this.data.totalprice = faker.commerce.price();
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