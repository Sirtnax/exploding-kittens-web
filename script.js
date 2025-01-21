const startGameButton = document.getElementById('start-game');
const gameBoard = document.getElementById('game-board');

startGameButton.addEventListener('click', () => {
    gameBoard.innerHTML = '<p>The game has started!</p>';
});
