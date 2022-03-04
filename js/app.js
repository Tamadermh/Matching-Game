// varible
const heart = document.querySelectorAll("#heart li");
const moves = document.querySelector("#moves");
const timer = document.querySelector("#timer");
const restart = document.querySelector("#restart"); 
const cardToshuffle = document.querySelectorAll("#dack li");
let arr = Array.from(cardToshuffle);
let openCards =[];
let movesCounter =0;
let timerOut=true ;
let match =0;
let time =0;
//functions
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
// event listeners



