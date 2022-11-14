import SolarAgeCalc from './../src/js/solar-year.js';

window.addEventListener('load', function() {
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let solarAgeCalc;
    solarAgeCalc = handleFormSubmission();
  })
});

function handleFormSubmission() {
  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;
  let religious = document.querySelector('input[name=religious]:checked').id;
  let steps = document.getElementById('steps').value;
  let stressLevel = document.querySelector('input[name=stress]:checked').id;
  
  let solarAgeCalc = new SolarAgeCalc(name, age);
  solarAgeCalc.ageInPlanetYears();
  lifeExpectIfUserHasReligion(religious);
  lifeExpectBasedOnSteps(steps);
  lifeExpectBasedOnStressLevel(stressLevel);
  
  return solarAgeCalc;
}

function displayContent() {
  
}