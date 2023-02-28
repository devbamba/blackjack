let player = {
    name : 'Joe',
    chips: 120
}
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el')
let cardEl = document.querySelector('#card-el')

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ': ' + player.chips + '€'

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber === 1){
        return 11
    }
    else if(randomNumber >= 11 && randomNumber <= 13){
        return 10
    }
    else{
        return randomNumber
    }
}

function startGame(){
    renderGame()
    isAlive = true
    let fisrtRandoomNumber = getRandomCard()
    let secondRandoomNumber = getRandomCard()
    cards = [fisrtRandoomNumber, secondRandoomNumber]
    sum = fisrtRandoomNumber + secondRandoomNumber
}

function renderGame(){
    sumEl.textContent = 'Sum: ' + sum
    cardEl.textContent = 'Cards: '

    for(let i=0; i < cards.length; i++){
        cardEl.textContent += cards[i] + ' '
    }


    if(sum <= 20){
        message = 'Do you want to draw a new card?'
    }
    
    else if(sum === 21){
        message = 'You got the Blackjack?'
        hasBlackJack = true;
    }
    else{
        message = 'You\'re out of the game'
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard(){
    if((isAlive === true) && (hasBlackJack === false)){
        let card = getRandomCard();    
    sum += card;
    cards.push(card)
    renderGame()
    }
}

let hands = ['papers', 'scissors', 'rock']

function getHands(){
    let randomItems = Math.floor(Math.random()*3)
    return hands[randomItems]
}
console.log(getHands())