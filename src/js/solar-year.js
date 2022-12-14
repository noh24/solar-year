export default class SolarAgeCalc {
  constructor(name, earthAge) {
    // planetAgeData = [currentAge, years left/surpassed expectancy]
    this.name = name;
    this.earthAgeData = [earthAge];
    this.lifeExpectancy = 0;
    this.mercuryAgeData = [];
    this.venusAgeData = [];
    this.marsAgeData = [];
    this.jupiterAgeData = [];
  }
  
  ageInPlanetYears() {
    this.mercuryAgeData.push(Number((this.earthAgeData[0] / .24).toFixed(1)));
    this.venusAgeData.push(Number((this.earthAgeData[0] / .62).toFixed(1)));
    this.marsAgeData.push(Number((this.earthAgeData[0] / 1.88).toFixed(1)));
    this.jupiterAgeData.push(Number((this.earthAgeData[0] / 11.86).toFixed(1)));
  }

  lifeExpectIfUserHasReligion(boolean) {
    if (boolean === "true") {
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

  yearsLeftOrSurpassedOnPlanets() {
    let years;
    if (this.lifeExpectancy >= this.earthAgeData[0]) {
      years = this.lifeExpectancy - this.earthAgeData[0];
      this.earthAgeData.push(years);
    } else {
      years = this.earthAgeData[0] - this.lifeExpectancy;
      this.earthAgeData.push(years);
    }
    this.mercuryAgeData.push(Number((years / .24).toFixed(1)));
    this.venusAgeData.push(Number((years / .62).toFixed(1)));
    this.marsAgeData.push(Number((years / 1.88).toFixed(1)));
    this.jupiterAgeData.push(Number((years / 11.86).toFixed(1)));
  }
}
