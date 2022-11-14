export default class SolarAgeCalc {
  constructor(name, earthAge) {
    this.name = name;
    this.earthAge = earthAge;
    this.lifeExpectancy = 0;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
  }
  
  ageInPlanetYears() {
    this.mercuryAge = Number((this.earthAge * .24).toFixed(1));
    this.venusAge = Number((this.earthAge * .62).toFixed(1));
    this.marsAge = Number((this.earthAge * 1.88).toFixed(1));
    this.jupiterAge = Number((this.earthAge * 11.86).toFixed(1));
  }

  lifeExpectIfUserHasReligion(boolean) {
    if (boolean === true) {
      this.lifeExpectancy += 70;
    } else {
      this.lifeExpectancy += 50;
    }
  }

  lifeExpectBasedOnSteps(numberOfSteps) {
    if (numberOfSteps < 8000) {
      this.lifeExpectancy += 5;
    } else {
      this.lifeExpectancy += 10;
    }
  }

  lifeExpectBasedOnStressLevel(stressLevel) {
    if (stressLevel === 'low') {
      this.lifeExpectancy += 10;
    } else if (stressLevel === 'medium') {
      this.lifeExpectancy += 7;
    } else {
      this.lifeExpectancy -= 5;
    }
  }

  yearsLeftOrSurpassed() {
    if (this.lifeExpectancy >= this.earthAge) {
      return this.lifeExpectancy - this.earthAge;
    } else {
      return this.earthAge - this.lifeExpectancy;
    }
  }
}
