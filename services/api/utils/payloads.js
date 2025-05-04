
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
    if (totalprice !== undefined) payload.totalprice = totalprice;
    if (depositpaid !== undefined) payload.depositpaid = depositpaid;
    if (bookingdates) {
        payload.bookingdates = {};
        if (bookingdates.checkin) payload.bookingdates.checkin = bookingdates.checkin;
        if (bookingdates.checkout) payload.bookingdates.checkout = bookingdates.checkout;
    }
    if (additionalneeds) payload.additionalneeds = additionalneeds;
    return payload;
};