function hideElement(getElementById) {
  const hiddenElement = document.getElementById(getElementById);
  hiddenElement.classList.add("hidden");
}
function showElement(getElementById) {
  const hiddenElement = document.getElementById(getElementById);
  hiddenElement.classList.remove("hidden");
}
function getBackgroundColorById(getElementById) {
  const setBackground = document.getElementById(getElementById);
  setBackground.classList.add("bg-orange-400");
}
function removeBackgroundColorById(getElementById) {
  const setBackground = document.getElementById(getElementById);
  setBackground.classList.remove("bg-orange-400");
}
function getTextElementValueByID(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const value = parseInt(elementText);
  return value;
}
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function play() {
  hideElement("intro");
  showElement("play-ground");
  continueGame();
}
function playAgain (){
    hideElement("final-stage");
    showElement("play-ground");
    document.getElementById('score').innerText = 0;
    document.getElementById('life').innerText =5;

}
//generate random alphabet
function continueGame() {
  const str = "abcdefghijklmnopqrsuvwtxyz";
  const alphabets = str.split("");
  const randomAlphabets = Math.round(Math.random() * 25);
  const currentAlphabet = alphabets[randomAlphabets];
  console.log(currentAlphabet);
  //set randomly alphabet on the display----------
  document.getElementById("display-alphabet").innerText = currentAlphabet;
  //set bg color by id
  getBackgroundColorById(currentAlphabet);
}

document.addEventListener("keyup", function (e) {
    const currentScore = getTextElementValueByID("score");
    const updatedScore = currentScore + 1;
  const playerPressed = e.key;
  if(playerPressed === 'Escape'){
    hideElement('play-ground');
    showElement('final-stage');
    const currentScore = getTextElementValueByID("score");
    setTextElementValueById('final-score',currentScore)
}
  const displayAlphabet = document.getElementById("display-alphabet");
  const currentAlpha = displayAlphabet.innerText;
  const expectedAlphabet = currentAlpha.toLowerCase();
  if (playerPressed === expectedAlphabet) {
    setTextElementValueById("score", updatedScore);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
   
  } else {
    const currentLife = getTextElementValueByID("life");
    const updatedLife = currentLife - 1;
    setTextElementValueById('life',updatedLife);

    if(updatedLife === 0){
        hideElement('play-ground');
        showElement('final-stage');
        const currentScore = getTextElementValueByID("score");
        setTextElementValueById('final-score',currentScore)
    }
  }
});
