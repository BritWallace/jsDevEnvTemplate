import Weekday from '../src/js/findate.js';

describe("isDate()", () => {
  test("should contain the date passed in as a property", () => {
    const testDate = new Weekday("December 25, 2021");
    expect(testDate.inputtedDate).toEqual("December 25, 2021");
  })
  test("should determine if inputted data is a date", () => {
    const testDate = new Weekday("December 25, 2021"); git 
    expect(testDate.isDate()).toEqual("is a Date")
  });
  test("should determine if inputted data is a date", () => {
    const testDate = new Weekday("December 35, 2021"); 
    expect(testDate.isDate()).toEqual("is not a Date")
  });
  test("should return the day of week as a string", () => {
    const testDate = new Weekday("December 25, 2021"); 
    expect(testDate.DOW()).toEqual("Saturday")
  })
});

// expect(findate(getDate)).toEqual("Saturday");













