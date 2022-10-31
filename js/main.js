const select=document.querySelector('.js-select');
const button=document.querySelector('.js-button');
const battle=document.querySelector('.js-text');
const winner=document.querySelector('.js-winner');

function battleStart(){
    battle.classList.remove('hidden')
};
function getRandomNumber(max) {
    return Math.ceil(Math.random() * 5);
}

function compareBattle(){
    const selectValue=parseInt(select.value);
    const randomNumber=getRandomNumber();
    console.log(selectValue, randomNumber);
    if (randomNumber>selectValue){
        battle.innerHTML='Ha ganado el Ejército del Mal! Vuelve a Intentarlo';
    }else if (randomNumber===selectValue){
        battle.innerHTML='Empate';
    }else{
        battle.innerHTML='Ha ganado el Ejército del Bien! Enhorabuena';
    }
};

button.addEventListener('click', (event) =>{
    event.preventDefault();
    compareBattle();
    
});