// BookingForm.js
import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        // Basic validation rules
        const dateValid = selectedDate !== '' && new Date(selectedDate) >= new Date(new Date().toISOString().split('T')[0]);
        const timeValid = selectedTime !== '';
        const guestsValid = guests >= 1 && guests <= 10; // adjust max as needed

        setIsValid(dateValid && timeValid && guestsValid);
    }, [selectedDate, selectedTime, guests]);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setSelectedDate(newDate);
        dispatch({ type: 'update_times', date: newDate });
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleGuestsChange = (e) => {
        setGuests(parseInt(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid) {
            alert('Please fill in all fields correctly');
            return;
        }
        const formData = {
            date: selectedDate,
            time: selectedTime,
            guests: guests,
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
                required
                min={new Date().toISOString().split('T')[0]} // prevent past dates
                aria-required="true"
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                name="reservation-time"
                value={selectedTime}
                onChange={handleTimeChange}
                required
                aria-required="true"
            >
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="res-guests">Number of guests</label>
            <input
                type="number"
                id="res-guests"
                name="guests"
                value={guests}
                onChange={handleGuestsChange}
                required
                min={1} // at least one person
                max={10} // optional max guests limit
            />

            <button type="submit" disabled={!isValid} aria-label="On Click">Book</button>
        </form>
    );
}

export default BookingForm;


