
export const ENDPOINTS = {
    AUTH: 'auth',
    BOOKING: 'booking',
    BOOKING_BY_ID: (id) => `booking/${id}`,
    BOOKINGS: (params = {}) => {
        const url = new URLSearchParams();
        if (params.firstname) url.append('firstname', params.firstname);
        if (params.lastname) url.append('lastname', params.lastname);
        if (params.checkin) url.append('checkin', params.checkin);
        if (params.checkout) url.append('checkout', params.checkout);
        return url.toString() ? `booking?${url.toString()}` : 'booking';
    },
    PING: 'ping'
};