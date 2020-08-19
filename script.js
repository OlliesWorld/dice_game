// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"

}

/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        player1Dice.animate({
            opacity: [0, 1],
            background: ["#fb5607, #ff006e, #8338ec, #3a86ff"],
            transform: ["rotate3d(0, 0, 1, -90deg)",
                "rotate3d(1, 0, 0, 180deg)",
                "rotate3d(1, 0, 0, 90deg)",
                "rotate3d(1, 0, 0, -90deg)",
                "rotate3d(0, 1, 0, -90deg)",
                "rotate3d(0, 1, 0, 90deg)"] // offset: 0, 0.5, 1
        }, 1000);
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        player2Dice.animate({
            opacity: [0, 1],
            background: ["#0023BF", "#0CC6BF", "#A8D329"],
            transform: ["rotate3d(0, 0, 1, -90deg)",
                "rotate3d(1, 0, 0, 180deg)",
                "rotate3d(1, 0, 0, 90deg)",
                "rotate3d(1, 0, 0, -90deg)",
                "rotate3d(0, 1, 0, -90deg)",
                "rotate3d(0, 1, 0, 90deg)"] // offset: 0, 0.5, 1
        }, 1000);
    }

    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        message.style.backgroundColor = '#8338ec'
        showResetButton()

    } else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        message.style.backgroundColor = '#fb5607'
        showResetButton()

    }
    player1Turn = !player1Turn
})

resetBtn.addEventListener("click", function () {
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    message.style.backgroundColor = 'transparent'

}