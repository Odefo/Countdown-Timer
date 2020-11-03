// Select elements on the page

const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const container = document.querySelector('.container');


// current year 
const currentYear= new Date().getFullYear();

const newYear = new Date(`jan 01 ${currentYear + 1} 00:00:00`);

// Format Time
function formatTime(time){
    return time < 10 ? (`0${time}`): time;
}

// countdown function

function countdownToNewYear(){
    const todaysDate = new Date();
    const noOfDaysRemaining = newYear - todaysDate; // This is in miliseconds
    
    const daysToNewYear = Math.floor(noOfDaysRemaining/1000/60/60/24);
    days.innerHTML = formatTime(daysToNewYear);
    
    const remainingHours = Math.floor(noOfDaysRemaining/1000/60/60) % 24;
    hours.innerHTML = formatTime(remainingHours);
    
    const remainingMinutes = Math.floor(noOfDaysRemaining/1000/60) % 60;
    minutes.innerHTML = formatTime(remainingMinutes);
    
    const remainingSeconds = Math.floor(noOfDaysRemaining/1000) % 60;
    seconds.innerHTML = formatTime(remainingSeconds);
}

// set interval to run app every second
setInterval(countdownToNewYear, 1000);