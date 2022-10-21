function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    }

    else {
        itens.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth > 768) {
        itens.style.display = 'block'
    }

    else {
        itens.style.display = 'none'
    }
}

let to = new Date('nov 12 2022 21:00:00');

function update() {
    let from = new Date();
    diff = to - from;
    if (diff > 0) {
        let days = setTwoDigit(Math.floor(diff / 1000 / 60 / 60 / 24)),
            hours = setTwoDigit(Math.floor(diff / 1000 / 60 / 60) % 24),
            min = setTwoDigit(Math.floor(diff / 1000 / 60) % 60),
            sec = setTwoDigit(Math.floor(diff / 1000) % 60)

        document.querySelector('#days').innerText = days
        document.querySelector('#hours').innerText = hours
        document.querySelector('#minutes').innerText = min
        document.querySelector('#seconds').innerText = sec
    }
    
    else {
        clearInterval(interval);
    }
}

let interval = setInterval(update, 1000);

function setTwoDigit(argument) {
    return argument > 9 ? argument : '0' + argument;
}