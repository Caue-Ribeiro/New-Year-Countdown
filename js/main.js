import '../sass/style.scss'

const dayElement = document.querySelector('#day')
const hourElement = document.querySelector('#hour')
const minuteElement = document.querySelector('#minutes')
const secondsElement = document.querySelector('#seconds')
const allContent = document.querySelector('.all__content')
const body = document.querySelector('body')

let newYear = new Date('Jan 1, 2023 00:00:00').getTime()

function newYearCountdown() {
    let currentDate = new Date().getTime()
    let countdown = newYear - currentDate

    let secs = 1000
    let mins = secs * 60
    let hours = mins * 60
    let days = hours * 24

    let daysLeft = Math.floor(countdown / days)
    let hoursLeft = Math.floor((countdown % days) / hours)
    let minutesLeft = Math.floor((countdown % hours) / mins)
    let secondsLeft = Math.floor((countdown % mins) / secs)

    dayElement.innerHTML = daysLeft
    hourElement.innerHTML = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft
    minuteElement.innerHTML = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft
    secondsElement.innerHTML =
        secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft

    let timer = setTimeout(newYearCountdown, 1000)

    if (
        daysLeft == '0' &&
        hoursLeft == '0' &&
        minutesLeft == '0' &&
        secondsLeft == '0'
    ) {
        allContent.style.display = 'none'
        let div = document.createElement('div')
        div.innerHTML = `<h1>Happy New Year!</h1>`
        div.classList.add('newyear-msg')
        body.appendChild(div)
        clearInterval(timer)
    }
}

newYearCountdown()
