
import SolarAgeCalc from './../src/js/solar-year.js'

describe('SolarAgeCalc', () => {
  let solarAgeCalc;
  beforeEach(() => {
    solarAgeCalc = new SolarAgeCalc("john", 20);
  });

  test('call SolarAgeCalc constructor and return 7 properties', () => {
    expect(solarAgeCalc.name).toEqual("john");
    expect(solarAgeCalc.earthAge).toEqual(20);
    expect(solarAgeCalc.lifeExpectancy).toEqual(0);
    expect(solarAgeCalc.mercuryAge).toEqual(0);
    expect(solarAgeCalc.venusAge).toEqual(0);
    expect(solarAgeCalc.marsAge).toEqual(0);
    expect(solarAgeCalc.jupiterAge).toEqual(0);
  });

  test('should return earth age in mercury years', () => {
    solarAgeCalc.ageInMercuryYears(20);
    expect(solarAgeCalc.mercuryAge).toEqual(4.8);
  });

  test('should return earth age in venus years', () => {
    solarAgeCalc.ageInVenusYears(20);
    expect(solarAgeCalc.venusAge).toEqual(12.4);
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