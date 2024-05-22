let playerScore = localStorage.getItem('playerScore') ? parseInt(localStorage.getItem('playerScore')) : 0;
let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;

// Update the scoreboards with the initial scores
document.querySelector('.yourScore').textContent = playerScore;
document.querySelector('.computerScore').textContent = computerScore;

const choiceHTML = {
    'stone': `
        <div class="stone">
            <div class="innerCircle">
                <img src="/assets/rockImg.png" alt="notAvail">
            </div>
        </div>`,
    'paper': `
        <div class="paper">
            <div class="innerCircle">
                <img src="/assets/paperImg.png" alt="notAvail">
            </div>
        </div>`,
    'scissor': `
        <div class="scissor">
            <div class="innerCircle">
                <img src="/assets/scissorImg.png" alt="notAvail">
            </div>
        </div>`
};

const playerChoice = (choice) => {
    
    
    const playGame = (choice) => {
        const computerOptions = ['stone', 'paper', 'scissor'];

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];
        console.log(computerChoice);
        const verdict = winner(choice, computerChoice);
        displayChoices(choice, computerChoice, verdict);
    }

    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.yourScore');
        const computerScoreBoard = document.querySelector('.computerScore');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        let verdict = '';

        if(player === computer){
            result.textContent = 'Tie'
            verdict = 'Tie';
        }
        else if(player == 'stone'){
            
            if (computer == 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                verdict = 'You Lose';
            } else {
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                verdict = 'You Win';
            }
        }
        else if (player == 'scissor') {
            if (computer == 'stone') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                verdict = 'You Lose';
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                verdict = 'You Win';
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissor') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                verdict = 'You Lose';
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                verdict = 'You Win';
            }
        }
        // Save the updated scores to localStorage
        localStorage.setItem('playerScore', playerScore);
        localStorage.setItem('computerScore', computerScore);

        return verdict;
    }

    const displayChoices = (playerChoice, computerChoice, verdict) => {
        const gameBody = document.getElementById('gameBody');
        const resultContainer = document.getElementById('resultContainer');
        
        // Hide the gameBody and show the resultContainer
        gameBody.style.display = 'none';
        resultContainer.style.display = 'flex';
        resultContainer.style.justifyContent = 'center';

        resultContainer.innerHTML = `
        <div class="finalVerdict">
        <h1>${verdict}</h1>
        <h1>AGAINST PC</h1>
        <button onclick="restartGame()" class="restartBtn">${verdict === 'Tie' ? 'REPLAY' : 'PLAY AGAIN' }</button>
        <div class="playerChoice">
                <h3>YOU PICKED</h3>
                ${choiceHTML[playerChoice]}
            </div>
            <div class="computerChoice">
                <h3>PC PICKED</h3>
                ${choiceHTML[computerChoice]}
            </div>
        </div>
            `;
    };

    playGame(choice);
}


const restartGame = () => {
    const gameBody = document.getElementById('gameBody');
    const resultContainer = document.getElementById('resultContainer');

    // Hide the resultContainer and show the gameBody
    resultContainer.style.display = 'none';
    gameBody.style.display = 'flex';
}

function toggleGameRules() {
    var gameRulesContainer = document.getElementById('gameRulesContainer');
    if (gameRulesContainer.style.display === 'none') {
        gameRulesContainer.style.display = 'block';
    } else {
        gameRulesContainer.style.display = 'none';
    }
}

function nextPage() {
    var hoorayPage = document.getElementById('hoorayPage');
    var mainGame = document.getElementById('mainGame');

    mainGame.style.display = 'none';
    hoorayPage.style.display = 'block';
}

function togglePlayAgain() {
    var hoorayPage = document.getElementById('hoorayPage');
    var mainGame = document.getElementById('mainGame');

    localStorage.setItem('playerScore', 0);
    localStorage.setItem('computerScore', 0);

     // Retrieve scores from localStorage
     const playerScore = localStorage.getItem('playerScore');
     const computerScore = localStorage.getItem('computerScore');

    const playerScoreBoard = document.querySelector('.yourScore');
    const computerScoreBoard = document.querySelector('.computerScore');

    computerScoreBoard.textContent = computerScore;
    playerScoreBoard.textContent = playerScore;

    mainGame.style.display = 'block';
    hoorayPage.style.display = 'none';


}