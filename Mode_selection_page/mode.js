// initialising variables

let computerGuess;
let userGuess = [];
let userGuessUpdated = document.getElementById("textOutput");
let userNumberUpdate = document.querySelector("#inputBox");
let audio = new Audio("./audio.mp3");
let audio2 = new Audio(
  "./mixkit-arcade-game-complete-or-approved-mission-205.wav"
  );
  let audio3 = new Audio("./mixkit-bubbly-achievement-tone-3193.wav");
  let audio4 = new Audio("./videogame-death-sound-43894.mp3");
  let audio5 = new Audio("./Feel-Good(chosic.com).mp3");
let clue = document.querySelector(".clue_text_span");
let player_score = document.querySelector(".score1");
let maxGuess;
let points;
var score = 100;
function randomNuber() {
  computerGuess = Math.floor(Math.random() * 100);
  // console.log(computerGuess);
  var temp = document.getElementById("newGameButton");
  temp.style.display = "none";

  document.getElementById("gameArea").style.display = "none";
}
randomNuber();

const startGame = () => {
  document.querySelector(".maindiv").style.display = "none";

  document.querySelector("#gameArea").style.display = "block";

  // clue

  if (computerGuess % 2 == 0) {
    clue.innerHTML = "The number is even";
  } else if (computerGuess % 2 != 0) {
    clue.innerHTML = "The number is odd";
  }
};
// reload the page or restart
const newGameBegin = () => {
  audio.play();
  window.location.reload();
};
// startNewGame
const startNewGame = () => {
  var temp = document.getElementById("newGameButton");
  temp.style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
  audio.play();
};

// Main logic

const compareGuess = () => {
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  // checking the players guess
  if (userGuess.length < maxGuess) {
    if (userGuess[userGuess.length - 1] > computerGuess) {
      userGuessUpdated.innerHTML = "Your Guess is High😯";
      userNumberUpdate.value = "";
      audio.play();
    } else if (userGuess[userGuess.length - 1] < computerGuess) {
      userGuessUpdated.innerHTML = "Your Guess is Low🙄";
      userNumberUpdate.value = "";
      audio.play();
    } else {
      userGuessUpdated.innerHTML = "  &nbsp; &nbsp; &nbsp;You are Correct🥳";
      startNewGame();
      audio3.play();
      audio5.pause();


      score = score - (userGuess.length -1) * points;
      player_score.innerHTML = `your score is ${score}`;
      console.log(score);
    }
  } else {
    if (userGuess[userGuess.length - 1] > computerGuess) {
      userGuessUpdated.innerHTML = `You Lost the correct number was${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
      audio4.play();
      audio5.pause();


      // score = score - (userGuess.length - 1) * 20;
      score = 0;
    
      player_score.innerHTML = `your score is ${score}`;
      console.log(score);
    } else if (userGuess[userGuess.length - 1] < computerGuess) {
      userGuessUpdated.innerHTML = `You Lost the correct number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
      audio4.play();
      audio5.pause();


      score = 0;
    
      player_score.innerHTML = `your score is ${score}`;
    } else {
      userGuessUpdated.innerHTML = "You are Correct🥳";
      startNewGame();
      audio3.play();
      audio5.pause();


      score = score - (userGuess.length-1 ) * points;
      player_score.innerHTML = `your score is ${score}`;
      console.log(score);
    }
  }

  document.getElementById("attempts").innerHTML = userGuess.length;
};
audio5.play();

// differenciating easy and hadrd modes

const easyMode = () => {
  maxGuess = 10;
  points=10
  startGame();
  audio.play();
};

const hardMode = () => {
  maxGuess = 5;
  points=20
  audio.play();
  startGame();
};

