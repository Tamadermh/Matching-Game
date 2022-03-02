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

// varible
const dack = document.querySelector("#deck");
const heart = document.querySelectorAll("#heart li");
const moves = document.querySelector("#moves");
const timer = document.querySelector("#timer");
const restart = document.querySelector("#restart"); 
const card = document.querySelectorAll("#dack li");
let arr = Array.from(cardToShuffle);
let openCards =[];
let movesCounter =0;
let timerOut=true ;
let match =0;
let time =0;

//functions





// event listeners