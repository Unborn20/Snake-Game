'use strict';
class Food extends Canvas{
    x = 0
    y = 0

    constructor(snakePositions) {
        super()
        this.snakePositions = snakePositions
        this.foodPosition()
    }

    drawFood(){
        this.context.fillStyle = COLORS.OBJECTS;
        this.context.fillRect(this.x, this.y, 10, 10);
    }

    foodPosition() {
        const min = Math.ceil(0)
        const maxX = Math.floor(60)
        const maxY = Math.floor(40)
        const posX = (Math.floor(Math.random() * (maxX - min)) + min) * 10
        const posY = (Math.floor(Math.random() * (maxY - min)) + min) * 10
        if(this.snakePositions.has(`${posX},${posY}`)){
            return this.foodPosition()
        }
        this.x = posX
        this.y = posY
        return
    }

    generateFood(snakePosX, snakePosY) {
        if(snakePosX === this.x && snakePosY === this.y){            
            this.foodPosition()
            this.drawFood()
            return true
        }
        this.drawFood()
        return false
    }
}