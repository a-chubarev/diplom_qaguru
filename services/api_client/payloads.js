/**
 * Тело запроса для авторизации
 * @param clientLogin - логин
 * @param clientPassword - пароль
 * @returns {{password, username}} - json-тело запроса для авторизации
 */
export const authPayload = (clientLogin, clientPassword) => {
    return { username: clientLogin, password: clientPassword };
};

/**
 * Тело запроса для создания бронирования
 * @param firstname - имя
 * @param lastname - фамилия
 * @param totalprice - цена
 * @param depositpaid - депозит
 * //TODO проверить как будет работать
 * @param bookingdates - даты. передаются двумя значениями: bookingdates.checkin и bookingdates.checkout
 * @param additionalneeds - дополнительная информация
 * @returns {{}} - json-тело запроса для создания или обновления книги
 */
export const createOrUpdateBookingPayload = ({
                                  firstname,
                                  lastname,
                                  totalprice,
                                  depositpaid,
                                  bookingdates,
                                  additionalneeds
                              }) => {
    const payload = {};
    if (firstname) payload.firstname = firstname;
    if (lastname) payload.lastname = lastname;
    if (totalprice !== undefined) payload.totalprice = totalprice; // Учитываем числовые значения
    if (depositpaid !== undefined) payload.depositpaid = depositpaid; // Учитываем булевы значения
    if (bookingdates) {
        payload.bookingdates = {};
        if (bookingdates.checkin) payload.bookingdates.checkin = bookingdates.checkin;
        if (bookingdates.checkout) payload.bookingdates.checkout = bookingdates.checkout;
    }
    if (additionalneeds) payload.additionalneeds = additionalneeds;
    return payload;
};

