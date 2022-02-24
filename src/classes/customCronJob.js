const { CronJob } = require("cron");

class CustomCronJob extends CronJob{
    constructor(seconds, minutes, hours, func, day = '*', month = '*', year = '*'){
        let time = seconds + " " + minutes + " " + hours + " " + day + " " + month + " " + year;
        super(time, func);
    }
}

module.exports = CustomCronJob;