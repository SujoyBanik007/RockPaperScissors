let userScore = 0;
let compScore = 0;
const scoreBoard_div = document.querySelector('score-board');
const result_p = document.querySelector('.result > p');
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissors');

function getCompChoice(){
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.round(Math.random() * 3 )
    return choices[randomNumber]; 
}
function win(userChoice, compChoice){
    userScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = (userChoice + ' beats ' + compChoice + '. YOU Win!')
}

function lose(userChoice, compChoice){
    compScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = (userChoice + ' beats ' + compChoice + '. YOU Lose!')
}

function draw(userChoice, compChoice){
    result_p.innerHTML = (userChoice + ' equals ' + compChoice + '. Draw!')
}



function game(userChoice){
    const compChoice = getCompChoice();
    switch(userChoice + compChoice){
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice,compChoice);
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(userChoice, compChoice);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
             draw(userChoice, compChoice);
             break
        }
    }

function main(){
    rock_div.addEventListener('click', function(){
        game('Rock');
    })

    paper_div.addEventListener('click', function(){
        game('Paper');
    })

    scissors_div.addEventListener('click', function(){
        game('Scissors');
    })
}
main();