const choices = ["ROCK", "PAPER", "SCISSORS"]

function getRandomChoiceNumber() {
    return Math.floor(Math.random() * choices.length)
}

// Get map of nums to Rock/Paper/Scissor choices.
// This adds a bit of extra randomness if shuffle == true.
function getNumToChoicesMap(shuffle = false) {
    const numChoices = choices.length
    const choicesMap = {}
    //  {
    //     0: "ROCK",
    //     1: "PAPER",
    //     2: "SCISSORS"
    //  }

    const jinit = shuffle ? getRandomChoiceNumber() : 0

    for (let i = 0, j = jinit; i < numChoices; i++, j = ++j % numChoices) {
        choicesMap[i] = choices[j]
    }

    return choicesMap
}

choicesMap = getNumToChoicesMap()

function computerPlay() {
    const computerChoice = getRandomChoiceNumber()
    return choicesMap[computerChoice]
}

function userPlay() {
    let userChoice = window.prompt("Rock, Paper, or Scissors?")
    userChoice = userChoice.toUpperCase()

    if (choices.includes(userChoice)) {
        return userChoice
    } else {
        return userPlay()
    }
}

function playRockPaperScissors(userSelection, computerSelection) {
    const beats = {
        [choices[0]]: choices[2],
        [choices[1]]: choices[0],
        [choices[2]]: choices[1]
    }

    let result;
    if (userSelection == computerSelection) {
        result = `It's a draw! ${userSelection} meets ${computerSelection}`
    }
    else if (beats[userSelection] == computerSelection) {
        result = `You win! ${userSelection} beats ${computerSelection}`
    } else {
        result = `You lose! ${computerSelection} beats ${userSelection}`
    }

    return result
}

function game() {
    for (let i = 0; i < 5; i++) {
        const cpu = computerPlay()
        const usr = userPlay()

        result = playRockPaperScissors(usr, cpu)
        console.log(result)
    }
}

game()