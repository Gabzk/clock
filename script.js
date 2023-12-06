function updateAnalogClock(seconds, minutes, hour) {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    if (seconds === 0) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = 'all 0.05s';
    }

    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hourDegrees = ((hour / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

function updateDigitalClock(hours, minutes, seconds) {
    const hoursElement = document.querySelector('.hours');
    const minutesElement = document.querySelector('.minutes');
    const secondsElement = document.querySelector('.seconds');

    const paddedSeconds = seconds.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedHour = hours.toString().padStart(2, '0');

    hoursElement.textContent = paddedHour;
    minutesElement.textContent = paddedMinutes;
    secondsElement.textContent = paddedSeconds;
}

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();

    updateAnalogClock(seconds, minutes, hour);
    updateDigitalClock(hour, minutes, seconds);

    requestAnimationFrame(updateClock);
}

updateClock();
