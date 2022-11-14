
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
    expect(solarAgeCalc.mercuryAgeData).toEqual([]);
    expect(solarAgeCalc.venusAgeData).toEqual([]);
    expect(solarAgeCalc.marsAgeData).toEqual([]);
    expect(solarAgeCalc.jupiterAgeData).toEqual([]);
  });

  test('should return earth age in mercury years', () => {
    solarAgeCalc.ageInPlanetYears();
    expect(solarAgeCalc.mercuryAgeData).toEqual([4.8]);
  }); 
  
  test('should return earth age in venus years', () => {
    solarAgeCalc.ageInPlanetYears();
    expect(solarAgeCalc.venusAgeData).toEqual([12.4]);
  }); 
  
  test('should return earth age in mars years', () => {
    solarAgeCalc.ageInPlanetYears();
    expect(solarAgeCalc.marsAgeData).toEqual([37.6]);
  });

  test('should return earth age in jupiter years', () => {
    solarAgeCalc.ageInPlanetYears();
    expect(solarAgeCalc.jupiterAgeData).toEqual([237.2]);
  });

  test('should add to life expectancy based on whether user has a religion', () => {
    solarAgeCalc.lifeExpectIfUserHasReligion(true);
    expect(solarAgeCalc.lifeExpectancy).toEqual(70);
  });
  
  test('should add to life expectancy based on whether user has no religion', () => {
    solarAgeCalc.lifeExpectIfUserHasReligion(false);
    expect(solarAgeCalc.lifeExpectancy).toEqual(50);
  });

  test('should add life expectancy based on if user takes a daily average step of less than 8000', () => {
    solarAgeCalc.lifeExpectBasedOnSteps(7000);
    expect(solarAgeCalc.lifeExpectancy).toEqual(5);
  });

  test('should add life expectancy based on if user takes a daily average step of equals to or more than 8000', () => {
    solarAgeCalc.lifeExpectBasedOnSteps(8000);
    expect(solarAgeCalc.lifeExpectancy).toEqual(10);
  });

  test('should add life expectancy based on users daily stress level: low', () => {
    solarAgeCalc.lifeExpectBasedOnStressLevel("low");
    expect(solarAgeCalc.lifeExpectancy).toEqual(10);
  });

  test('should add life expectancy based on users daily stress level: medium', () => {
    solarAgeCalc.lifeExpectBasedOnStressLevel("medium");
    expect(solarAgeCalc.lifeExpectancy).toEqual(7);
  });
  
  test('should add life expectancy based on users daily stress level: high', () => {
    solarAgeCalc.lifeExpectBasedOnStressLevel("high");
    expect(solarAgeCalc.lifeExpectancy).toEqual(-5);
  });

  test('should calculate how many years user have left on earth', () => {
    solarAgeCalc.lifeExpectancy = 25;
    expect(solarAgeCalc.yearsLeftOrSurpassedOnEarth()).toEqual(5);
  });
  
  test('should calculate how many years user surpassed life expectancy', () => {
    solarAgeCalc.lifeExpectancy = 18;
    expect(solarAgeCalc.yearsLeftOrSurpassedOnEarth()).toEqual(2);
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