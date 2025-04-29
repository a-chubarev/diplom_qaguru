import {ApiClient} from "./apiClient";
import {expect} from "@playwright/test";
import {validateCreateBookingResponse} from "../helpers";
import {getBookingIdsEndpoint} from "./endpoints";


//



export class BookingController {
    constructor(baseUrl, login, password, apiRequestContext) {
        //без авторизации
        this.apiClient = new ApiClient(baseUrl, login, password, apiRequestContext)
    }

    //Контроллер в моем случае - обертка
    //Из него надо убрать авторизацию (вынести видимо ее куда-то), либо оставить в клиенте
    //В контроллере не должно быть проверок, они в тестах
    //При получении ответа мне нужен либо обработчик, который будет смотреть что тело ответа не пустое,
    // либо просто тупо возвращаю весь response и его потом разбираю в тесте


    //Не совсем понятно что и как мне надо оставить в клиенте, но в целом я так понимаю авторизацию могу оставить так, как есть


    //И после мы можем юзать этот метод в тесте, чтобы избавиться от дублирования кода (насколько я понимаю).
    // Но при этом непонятно, здесь использовать вроде как избыточно (на 5 методах).
    // А на реальном проекте - вроде бы и стоит.
    // Если выносить так, то в тесте останется вызов метода из контроллера и экспект
    async getBookingsIds() {
        const response = await this.apiClient.get(getBookingIdsEndpoint());
        //Не уверен насколько правильно пихать проверки в контроллер. Но без них есть шанс, что тест
        // будет валиться на ошибке (например, не смог вычитать тело ответа если вернулась 404)
        expect(response.status()).toBe(200);
        const json = await response.json();
        //аналогично
        expect(validateCreateBookingResponse(json)).toBe(true);
        return json;
    }
}