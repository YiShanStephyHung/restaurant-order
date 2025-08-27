// BookingPage.js
import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <>
      <main>
        <h1>Reserve a Table</h1>
        <p>Please fill in the form below to book your reservation.</p>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
      </main>
    </>
  );
}

export default BookingPage;

