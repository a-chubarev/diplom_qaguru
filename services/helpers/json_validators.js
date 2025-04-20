const Ajv = require("ajv");

/**
 * Валидация json ответа на создание бронирования по json-схеме
 * @param data - json
 */
export function validateCreateBookingResponse(data) {
    const ajv = new Ajv();
    const schema = {
        "type": "object",
        "properties": {
            "firstname": {
                "type": "string"
            },
            "lastname": {
                "type": "string"
            },
            "totalprice": {
                "type": "integer"
            },
            "depositpaid": {
                "type": "boolean"
            },
            "bookingdates": {
                "type": "object",
                "properties": {
                    "checkin": {
                        "type": "string"
                    },
                    "checkout": {
                        "type": "string"
                    }
                },
                "required": [
                    "checkin",
                    "checkout"
                ]
            },
            "additionalneeds": {
                "type": "string"
            }
        },
        "required": [
        ]
    }
    const validate = ajv.compile(schema);
    const isValid = validate(data);

    if (!isValid) {
        return (`Ошибки валидации по json-схеме: ${validate.errors}`)
    }
    else if (isValid) {
        return true
    }


}