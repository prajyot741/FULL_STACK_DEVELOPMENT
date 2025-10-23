const cron = require('node-cron');

let second = 0;
cron.schedule('*/1 * * * * *', () => {
    console.log("task running every second " + second++);
});

cron .schedule('* */1 * * *', () => {
    console.log("task running every minute " + mintue++);
});