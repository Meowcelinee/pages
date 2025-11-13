export default function getHrtDuration() {
    const hrtDateString = 'July 18, 2025 19:36:23 GMT-0400';

    const ESTOffsetInMilliseconds = -300 * 60 * 1000;
    const localOffsetInMilliseconds =
        new Date().getTimezoneOffset() * 60 * -1000;

    let currentDate = new Date().getTime();

    // correct current date to be in EST if client is not in EST
    if (localOffsetInMilliseconds !== ESTOffsetInMilliseconds)
        currentDate -= ESTOffsetInMilliseconds - localOffsetInMilliseconds;

    let millisecondDiff = currentDate - new Date(hrtDateString).getTime();

    // i do not yet know why i have to make this correction, but
    // this is to correct the day difference to the actual amount.
    // subtracts 2 days from the total time amount
    millisecondDiff -= 48 * 60 * 60 * 1000;

    const timeDiff = {
        sec: Math.floor(millisecondDiff / 1000),
        min: Math.floor(millisecondDiff / 1000 / 60),
        hour: Math.floor(millisecondDiff / 1000 / 60 / 60),
        day: Math.floor(millisecondDiff / 1000 / 60 / 60 / 24),
        month: Math.floor(millisecondDiff / 1000 / 60 / 60 / 24 / 30),
    };

    return new Intl.DurationFormat('en', { style: 'short' }).format({
        months: timeDiff.month,
        days: timeDiff.day - timeDiff.month * 30,
        hours: timeDiff.hour - timeDiff.day * 24,
        minutes: timeDiff.min - timeDiff.hour * 60,
        seconds: timeDiff.sec - timeDiff.min * 60,
    });
}
