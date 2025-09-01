import React, { useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from "../api/api";
import { useNavigate } from 'react-router-dom';

// Reducer function
function updateTimes(state, action) {
  if (action.type === 'update_times') {
    return fetchAPI(new Date(action.date));
  }
  return state;
}

// Initializer function
function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function Booking() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/booking-confirmed');
    } else {
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <>
      <main>
        <h1>Reserve a Table</h1>
        <p>Please fill in the form below to book your reservation.</p>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </main>
    </>
  );
}

export default Booking;

