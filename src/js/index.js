import SolarAgeCalc from './solar-year.js';

window.addEventListener('load', function() {
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let solarAgeCalc;
    solarAgeCalc = handleFormSubmission();
    displayContent(solarAgeCalc);

    document.getElementById('name').value = null;
    document.getElementById('age').value = null;
    document.getElementById('steps').value = null;
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
  solarAgeCalc.lifeExpectIfUserHasReligion(religious);
  solarAgeCalc.lifeExpectBasedOnSteps(steps);
  solarAgeCalc.lifeExpectBasedOnStressLevel(stressLevel);
  solarAgeCalc.yearsLeftOrSurpassedOnPlanets();
  return solarAgeCalc;
}

function displayContent(solarAgeCalc) {
  document.getElementById('user-name').innerText = solarAgeCalc.name;
  document.getElementById('user-age').innerText = solarAgeCalc.earthAgeData[0];
  document.getElementById('mercury-age').innerText = solarAgeCalc.mercuryAgeData[0];
  document.getElementById('venus-age').innerText = solarAgeCalc.venusAgeData[0];
  document.getElementById('mars-age').innerText = solarAgeCalc.marsAgeData[0];
  document.getElementById('jupiter-age').innerText = solarAgeCalc.jupiterAgeData[0];
  document.getElementById('content').classList.remove('hidden');

  if (solarAgeCalc.lifeExpectancy >= solarAgeCalc.earthAgeData[0]) {
    document.getElementById('earth-years-left').innerText = solarAgeCalc.earthAgeData[1];
    document.getElementById('mercury-years-left').innerText = solarAgeCalc.mercuryAgeData[1];
    document.getElementById('venus-years-left').innerText = solarAgeCalc.venusAgeData[1];
    document.getElementById('mars-years-left').innerText = solarAgeCalc.marsAgeData[1];
    document.getElementById('jupiter-years-left').innerText = solarAgeCalc.jupiterAgeData[1];
    document.getElementById('years-left').classList.remove('hidden');
    document.getElementById('years-passed').classList.add('hidden');
  } else {
    document.getElementById('earth-years-passed').innerText = solarAgeCalc.earthAgeData[1];
    document.getElementById('mercury-years-passed').innerText = solarAgeCalc.mercuryAgeData[1];
    document.getElementById('venus-years-passed').innerText = solarAgeCalc.venusAgeData[1];
    document.getElementById('mars-years-passed').innerText = solarAgeCalc.marsAgeData[1];
    document.getElementById('jupiter-years-passed').innerText = solarAgeCalc.jupiterAgeData[1];
    document.getElementById('years-passed').classList.remove('hidden');
    document.getElementById('years-left').classList.add('hidden');
  }
}