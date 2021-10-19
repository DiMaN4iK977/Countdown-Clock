let time = 3;

let start = document.querySelector('.startTime');
let inputValue = document.querySelector('#input');
let input = document.querySelector('.input');
let setTimeBtn = document.querySelector('.setTime');
let setTimer = document.querySelector('.setTimer');
let timeFinish = document.querySelector('.finish');
let timeBody = document.querySelector('.countdown');
let timeTitle = document.querySelector('.countdown__title');
let clockDays = document.querySelector('.days');
let clockHour = document.querySelector('.hours');
let clockMinutes = document.querySelector('.minutes');
let clockSeconds = document.querySelector('.seconds');
let daysBtn = document.querySelector('#daysValue');
let hoursBtn = document.querySelector('#hoursValue');
let minutesBtn = document.querySelector('#minuteValue');
let secondsBtn = document.querySelector('#secondsValue');
let timerID = 0;

function startClock() {
    timerID = setInterval(decreaseTime, 1000)
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finish();
        clearInterval(timerID);
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    clock(value);
}

function clock(time) {
    let days = time > 0 ? Math.floor(time / 60 / 60 / 24) : 0;
    let hours = time > 0 ? Math.floor(time  / 60 / 60) % 24 : 0;
    let minutes = time > 0 ? Math.floor(time  / 60) % 60 : 0;
    let seconds = time > 0 ? Math.floor(time  % 60 ): 0;
    if(days < 10) {
        days = `0${days}`;
    }
    if(hours < 10) {
        hours = `0${hours}`;
    }
    if(minutes < 10) {
        minutes = `0${minutes}`;
    }
    if(seconds < 10) {
        seconds = `0${seconds}`;
    }

    clockDays.innerHTML = `${days}`;
    clockHour.innerHTML = `${hours}`;
    clockMinutes.innerHTML = `${minutes}`;
    clockSeconds.innerHTML = `${seconds}`;
}

clock(time);

function  finish() {
    timeFinish.style.display = 'flex';
    timeBody.style.display = 'none';
    timeTitle.style.display = 'none';
}

setTimeBtn.addEventListener("click", ()=> {
    timeBody.style.display = 'none';
    setTimer.style.display = 'flex';
    setTimeBtn.style.display = 'none';
    start.style.marginTop = '50px';
    start.style.marginLeft = '300px';
    input.style.display = 'inline-block';
})

start.addEventListener('click', () => {
    startClock();
    timeBody.style.display = 'inline-block';
    setTimer.style.display = 'none';
    setTimeBtn.style.display = 'none';
    start.style.display = 'none';
    input.style.display = 'none';
})

daysBtn.addEventListener('click', () => {
    time = inputValue.value;
    time = time*24*3600;
})

hoursBtn.addEventListener('click', () => {
    time = inputValue.value;
    time = time*3600;
})

minutesBtn.addEventListener('click', () => {
    time = inputValue.value;
    time = time*60;
})

secondsBtn.addEventListener('click', () => {
    time = inputValue.value;
})


// reloadBtn.addEventListener('click', () => {
//     timeBody.style.display = 'inline-block';
//     timeFinish.style.display = 'none';
//     timeTitle.style.display = 'block';
//     reloadBtn.style.display = 'none';
//     setTimeBtn.style.display = 'flex';
//     start.style.display = 'flex';
//     setStart.style.display = 'block';
// })

