import React from 'react';
import BookingForm from '../components/BookingForm';
import BookingSeatCategory from '../components/BookingSeatCategory';
const Booking = () => (
    <div className="booking">
        <BookingForm />
        <BookingSeatCategory />
    </div>
);

export default Booking;
