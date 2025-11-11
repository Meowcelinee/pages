export default function getHrtDuration() {
    const hrtDate = 'July 18, 2025 19:36:23 GMT-0400';
    const millisecondDiff = new Date().getTime() - new Date(hrtDate).getTime();

    const timeDiff = {
        sec: Math.floor(millisecondDiff / 1000),
        min: Math.floor(millisecondDiff / 1000 / 60),
        hour: Math.floor(millisecondDiff / 1000 / 60 / 60),
        day: Math.floor(millisecondDiff / 1000 / 60 / 60 / 24),
        month: Math.floor(millisecondDiff / 1000 / 60 / 60 / 24 / 30),
    };

    // i do not yet know why i have to make this correction, but
    // this is to correct the day difference to the actual amount.
    timeDiff.day -= 2;

    return new Intl.DurationFormat('en', { style: 'short' }).format({
        months: timeDiff.month,
        days: timeDiff.day - timeDiff.month * 30,
        hours: timeDiff.hour - timeDiff.day * 24,
        minutes: timeDiff.min - timeDiff.hour * 60,
        seconds: timeDiff.sec - timeDiff.min * 60,
    });
}
