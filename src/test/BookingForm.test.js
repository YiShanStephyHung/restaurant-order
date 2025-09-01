// BookingForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('BookingForm', () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  const availableTimes = ['17:00', '18:00', '19:00'];

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
  });

  it('renders all input fields and button', () => {
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /On Click/i })).toBeInTheDocument();
  });

  it('dispatches update_times when date is changed', () => {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = screen.getByLabelText(/Date/i);
    fireEvent.change(dateInput, { target: { value: today } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'update_times',
      date: today,
    });
  });

  it('does not call submitForm if form is invalid', () => {
    const button = screen.getByRole('button', { name: /On Click/i });
    fireEvent.click(button);
    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  it('calls submitForm with correct data when valid', () => {
    const today = new Date().toISOString().split('T')[0];

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Date/i), {
      target: { value: today },
    });
    fireEvent.change(screen.getByLabelText(/Time/i), {
      target: { value: '18:00' },
    });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
      target: { value: '4' },
    });

    const button = screen.getByRole('button', { name: /On Click/i });
    fireEvent.click(button);

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: today,
      time: '18:00',
      guests: 4,
    });
  });

  it('disables the submit button if form is invalid', () => {
    const button = screen.getByRole('button', { name: /On Click/i });
    expect(button).toBeDisabled();
  });

  it('enables the submit button when form is valid', () => {
    const today = new Date().toISOString().split('T')[0];

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: 'Jane Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Date/i), {
      target: { value: today },
    });
    fireEvent.change(screen.getByLabelText(/Time/i), {
      target: { value: '19:00' },
    });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
      target: { value: '2' },
    });

    const button = screen.getByRole('button', { name: /On Click/i });
    expect(button).not.toBeDisabled();
  });
});
