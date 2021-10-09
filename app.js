
const userGuess = document.getElementById('user-guess');
const guessButton = document.getElementById('guess-button');
const resetButton = document.getElementById('resetButton');

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
    } else {
    // (guess < randomNum) {
        userStatus = 'Number too low!';
    } 
    if (guess !== randomNum && numberGuessesLeft === 0) {
      //  console.log('I am here');
        userStatus = 'No more guesses.';
        guessButton.style.display = 'none';
      
    }

    msg1.textContent = `${userStatus}`;
    msg2.textContent = 'Number of Guesses Left: ' + `${numberGuessesLeft}`;
    msg3.textContent = 'Guessed Numbers: ' + `${userGuess.value}`;

 // how do i get msg3 to list all numbers guessed and not just one at a time? ^^

// console.log(numberGuessesLeft);
// console.log(randomNum); 

});

resetButton.addEventListener('click', ()=>{
  msg1.textContent = '';
  msg2.textContent = 'Number of Guesses Left: 0';
  msg3.textContent = 'Guessed Numbers: None ';
  // console.log('click');
  guessButton.style.display = '' ;
});