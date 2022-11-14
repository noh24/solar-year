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

  ageInMercuryYears(earthAge) {
    this.mercuryAge = Number((earthAge * .24).toFixed(1));
  }

  ageInVenusYears(earthAge) {
    this.venusAge = Number((earthAge * .62).toFixed(1));
  }
  
  ageInMarsYears(earthAge) {
    this.marsAge = Number((earthAge * 1.88).toFixed(1));
  }

  ageInJupiterYears(earthAge) {
    this.jupiterAge = Number((earthAge * 11.86).toFixed(1));
  }
}
