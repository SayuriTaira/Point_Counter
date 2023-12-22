const btns = document.querySelectorAll('.button')
const count = document.querySelector('.count')

let counter = 0

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        btnClass = e.currentTarget.classList

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