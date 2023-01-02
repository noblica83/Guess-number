
let randomNumber = Math.floor (Math.random()*100)+1 ;
/*opseg u kome odredjuje nasumicno broj*/
/*definisanje konstanta*/
const guesses= document.querySelector (".guesses");
const lastResult = document.querySelector (".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
      let resetButton;

      function checkGuess() {
        const userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = 'Predhodne predpostavke: ';
        }

        guesses.textContent += userGuess + ' ';



  if (userGuess === randomNumber) {
    lastResult.textContent = "Čestitam!";
    lastResult.style.backgroundColor="green";
    lowOrHi.textContent=" ";
    setGameOver();
  }
  else if (guessCount === 10){
    lastResult.textContent ="Igra je gotova!!!";
    lowOrHi.textContent=" ";
    setGameOver();
  }
else {
  lastResult.textContent = 'Promašaj!';
  lastResult.style.color ="red";
  lastResult.style.fontSize ="25px";
  if (userGuess<randomNumber){
    lowOrHi.textContent="Poslednja predpostavka je bila previše niska!";
    lowOrHi.style.color="red";
  }
  else if (userGuess>randomNumber){
    lowOrHi.textContent="Poslednja predpostavka je bila suvise visoka!";
    lowOrHi.style.color="red";

  }
}
guessCount++;
guessField.value="";
guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
 guessField.disable=true;
 guessSubmit.disable=true;
 resetButton =document.createElement("button");
 resetButton.textContent ="Počni iz početka!";
 resetButton.style.backgroundColor="darkgreen";
 resetButton.style.borderRadius="7px";
 resetButton.style.position = "absolute";
 resetButton.style.left = "50%";
 

 resetButton.style.transform = "translateX(-50%)";
 resetButton.style.bottom = "24%";



 document.body.appendChild(resetButton);
 resetButton.addEventListener("click",resetGame);

}
function resetGame(){
  guessCount =1;
  const resetParas=document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent ="";
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disable=false;
  guessSubmit.disable=false;
  guessField.value="";
  guessField.focus();
  resetButton.style.
  randomNumber=Math.floor(Math.random()*100)+1;

}
