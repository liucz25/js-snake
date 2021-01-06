import Game from './game.js'

const g = new Game('.map', '.score')

const startBtn = document.querySelector('.start')
startBtn.addEventListener('click', () => {
    g.start()
})

const stoptBtn = document.querySelector('.stop')
startBtn.addEventListener('click', () => {
    g.stop()
})
const restartBtn = document.querySelector('.start')
startBtn.addEventListener('click', () => {
    g.restart()
})