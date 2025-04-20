/**
 * Авторизация
 * @type {string}
 */
export const authEndpoint = `auth`

/**
 * Получение списка ID бронирований - с фильтрами и без.
 * Добавил encodeURIComponent чтобы не валились запросы на символах,
 * которые невалидны для url-ов
 * @param firstname - Имя
 * @param lastname - Фамилия
 * //TODO исправить описание переменных с датами
 * @param checkinDate - дата заезда
 * @param checkoutDate - дата выезда
 * @returns {string}
 */
export const getBookingIdsEndpoint = (firstname, lastname, checkinDate, checkoutDate) => {
    let baseUrl = "booking";
    let queryParams = [];
    if (firstname) {
        queryParams.push(`firstname=${encodeURIComponent(firstname)}`);
    }
    if (lastname) {
        queryParams.push(`lastname=${encodeURIComponent(lastname)}`);
    }
    if (checkinDate) {
        queryParams.push(`checkin=${encodeURIComponent(checkinDate)}`);
    }
    if (checkoutDate) {
        queryParams.push(`checkout=${encodeURIComponent(checkoutDate)}`);
    }
    if (queryParams.length > 0) {
        return `${baseUrl}?${queryParams.join('&')}`;
    }
    return baseUrl;
};

/**
 * Получение бронирования по Id
 * @param id - id записи
 * @returns {string}
 */
export const getBookingByIdEndpoint = (id) => `booking/${id}`

/**
 * Создание бронирования
 */
export const createBookingEndpoint = `booking`

/**
 * Обновление информации о бронировании
 * @param id - id записи
 * @returns {`booking/${string}`}
 */
export const updateBookingEndpoint = (id) => `booking/${id}`

/**
 * Удаление бронирования
 * @param id - id записи
 * @returns {`booking/${string}`}
 */
export const deleteBookingEndpoint = (id) => `booking/${id}`

/**
 * Доступность сервиса
 * @type {string}
 */
export const ping = `ping`