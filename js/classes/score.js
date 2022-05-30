'use strict';
class Score extends Canvas{    
    domScore = document.querySelector('#score');
    domMaxScore = document.querySelector('#max_score');
    
    constructor(){
        super();
        this.score = 0;
        this.maxScore = JSON.parse(localStorage.getItem('Max_Score')) || 0;
        this.domScore.textContent = `Score: ${this.score}`;
        this.domMaxScore.textContent = `Max Score: ${this.maxScore}`;
    }
    
    /**
     * @param {number} score
     */
    setFinalScore(score){
        if(this.maxScore === null || this.maxScore < score){
            this.maxScore = score;
            localStorage.setItem('Max_Score', this.maxScore);
        }
        
        this.domMaxScore.textContent = `Max Score: ${this.maxScore}`;
    }

    get getScore(){
        return this.score;
    }

    setScoreInDom(){
        this.score += 1
        this.domScore.textContent = `Score: ${this.score}`
    }
}