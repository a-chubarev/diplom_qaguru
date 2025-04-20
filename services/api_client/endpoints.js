/**
 * Авторизация
 * @type {string}
 */
export const authEndpoint = `auth`

/**
 * Получение списка ID книг - с фильтрами и без.
 * Добавил encodeURIComponent чтобы не валились запросы на символах,
 * которые невалидны для url-ов
 * @param firstname - Имя автора
 * @param lastname - Фамилия автора
 * //TODO исправить описание переменных с датам
 * @param checkinDate - дата добавления книги
 * @param checkoutDate - дата "выезда книги"
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
 * Получение книги по Id
 * @param id - id книги
 * @returns {string}
 */
export const getBookingByIdEndpoint = (id) => `${id}`

/**
 * Создание книги
 */
export const createBookingEndpoint = `booking`

/**
 * Обновление информации о книге
 * @param id - id книги
 * @returns {`booking/${string}`}
 */
export const updateBookingEndpoint = (id) => `booking/${id}`

/**
 * Удаление книги
 * @param id - id книги
 * @returns {`booking/${string}`}
 */
export const deleteBookingEndpoint = (id) => `booking/${id}`

/**
 * Доступность сервиса
 * @type {string}
 */
export const ping = `ping`