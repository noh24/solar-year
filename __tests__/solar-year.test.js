
import SolarAgeCalc from './../src/js/solar-year.js'

describe('SolarAgeCalc', () => {
  let solarAgeCalc;
  beforeEach(() => {
    solarAgeCalc = new SolarAgeCalc("john", 23);
  });

  test('should create SolarAgeCalc object with 3 properties', () => {
    expect(solarAgeCalc.name).toEqual("john");
    expect(solarAgeCalc.earthAge).toEqual(23);
    expect(solarAgeCalc.lifeExpectancy).toEqual(0);
  });


});

//get users earth years
  // mercury .24
  // venus .62
  // mars 1.88
  // jupiter 11.86
  // life expectancy
    // country of residence
    // average steps per day
    // stress level
  // left years
  // over years