let userScore = 0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const ROCK_div = document.getElementById("R");
const HAND_div = document.getElementById("H");
const SCISSOR_div = document.getElementById("S");


function getComputerChoice(){
    const choices = ['R' , 'H' , 'S' ];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "R") return "ROCK"
    if(letter === "H") return "HAND"
    return "Scissors";

}



getComputerChoice();



function win(userChoice, computerChoice){
    userScore++; 
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML =  'you win'
}




function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = 'you lose' 
}


function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = computerScore_span.innerHTML;
    result_div.innerHTML = 'draw' 
}



function game(userChoice){

    switch(userChoice + getComputerChoice()){
        case"RS":
        case "HR":
        case "SR":
          win();
        break


        case "RH":
        case "SR":
        case "HS":
           lose();
        break

        case "RR":
        case "HH":
        case "SS":
            draw();
            break



    }

}

function main(){

ROCK_div.addEventListener('click', function(){
    game("R");
})

HAND_div.addEventListener('click', function() {
    game("H");
})
SCISSOR_div.addEventListener('click', function(){
    game("S");
})
}

main();