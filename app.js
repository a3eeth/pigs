var scores, roundScore, activePlayer;
//generate random number
function randomGen() {
    return Math.floor(Math.random() * 6 + 1);
}
//init
function resetNew() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
}
resetNew();
document.querySelector('.btn-roll').addEventListener('click', function () {
    var dice = randomGen();
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = 'dice-' + dice + '.png';
    diceDOM.style.display = 'block';
    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceDOM.style.display = 'none';
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // add current score to global score
}); 

document.querySelector('.btn-new').addEventListener('click', resetNew);
