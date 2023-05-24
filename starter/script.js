'use strict';

let message = function(text) {
  return document.querySelector('.message').textContent = text;
}

//count Score
let score = 20;
let numberScore = document.querySelector('.score');
numberScore.textContent = score;

let countScore = () => {
  score--;
  numberScore.textContent = score;
  return numberScore;
}

//Hight Score
let highscore = document.querySelector('.highscore');
const buttonAgain = document.querySelector('.again');
let newScore = 0;

//Random score
let randomNumber = () => {
  let number = Math.trunc(Math.random() * 20 + 1)
  return number;
}
let afterRadom = randomNumber();

//button check
const buttonCheck = document.querySelector('.check');
buttonCheck.addEventListener('click', function() {
  const valueInput = Number(document.querySelector('.guess').value);

  if(!valueInput) {
    message('Please enter number !')
  }
  else if (valueInput > 20 || valueInput < 0) {
    message('No between 1 and 20 ')
  }
  else if (afterRadom === valueInput) {
    message('Number Correct !!')
    document.querySelector('.number').textContent = afterRadom
    document.body.style.backgroundColor = '#60b347'
    if(Number(numberScore.textContent) > newScore) {
      newScore = Number(numberScore.textContent)
      highscore.textContent = newScore;
    }
  }
  else if (afterRadom > valueInput) {
    message('higher score. stupid.!')
    countScore();
  }
  else if (afterRadom < valueInput) {
    message('lower score. stupid.!')
    countScore();
  }
})

//button play again
buttonAgain.addEventListener('click', function() {
  score = 20;
  document.body.style.backgroundColor = '#222';
  message('Start guessing...');
  afterRadom = randomNumber();
  numberScore.textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?'
})