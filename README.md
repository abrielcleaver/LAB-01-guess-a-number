# Alchemy Bootstrap Template


## Guess A Number App
### HTML Elements (view)
* header -- static
* user input -- static
* button --- static
* user message -- dynamic & changes based on user guess

### State
* userGuess -- will hold value of input field
* randomNum -- will be generated at beginning of each game
* numGuesses -- number of guesses -- incremented every time user clicks button
* userMessage
    - 'You're correct': userGuess === randomNum 
    - 'No more guesses': numbGuesses > 4
    - 'Guess too high': userGuess > randomNum
    - 'Guess too low': userGuess < randomNum
    - 'Invalid guess': if input is >20 or not a number (stretch)

### PseudoCode for Event
``` javascript
// What events am I listening for?
//on button click do the following:
//      decrement or increment the guess count
//      get the value of the user guess from the input
//      CONVERT THE INPUT TO A NUMBER
//      compare user guess to randomNumber
//      if(userGuess === randomNum) -- display you won!
//      else if (numGuesses === 4) -- display you lost, out of guesses
//      else if (userGuess > randomNum) -- display guess too high
//      else if (userGuess < randomNum) -- display guess too low
```








## Making a plan

(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass