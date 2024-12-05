var cron = require('node-cron');

// Function for cron job every 6 hours
const cronEvery6Hours = () => {
    cron.schedule("0 */6 * * *", function() {
        console.log("cron job every 6 hours");
    });
}

// Function for cron job every 2 hours
const cronEvery2Hours = () => {
    cron.schedule("0 */2 * * *", function() {
        console.log("cron job every 2 hours");
    });
}

// Function for cron job every 1 hour
const cronEvery1Hour = () => {
    cron.schedule("0 * * * *", function() {
        console.log("cron job every 1 hour");
    });
}

// Function for cron job every 24 hours at midnight
const cronEvery24HoursMidnight = () => {
    cron.schedule("0 0 * * *", function() {
        console.log("cron job every 24 hours at midnight");
    });
}

// Function for cron job every day at 10 AM
const cronEveryDayAt10AM = () => {
    cron.schedule("0 10 * * *", function() {
        console.log("cron job every day at 10 AM");
    });
}

module.exports = { cronEvery6Hours, cronEvery2Hours, cronEvery1Hour };
