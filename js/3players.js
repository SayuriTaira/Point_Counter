const playerOne = {
    count: document.querySelector('.container1 .count'),
    buttons: document.querySelectorAll('.container1 .button'),
    counter: 0
}

const playerTwo = {
    count: document.querySelector('.container2 .count'),
    buttons: document.querySelectorAll('.container2 .button'),
    counter: 0
}

const playerThree = {
    count: document.querySelector('.container3 .count'),
    buttons: document.querySelectorAll('.container3 .button'),
    counter: 0
}

function updateCounter (player, btnClass) {
    if (btnClass.contains('decreaseBtn')) {
        player.counter--
    } else if (btnClass.contains('increaseBtn')) {
        player.counter++
    } else {
        player.counter = 0
    }

    const countElement = player.count

    if (player.counter < 0) {
        countElement.style.color = 'red'
    } else if (player.counter > 0) {
        countElement.style.color = 'green'
    } else {
        countElement.style.color = 'black'
    }

    countElement.innerText = player.counter
}

playerOne.buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btnClass = e.currentTarget.classList
        updateCounter(playerOne, btnClass)
    })
})

playerTwo.buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btnClass = e.currentTarget.classList
        updateCounter(playerTwo, btnClass)
    })
})  

playerThree.buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btnClass = e.currentTarget.classList
        updateCounter(playerThree, btnClass)
    })
})

