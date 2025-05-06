
import { ENDPOINTS } from '../utils/endpoints';
import { createOrUpdateBookingPayload } from '../utils/payloads';
import { BaseController } from './base.controller';

export class BookingController extends BaseController {
    async getBookings(params = {}) {
        const response = await this.request.send({
            method: 'GET',
            path: ENDPOINTS.BOOKINGS(params)
        });
        return {
            status: response.status(),
            json: await response.json()
        };
    }

    async getBookingById(id) {
        const response = await this.request.send({
            method: 'GET',
            path: ENDPOINTS.BOOKING_BY_ID(id)
        });
        //TODO подумать насколько норм, что я добавляю условие вместо того,
        // чтобы возвращать весь response и потом разбирать его в тесте
        if (response.status() !== 200) {
            return {
                status: response.status(),
            }
        }
        else {
            return {
                status: response.status(),
                json: await response.json()
            };
        }
    }

    async createBooking(data) {
        const payload = createOrUpdateBookingPayload(data);
        const response = await this.request.send({
            method: 'POST',
            path: ENDPOINTS.BOOKING,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(payload)
        });
        return {
            status: response.status(),
            json: await response.json()
        };
    }

    async updateBooking(id, data, token) {
        const payload = createOrUpdateBookingPayload(data);
        const response = await this.request.send({
            method: 'PUT',
            path: ENDPOINTS.BOOKING_BY_ID(id),
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `token=${token}`
            },
            data: JSON.stringify(payload)
        });
        return {
            status: response.status(),
            json: await response.json()
        };
    }

    async deleteBooking(id, token) {
        const response = await this.request.send({
            method: 'DELETE',
            path: ENDPOINTS.BOOKING_BY_ID(id),
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `token=${token}`
            }
        });
        return {
            status: response.status()
        };
    }

    async pingService(){
        const response = await this.request.send({
            method: 'GET',
            path: ENDPOINTS.PING
        })
        if (response.status() !== 200) {
            throw new Error('Сервис недоступен')
        }
    }
}