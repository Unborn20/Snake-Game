'use strict';
const game = new Game();
game.start();
document.addEventListener('keypress', game.pause);
document.addEventListener('keypress', game.restart);
