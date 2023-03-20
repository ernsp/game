"use strict";

//Elements
const player0El = document.querySelector(".player-0");
const player1El = document.querySelector(".player-1");

const score0El = document.querySelector("#score-0");
const score1El = document.getElementById("score-1");
const current0El =document.getElementById("current-0");
const current1El = document.getElementById("current-1");

const diceEl = document.querySelector(".dice");

const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");
const btnNewGame = document.querySelector(".restart");


//starting condition
let score,currentScore,activePlayer,playing;

const startingCondition = () =>{
     score = [0,0];
currentScore = 0;
activePlayer =0;
playing = true;

score0El.textContent =0;
score1El.textContent =0;
current0El.textContent = 0;
current1El.textContent = 0;

diceEl.classList.add("hidden");
player0El.classList.remove("player-winner");
player1El.classList.remove("player-winner");
player0El.classList.add("player-active");
player1El.classList.remove("player-active");
};

startingCondition();

function switchPlayer(){
    document.querySelector(`#current-${activePlayer}`).textContent =0;
    //switching to next player
    currentScore=0;
    activePlayer = activePlayer ===0 ? 1:0;
    //ternary operator
    player0El.classList.toggle("player-active");
    player1El.classList.toggle("player-active");
}


// roll dice click

btnRoll.addEventListener("click", ()=> {
    if (playing){
    //random dice no. generate
    let dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);

    //display dice
diceEl.classList.remove("hidden");
diceEl.src = `./Images/dice-${dice}.svg`;
 

if (dice !== 1){
   currentScore +=dice;
//    current0El.textContent = currentScore;
   document.querySelector(`#current-${activePlayer}`).textContent=currentScore;
}else{
   switchPlayer();


}}

});

//hold click
btnHold.addEventListener("click", ()=>{
    if(playing){

    //add current score to total score
    score[activePlayer] +=currentScore;
    document.querySelector(`#score-${activePlayer}`).textContent=score[activePlayer];

    if (score[activePlayer]>=20){
        diceEl.classList.add("hidden");
        playing = false;
    
        document.querySelector(`.player-${activePlayer}`).classList.remove("player-active");

        //active player wins the game
        document.querySelector(`.player-${activePlayer}`).classList.add("player-winner");
    }else{
        //switch player
        switchPlayer();
    }
}
})

//add new game functionality in the current file when click on the new game button all the values must be revert back to its original states including the variable.
btnNewGame.addEventListener("click", ()=>{
    startingCondition();
    // playing=true;
    // score = [0,0];
    // currentScore = 0;
    // activePlayer = 0;
    // score0El.textContent =0;
    // score1El.textContent =0;
    // diceEl.classList.add("hidden");


    // btnRoll.addEventListener("click", ()=> {
    //     if (playing){
    //     //random dice no. generate
    //     let dice = Math.trunc(Math.random()*6)+1;
    //     console.log(dice);
    
    //     //display dice
    // diceEl.classList.remove("hidden");
    // diceEl.src = `./Images/dice-${dice}.svg`;
     
    
    // if (dice !== 1){
    //    currentScore +=dice;
    // //    current0El.textContent = currentScore;
    //    document.querySelector(`#current-${activePlayer}`).textContent=currentScore;
    // }else{
    //    switchPlayer();
    
    
    // }}
    
    // });
    // btnHold.addEventListener("click", ()=>{
    //     if(playing){
    
    //     //add current score to total score
    //     score[activePlayer] +=currentScore;
    //     document.querySelector(`#score-${activePlayer}`).textContent=score[activePlayer];
    
    //     if (score[activePlayer]>=20){
    //         diceEl.classList.add("hidden");
    //         playing = false;
    //         document.querySelector(`.player-${activePlayer}`).classList.remove("player-active");
    
    //         //active player wins the game
    //         document.querySelector(`.player-${activePlayer}`).classList.add("player-winner");
    //     }else{
    //         //switch player
    //         switchPlayer();
    //     }
    // }
    // });
    
});
