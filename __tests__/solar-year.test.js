
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
  
  test('should return earth age in mars years', () => {
    solarAgeCalc.ageInMarsYears(20);
    expect(solarAgeCalc.marsAge).toEqual(37.6);
  });

  test('should return earth age in jupiter years', () => {
    solarAgeCalc.ageInJupiterYears(20);
    expect(solarAgeCalc.jupiterAge).toEqual(237.2);
  });

  test('should add to life expectancy based on whether user has a religion', () => {
    solarAgeCalc.lifeExpectIfUserHasReligion(true);
    expect(solarAgeCalc.lifeExpectancy).toEqual(70);
  });
  
  test('should add to life expectancy based on whether user has no religion', () => {
    solarAgeCalc.lifeExpectIfUserHasReligion(false);
    expect(solarAgeCalc.lifeExpectancy).toEqual(50);
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