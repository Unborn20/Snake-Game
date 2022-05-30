'use strict';
class Game extends Canvas {
    constructor() {
        super();
        this.main = null;
        this.snake = null;
        this.snakeCollision = false;
        this.gamePause = false;
    }

    process = () => {        
        this.snakeCollision = this.snake.drawSnake();
        
        if (this.snakeCollision) {
            this.context.font = '50px Arial';
            this.context.fillStyle = COLORS.OBJECTS;
            this.context.textAlign = "center";
            this.context.fillText('Game Over', this.canvas.width / 2, this.canvas.height / 2);
            this.gameOver();
            return;
        }
    }

    start = () => {        
        this.snake = new Snake(10, 10);
        this.main = setInterval(this.process, (1000 / 15));
    }

    pause = event => {
        if (event.key === KEYS.P) {
            this.gamePause = !this.gamePause;

            if (this.gamePause && !this.snakeCollision) {
                clearInterval(this.main);
                this.context.font = '50px Arial';
                this.context.fillStyle = COLORS.OBJECTS;
                this.context.textAlign = "center";
                this.context.fillText('Pause', this.canvas.width / 2, this.canvas.height / 2);
            }

            if (!this.gamePause) this.main = setInterval(this.process, (1000 / 15));
        }
    }

    restart = () => {
        if (this.snakeCollision) {
            this.snakeCollision = false;
            this.snake = new Snake(10, 10);
            this.main = setInterval(this.process, (1000 / 15));            
        }
    }

    gameOver = () => {
        clearInterval(this.main);        
    }
}