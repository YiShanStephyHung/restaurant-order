import React, { useReducer } from 'react';
import BookingPage from './BookingPage';
import { fetchAPI, submitAPI } from "./api";
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

function Main() {
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
            <main className="main">
                <section id="home">
                    <h2>Welcome to Little Lemon!</h2>
                    <p>We serve Mediterranean-inspired dishes with a modern twist.</p>
                </section>

                <section id="menu">
                    <h2>Our Menu</h2>
                    <ul>
                        <li>Grilled Lemon Chicken</li>
                        <li>Fresh Greek Salad</li>
                        <li>Lemon Pasta</li>
                    </ul>
                </section>

                <section id="reserve">
                    <BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
                    <p>Call us at (555) 123-4567 or book online.</p>
                </section>

                <section id="contact">
                    <h2>Contact</h2>
                    <p>Email: info@littlelemon.com</p>
                </section>
            </main>
        </>
    );
}

export default Main;

