let scorePara = document.querySelector('.score-para')
let messagePara = document.querySelector('.message-para')
let cardsPara = document.querySelector('.cards-para')
// console.log(messagePara);

let startGame = document.querySelector('.startgame-el')
let newCard = document.querySelector('.newcard-el')



// variables

let message = ''
let sum = 0
let firstCard = 0
let secondCard = 0
let cards = [firstCard, secondCard]
let gameStart = false
let isAlive = false
// console.log(cards);


// randomNumber function
function randomNumber() {
    let randomNo = Math.floor(Math.random() * 11) + 1;

    if (randomNo === 1) {
        randomNo = 11
    }
    return randomNo
}

function messageLogic() {
    if (sum < 21) {
        message = 'do you want to draw a new Card?'
        isAlive = true
    }
    else if (sum === 21) {
        message = 'you have got black jack!'
        isAlive = false;

    }
    else if (sum > 21) {
        message = 'you are out of the game'
        isAlive = false

    }
}

function renderGame() {
    sum = 0
    firstCard = randomNumber()
    secondCard = randomNumber()
    cards = [firstCard, secondCard]
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i]
    }
    console.log(cards);

    // console.log(sum);
    messageLogic()

    scorePara.textContent = sum;
    cardsPara.textContent = 'cards:' + firstCard + ' ' + secondCard
    messagePara.textContent = message
    gameStart = true

}

function applyForNewCard() {
    let thirdCard = randomNumber()
    cards.push(thirdCard)

    if (isAlive === true && gameStart === true) {

        sum += thirdCard

        if (sum < 21) {
            message = 'do you want to draw a new Card?'
            isAlive = true
        }
        else if (sum === 21) {
            message = 'you have got black jack!'
            isAlive = false;

        }
        else if (sum > 21) {
            message = 'you are out of the game'
            isAlive = false;


        }

        // console.log(cards);
        // console.log(sum);
        scorePara.textContent = sum
        messagePara.textContent = message
        cardsPara.textContent += ' ' + thirdCard

    }


}




startGame.addEventListener('click', renderGame)
newCard.addEventListener('click', applyForNewCard)