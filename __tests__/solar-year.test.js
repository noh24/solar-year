
import SolarAgeCalc from './../src/js/solar-year.js'

describe('SolarAgeCalc', () => {

  test('call SolarAgeCalc constructor and return 7 properties', () => {
    let solarAgeCalc = new SolarAgeCalc("john", 20);
    solarAgeCalc;

    expect(solarAgeCalc.name).toEqual("john");
    expect(solarAgeCalc.earthAge).toEqual(20);
    expect(solarAgeCalc.lifeExpectancy).toEqual(0);
    expect(solarAgeCalc.mercuryAge).toEqual(0);
    expect(solarAgeCalc.venusAge).toEqual(0);
    expect(solarAgeCalc.marsAge).toEqual(0);
    expect(solarAgeCalc.jupiterAge).toEqual(0);
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