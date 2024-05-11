"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// countdown.ts
var date_fns_1 = require("date-fns");
function startCountdown(targetDate) {
    var now = new Date();
    var secondsRemaining = (0, date_fns_1.differenceInSeconds)(targetDate, now);
    var currentSeconds = 0;
    var interval = setInterval(function () {
        currentSeconds++;
        if (currentSeconds >= secondsRemaining) {
            clearInterval(interval);
            console.log('Countdown complete!');
        }
        else {
            var remainingTime = (0, date_fns_1.differenceInSeconds)(targetDate, (0, date_fns_1.addSeconds)(now, currentSeconds));
            console.clear();
            console.log("Countdown: ".concat((0, date_fns_1.formatDistanceStrict)(remainingTime * 1000, 0)));
        }
    }, 1000);
}
exports.default = startCountdown;
