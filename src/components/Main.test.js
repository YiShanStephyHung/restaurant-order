// Main.test.js
import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns expected initial time slots', () => {
  const result = initializeTimes();
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
});

test('updateTimes returns updated time slots based on date', () => {
  const previousState = ['17:00', '18:00'];
  const action = { type: 'dateChange', date: '2025-08-26' };
  const result = updateTimes(previousState, action);

  // Since the logic doesn't change with date yet, we expect the same static list
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
});
