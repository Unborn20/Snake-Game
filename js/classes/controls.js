'use strict';
class Controls {
    direction = DIRECTIONS.RIGHT
    pressed = false

    movement() {
        document.addEventListener('keydown', e => {
            if(!this.pressed) { //Prevent multiple keypress
                switch (e.key) {
                    case KEYS.W:
                        if (this.direction !== DIRECTIONS.BOTTOM) {
                            this.direction = DIRECTIONS.TOP
                        }
                        this.pressed = true
                        break;
                    case KEYS.S:
                        if (this.direction !== DIRECTIONS.TOP) {
                            this.direction = DIRECTIONS.BOTTOM
                        }
                        this.pressed = true
                        break;
                    case KEYS.A:
                        if (this.direction !== DIRECTIONS.RIGHT) {
                            this.direction = DIRECTIONS.LEFT
                        }
                        this.pressed = true
                        break;
                    case KEYS.D:
                        if (this.direction !== DIRECTIONS.LEFT) {
                            this.direction = DIRECTIONS.RIGHT
                        }
                        this.pressed = true
                        break;
                }
            }
        })
        this.pressed = false
        return this.direction
    }
}