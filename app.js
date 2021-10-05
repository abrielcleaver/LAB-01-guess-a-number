
const userGuess = document.getElementById('user-guess');
const result = document.getElementById('result');
const guessButton = document.getElementById('guess-button');
const guessCount = document.getElementById('guess-count');
const guessed = document.getElementById('numbers-guessed')

const msg1 = document.getElementById('message-1');
const msg2 = document.getElementById('message-2');
const msg3 = document.getElementById('message-3');


let randomNum = Math.floor(Math.random() * (20 - 0) + 1);
let numberGuessesLeft = 4;

guessButton.addEventListener('click', ()=>{
 // console.log('click');

numberGuessesLeft --;
const guess = Number(userGuess.value);

let msg1;
if (guess === randomNum) {
    msg1 = 'You\'re right!';
  }
else if (guess > randomNum) {
   msg1 = 'Number too high!';
 }
else if (guess < randomNum) {
   msg1 = 'Number too low!';
   }
else if (numberGuessesLeft === 0) {
   msg1 = 'No more guesses.';
 }
 
 msg2.textContent = 'No. of Guesses Left: ' + `${numberGuessesLeft}`;
 msg3.textContent = 'Guessed Numbers: ' + `${userGuess.value}`;

// console.log(numberGuessesLeft);
// console.log(randomNum); 

});