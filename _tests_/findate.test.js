import Weekday from '../src/js/findate.js';

describe("isDate()", () => {
  test("should determine if inputted data is a date", () => {
    const testDate = new Weekday("December 25, 2021"); 
    expect(testDate.isDate).toEqual("is a Date")
  });
});

// expect(findate(getDate)).toEqual("Saturday");












// const dayArray  [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
