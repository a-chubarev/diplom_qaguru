import {faker} from "@faker-js/faker"


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