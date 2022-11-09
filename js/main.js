'use strict';

//VARIABLES

const select = document.querySelector('.js-select');
const button = document.querySelector('.js-button');
const battle = document.querySelector('.js-text');
const section = document.querySelector('.js-section');
const userPoints = document.querySelector('.js-user');
const computerPoints = document.querySelector('.js-computer');

//FUNCIONES
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function compareBattle() {
  const selectValue = parseInt(select.value);
  const randomNumber = getRandomNumber();
  console.log(selectValue, randomNumber);
  if (randomNumber > selectValue) {
    battle.innerHTML = 'Ha ganado el Ejército del Mal! Vuelve a Intentarlo';
  } else if (randomNumber === selectValue) {
    battle.innerHTML = 'Empate';
  } else {
    battle.innerHTML = 'Ha ganado el Ejército del Bien! Enhorabuena';
  }
  // for(i=0; i<10; i++){
  //     if (randomNumber>selectValue){
  //         computerPoints.innerHTML= [i];
  //     }else if (randomNumber===selectValue){
  //         computerPoints.innerHTML= [i];
  //         userPoints.innerHTML= [i];
  //     }else{
  //         userPoints.innerHTML= [i];
  //     }
  // }
}
function showPoints() {
  section.classList.remove('hidden');
}
function handleclick(event) {
  event.preventDefault();
  compareBattle();
  showPoints();
}

//EVENTOS
button.addEventListener('click', handleclick);
