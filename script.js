const time = document.querySelector('[data-testid="currentUTCTime"]');

let timeVar = new Date();

// Function to update the current UTC time continuously
const timeFunction = () => {
    timeVar = new Date();
    time.innerHTML = timeVar.toLocaleTimeString();
    return;
};

// Function to update the current day of the week
const dayFunction = () => {
    const dayOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML =
        dayOfWeek[timeVar.getDay()];
};

/*
Update time immediately and then every 1 second (1000 milliseconds)
Call the function to update time continuously
*/
setInterval(() => {
    timeFunction();
    dayFunction();
}, 1000);
