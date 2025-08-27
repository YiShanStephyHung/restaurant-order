// import { render, screen } from "@testing-library/react";
// import BookingForm from './BookingForm';

// test('Renders the BookingForm heading', () => {
//     render(<BookingForm />);
//     const headingElement = screen.getByText("Book Now");
//     expect(headingElement).toBeInTheDocument();
// })

// Main.test.js (or BookingUtils.test.js, depending on where functions live)
import { initializeTimes, updateTimes } from './Main'; // or wherever they are defined
import { fetchAPI } from './api';

jest.mock('./api');

test('initializeTimes calls fetchAPI for today', () => {
  const mockTimes = ['17:00', '18:00'];
  fetchAPI.mockReturnValue(mockTimes);

  const result = initializeTimes();

  expect(fetchAPI).toHaveBeenCalled();
  expect(result).toEqual(mockTimes);
});

test('updateTimes calls fetchAPI with date and returns times', () => {
  const mockTimes = ['19:00', '20:00'];
  fetchAPI.mockReturnValue(mockTimes);

  const action = { type: 'update_times', date: '2025-08-27' };
  const result = updateTimes([], action);

  expect(fetchAPI).toHaveBeenCalledWith(new Date(action.date));
  expect(result).toEqual(mockTimes);
});
