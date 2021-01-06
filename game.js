// import Food from './food.js'
// import Snake from './snake.js'

class Game {
    constructor(ele, score) {
        this.map = document.querySelector(ele)
        this.score = document.querySelector(score)
        this.food = new Food(this.map)
        this.snake = new Snake(this.map)
        this.changeDirection()
        this.level = 1 //2 3 4 5 6 7
        this.timer = 0
        this.count = 0

    }
    start() {
        this.timer = setInterval(() => {
            this.snake.move()
            if (this.snake.isEat(this.food)) {
                this.updateScore()
                this.snake.creHead()
                this.food.newFood()
            }
            if (this.snake.isDie()) {
                window.alert('game over')
                clearInterval(this.timer)
            }
        }, 500 / this.level)
    }
    stop() {
        clearInterval(this.timer)
    }
    restart() {
        window.location.reload()
    }
    changeDirection() {
        document.addEventListener('keydown', e => {
            e = e || window.event
            const code = e.keyCode || e.which
            switch (code) {
                case 37:
                    this.snake.direction = 'left';
                    break
                case 38:
                    this.snake.direction = 'top';
                    break
                case 39:
                    this.snake.direction = 'right';
                    break
                case 40:
                    this.snake.direction = 'bottom';
                    break
            }
        })
    }

    updateScore() {
        this.count++
            this.score.value = this.count * 100 + this.level * 10 - 10
        if (this.count % 3 === 0) {
            this.level++
                this.stop()
            this.start()
        }
    }

}