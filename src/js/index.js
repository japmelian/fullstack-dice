const DICE = document.getElementById("buttonPlay");
const RESULT_DICE = document.getElementById("result");
const HISTORY_DICES = document.getElementById("panel-hist");
const MAX_HISTORY = 6;

let history = [];

function drawDices() {
    const PAST_RESULTS = document.querySelectorAll("#dice-hist");

    for (let i = 0; i < PAST_RESULTS.length; i++) {
        HISTORY_DICES.removeChild(PAST_RESULTS[i]);
    }    

    for (let i = 0; i < history.length; i++) {
        let DICE_HIST = document.createElement("div");
        DICE_HIST.id = "dice-hist";
        DICE_HIST.textContent = history[i];

        HISTORY_DICES.appendChild(DICE_HIST);
    }
}

function play() {
    const result = Math.round(Math.random() * 5) + 1;
    RESULT_DICE.innerHTML = result;

    if (history.length == MAX_HISTORY) {
        history.shift();
    }

    history.push(result);

    drawDices();
}

DICE.addEventListener("click", play);
