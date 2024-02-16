// function play(){
//     // step 1: hide the home screen. to hide the screen add the class hidden to the home section
//      const homeSec = document.getElementById('home');
//      homeSec.classList.add('hidden');
//     // step 2: show the playground
//     const playgroundSec = document.getElementById('play-ground');
//     playgroundSec.classList.remove('hidden');
// }

function continueGame(){
    // step - 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log("Your random alphabet" ,alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
}