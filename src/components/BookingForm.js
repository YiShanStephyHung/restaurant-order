// BookingForm.js
import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setSelectedDate(newDate);
        dispatch({ type: 'update_times', date: newDate });
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            date: selectedDate,
            time: selectedTime,
        };

        submitForm(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} aria-label="Booking Form">
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="reservation-date"
                value={selectedDate}
                onChange={handleDateChange}
                aria-required="true"
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                name="reservation-time"
                value={selectedTime}
                onChange={handleTimeChange}
                aria-required="true"
            >
                {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <button type="submit">Book</button>
        </form>
    );
}

export default BookingForm;


