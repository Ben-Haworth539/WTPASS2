//Set Constants
const wintxt = document.getElementById("winnings")
const credtxt = document.getElementById("credittext")

const wheel1 = document.getElementById("img1")
const wheel2 = document.getElementById("img2")
const wheel3 = document.getElementById("img3")

const message = document.getElementById("message")

const spinBtn = document.getElementById("spin")
const creditBtn = document.getElementById("credit")
const collectBtn = document.getElementById("collect")

//Event Listeners
spinBtn.addEventListener("click", spinFunction);
creditBtn.addEventListener("click", creditFunction);
collectBtn.addEventListener("click", collectFunction);

//Initalise Machine to Zero
message.innerText = "Put some coin in!";
let credVal = 0;
credtxt.innerText = credVal;
let winVal = 0;
wintxt.innerText = winVal;
spinBtn.disabled = true;
collectBtn.disabled = true;

randomizeImg();

//Button Functions
function creditFunction() {
    event.preventDefault();
    credVal++;
    credtxt.innerText = credVal;
    spinBtn.disabled = false
}

function collectFunction() {
    event.preventDefault();
    message.innerText = "Congratulations! You won" + winVal + "coins!"
    collectBtn.disabled = true;
    winVal = 0;
    wintxt.innerText = winVal;
}

function spinFunction() {
    randomizeImg();
    credVal--;
    credtxt.innerText = credVal;
    message.innerText = "";
    if (credVal == 0) {
        spinBtn.disabled = true;
        message.innertext = "Put some coin in!"
    }
    else {
        message.innerText = "Best o' luck!"
    }
    calcWin();
}

//call function
randomizeImg();

//calculate Win
function calcWin() {
    if (img1.src == img2.src && img1.src == img3.src) {
        winVal += 10;
        wintxt.innerText = winVal;
        message.innerText = "WOW! You gained 10 coins!";
    }
    else if (img2.src == img3.src) {
        winVal += 5;
        wintxt.innerText = winVal;
        message.innerText = "Not bad, you gained 5 coins!";
    }
    else {
        message.innerText = "You get nothing! Bahahah!"
    }
    if (winVal == 0) {
        collectBtn.disabled = true;
    }
    else { collectBtn.disabled = false; }
}

// Random number generator, heart of the fruit machine. 
function randomizeImg() {
    generator1 = Math.round(Math.random() * 7);
    img1.src = "images/" + generator1 + ".png";
    generator2 = Math.round(Math.random() * 7);
    img2.src = "images/" + generator2 + ".png";
    generator3 = Math.round(Math.random() * 7);
    img3.src = "images/" + generator3 + ".png";
}
