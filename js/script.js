function changeStyleBasedOnTime() {
    let currentHour = new Date().getHours();
    let sayHi = document.getElementById('say-hi');
    let element = document.getElementById('time-based-style'); 

    element.classList.remove('aurore', 'matin', 'apres-midi', 'soiree', 'nuit' );

    if (currentHour > 5 && currentHour <= 18){
        sayHi.textContent = 'Bonjour il est ! :';
    }else{
        sayHi.textContent = 'Bonsoir il est ! :';
    }
    
    if (currentHour > 5 && currentHour <= 8){
        element.classList.add('aurore');
    }else if (currentHour > 8 && currentHour <= 12){
        element.classList.add('matin');
    }else if(currentHour > 12 && currentHour <= 18){
        element.classList.add('apres-midi');
    }else if(currentHour > 18 && currentHour <= 22){
        element.classList.add('soiree');
        console.log(element)
    }else if(currentHour > 22 || currentHour <= 5) {
        element.classList.add('nuit');
    }
} 

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('time-display').textContent = `${timeString}`;

    changeStyleBasedOnTime();
} 

setInterval(updateClock, 1000);

updateClock();

