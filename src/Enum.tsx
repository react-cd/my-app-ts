const enum Weekday {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}
interface Ienum {
  day: Weekday,
  name: string,
  [propName: string]: any
}
const test1 = (params: Ienum) => {
  console.log(params);
  return 10;
}

test1({ day: Weekday.Monday, name: '222', age: [1, 2, 3] });