const count = document.querySelector('.count')
const count2 = document.querySelector('.count2')
const btns = document.querySelectorAll('.button')
const btns2 = document.querySelectorAll('.button2')

let counter = 0
let counter2 = 0

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btnClass = e.currentTarget.classList 

        if (btnClass.contains('decreaseBtn')) {
            counter--
        } else if (btnClass.contains('increaseBtn')) {
            counter++
        } else {
            counter = 0
        }

        if (counter < 0) {
            count.style.color = 'red'
        } else if (counter > 0) {
            count.style.color = 'green'
        } else {
            count.style.color = 'black'
        }

        count.innerText = counter

    })
});

btns2.forEach((btn2) => {
    btn2.addEventListener('click', (e) => {
        const btnClass2 = e.currentTarget.classList
        
        if (btnClass2.contains('decreaseBtn2')) {
            counter2--
        } else if (btnClass2.contains('increaseBtn2')) {
            counter2++
        } else {
            counter2 = 0
        }

        if(counter2 < 0) {
            count2.style.color = 'red'
        } else if (counter2 > 0) {
            count2.style.color = 'green'
        } else {
            count2.style.color = 'black'
        }

        count2.innerText = counter2
    })
});