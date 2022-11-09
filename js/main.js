'use strict';

const select = document.querySelector('.js-select');
const button = document.querySelector('.js-button');
const result = document.querySelector('.js-text');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getUserRace() {
  return parseInt(select.value);
}

function getComputerRace() {
  const randomNumber = getRandomNumber(5);

  let computerPower = 0;
  if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3) {
    computerPower = 2;
  } else if (randomNumber === 4) {
    computerPower = 3;
  } else if (randomNumber === 5) {
    computerPower = 5;
  }
  return computerPower;
}

function getComputerRace() {
  const randomNumber = getRandomNumber(5);
  let computerPower = 0;
  if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3) {
    computerPower = 2;
  } else if (randomNumber === 4) {
    computerPower = 3;
  } else if (randomNumber === 5) {
    computerPower = 5;
  }
  return computerPower;
}

function compareRaces(userRace, computerRace) {
  if (userRace > computerRace) {
    result.innerHTML = 'Ha ganado el Ejército del Bien! Enhorabuena.';
  } else if (userRace < computerRace) {
    result.innerHTML = 'Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
  } else {
    result.innerHTML = 'Empate.';
  }
}

function handleclick(event) {
  event.preventDefault();
  const userRace = getUserRace();
  const computerRace = getComputerRace();
  compareRaces(userRace, computerRace);
}

button.addEventListener('click', handleclick);
