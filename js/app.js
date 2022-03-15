// varible
const deck = document.querySelector("#deck");
const stars = document.querySelectorAll("#heart li");
const moves = document.querySelector("#moves");
const timer = document.querySelector("#timer");
const restart = document.querySelector("#restart"); 
const cards = document.querySelectorAll("#deck li");
let arr = Array.from(cards);
let openCards =[];
let movesCounter =0;
let timerOut=true ;
let match =0;
let time =0;
let timerId=0;
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
deck.addEventListener("click",function(event){
    console.log(event.target);
    if (validClick(event.target)){
        if(timerOut){
            initTime();
        }
        event.target.classList.add("open");
        openCards.push(event.target);
        if(openCards.length==2){
            checkMatch();
            addMove();
            if(movesCounter==8 || movesCounter==16){
                removeStars();
            }
        }
    }
})
function validClick(card){
    if(card.classList.contains("card")&&!card.classList.contains("match")
    &&!openCards.includes(card)&&openCards.length<2){
        return true;
    }else{
        return false;
    }
}
function checkMatch(){
    console.log(openCards[0].children,"card1");
    if(openCards[0].children[0].className=== openCards[1].children[0].className){
        openCards[0].classList.add("match");
        openCards[1].classList.add("match");
        openCards=[];
        match++;
        if(match==8){
            setTimeout(()=>{
                win()
            },1000);
        }
    }
    else{
        setTimeout(()=>{
            openCards[0].classList.remove("open");
            openCards[1].classList.remove("open");

            openCards=[];
        },1000)
    }
}
function win(){
    alert('you win \nCongrats')
    resetGame()
}
function addMove(){
    movesCounter++;
    moves.innerHTML=movesCounter;
}
function resetMove(){
    movesCounter=0;
    moves.innerHTML=0;
}
function removeStars(){
    for(let star of stars){
        if(star.style.display!="none"){
            star.style.display="none";
            break;
        }
    }
}
function resetGame(){
    stopTimer();
    resetMove();
    removeStars();
    resetMatch();
    reShuffle();
    match=0;
    openCards=[];
}
function resetMatch(){
    for (let item of cards){
        item.classList.remove("match","open")
    }
}
function removeStars(){
    for(let star of stars){
        if(star.style.display!="none"){
            star.style.display="inline";
            break;
        }
    }
}
function reShuffle(){
    let shuffled=shuffle(arr);
    for(let item of shuffled){
        deck.appendChild(item);
    }
}
function initTime(){
    timerOut=false ;
    timerId=setInterval(()=>{
        time++;
        timerCount();
    },1000);
}
const timerCount = ()=>{
    const min =Math.floor(time/60);
    const sec = time %60;
    if (sec <10){
        timer.innerHTML = `${min}:0${sec}`;
    } else {
        timer.innerHTML = `${min}:0${sec}`;
    }
};