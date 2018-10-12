import { Calendar } from '../blaze-calendar';

describe('calendar', () => {
  let calendar;

  beforeEach(() => {
    calendar = new Calendar();

    calendar.date = '01/14/1982';
    calendar.componentWillLoad();
  });

  test('get month name', async () => {
    expect(calendar.getMonthName()).toBe('January');
  });

  test('get day of week of first day of month', () => {
    expect(calendar.getFirstDay()).toBe(5); // Friday
  });

  test('get day of week of last day of month', () => {
    expect(calendar.getLastDay()).toBe(0); // Sunday
  });

  test('get total number of days in month', () => {
    expect(calendar.getTotalDaysInMonth()).toBe(31);
  });

  test('get last days of previous month', () => {
    expect(calendar.populateDaysPreviousMonth().length).toBe(5);
  });

  test('get first days of next month', () => {
    expect(calendar.populateDaysNextMonth().length).toBe(6);
  });

  test('get days of current month', () => {
    expect(calendar.populateDaysCurrentMonth().length).toBe(31);
  });

  test('navigate years forward', () => {
    calendar.navYear(1);
    expect(calendar._date.getFullYear()).toBe(1983);
  });

  test('navigate years backward', () => {
    calendar.navYear(-1);
    expect(calendar._date.getFullYear()).toBe(1981);
  });

  test('navigate months forward', () => {
    calendar.navMonth(1);
    expect(calendar._date.getMonth()).toBe(1);
  });

  test('navigate months backward', () => {
    calendar.navMonth(-1);
    expect(calendar._date.getMonth()).toBe(11);
  });
});
