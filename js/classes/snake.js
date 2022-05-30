'use strict';
class Snake extends Canvas {
    snake = [
        { posX: 10, posY: 10 },
        { posX: 20, posY: 10 },
        { posX: 30, posY: 10 },
        { posX: 40, posY: 10, head: true }
    ];
    snakePositions = new Set();
    top = this.snake.length - 1;
    tail = null;

    constructor(width, heigth) {
        super();
        this.width = width;
        this.heigth = heigth;
        this.food = new Food(this.snakePositions);
        this.controls = new Controls();
        this.score = new Score();
    }

    updateSnakePositions(x, y, wall = false) {
        this.snakePositions = new Set();
        for (let s of this.snake) {
            if (s.head) {
                this.snake.push({
                    posX: !wall ? s.posX + (x) : x,
                    posY: !wall ? s.posY + (y) : y,
                    head: true
                })
                s.head = false;
                this.tail = this.snake.shift();
            }

            this.snakePositions.add(`${s.posX},${s.posY}`);
            this.context.fillStyle = COLORS.OBJECTS;
            this.context.fillRect(
                s.posX,
                s.posY,
                this.width,
                this.heigth
            );
        }
    }

    controlsSnake() {
        const direction = this.controls.movement()
        const snakeHead = this.snake[this.top]

        switch (direction) {
            case DIRECTIONS.TOP:
                if (snakeHead.posY > 0) this.updateSnakePositions(0, -10);
                else this.updateSnakePositions(
                    snakeHead.posX,
                    this.canvas.height - 10,
                    true
                );
                break;
            case DIRECTIONS.BOTTOM:
                if (snakeHead.posY < this.canvas.height - 10) this.updateSnakePositions(0, 10);
                else this.updateSnakePositions(
                    snakeHead.posX,
                    0,
                    true
                )
                break;
            case DIRECTIONS.LEFT:
                if (snakeHead.posX > 0) this.updateSnakePositions(-10, 0);
                else this.updateSnakePositions(
                    this.canvas.width - 10,
                    snakeHead.posY,
                    true
                )
                break;
            case DIRECTIONS.RIGHT:
                if (snakeHead.posX < this.canvas.width - 10) this.updateSnakePositions(10, 0);
                else this.updateSnakePositions(
                    0,
                    snakeHead.posY,
                    true
                )
                break;
        }
    }

    collisionTailSnake(){
        const { posX, posY } = this.snake[this.top]

        if(this.snakePositions.has(`${posX},${posY}`)){
            return true
        }
        
        return false
    }

    drawSnake() {
        const collision = this.collisionTailSnake();
        if(collision){
            this.score.setFinalScore(this.score.getScore);
            return true;
        }

        this.clearCanvas()

        const point = this.food.generateFood(
            this.snake[this.top].posX,
            this.snake[this.top].posY
        )

        if (point) {
            this.score.setScoreInDom();
            this.snake.unshift(this.tail);
            this.top = this.snake.length - 1;
        }

        this.controlsSnake();
        return false;
    }
}