// countdown.ts
import { formatDistanceStrict, addSeconds, differenceInSeconds } from 'date-fns';

function startCountdown(targetDate: Date) {
    const now = new Date();
    const secondsRemaining = differenceInSeconds(targetDate, now);

    let currentSeconds = 0;
    const interval = setInterval(() => {
        currentSeconds++;

        if (currentSeconds >= secondsRemaining) {
            clearInterval(interval);
            console.log('Countdown complete!');
        } else {
            const remainingTime = differenceInSeconds(targetDate, addSeconds(now, currentSeconds));
            console.clear();
            console.log(`Countdown: ${formatDistanceStrict(remainingTime * 1000, 0)}`);
        }
    }, 1000);
}

export default startCountdown;
