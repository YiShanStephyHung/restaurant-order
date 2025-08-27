import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const dummyProps = {
  availableTimes: ['18:00', '19:00'],
  dispatch: jest.fn(),
  submitForm: jest.fn(),
};

test('submit button is disabled when fields are empty or invalid', () => {
  render(<BookingForm {...dummyProps} />);
  const submitButton = screen.getByRole('button', { name: /book/i });
  expect(submitButton).toBeDisabled();
});

test('submit button is enabled when form is valid', () => {
  render(<BookingForm {...dummyProps} />);

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: new Date().toISOString().split('T')[0] },
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: '18:00' },
  });

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: '2' },
  });

  const submitButton = screen.getByRole('button', { name: /book/i });
  expect(submitButton).toBeEnabled();
});
