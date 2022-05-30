'use strict';
class Canvas {
    constructor(){
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');                
    }

    clearCanvas = () => {
        this.context.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        )
    }
}