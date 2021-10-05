
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

let userStatus;
if (guess === randomNum) {
    userStatus = 'You\'re right!';
  }
else if (guess > randomNum) {
   userStatus = 'Number too high!';
 }
else if (guess < randomNum) {
   userStatus = 'Number too low!';
   }
else if (numberGuessesLeft === 0) {
   userStatus = 'No more guesses.';
   guessButton.style.display = 'none';
 }
 
 msg1.textContent = `${userStatus}`;
 msg2.textContent = 'No. of Guesses Left: ' + `${numberGuessesLeft}`;
 msg3.textContent = 'Guessed Numbers: ' + `${userGuess.value}`;

 // how do i get msg3 to list all numbers guessed and not just one at a time? ^^

// console.log(numberGuessesLeft);
// console.log(randomNum); 

});