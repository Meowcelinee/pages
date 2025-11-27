/*/
 * NOT CURRENTLY USED
/*/
Date.prototype.isDst = function () {
    // date object for representing standard time (DST is always inactive in january)
    const jan = new Date(this.getFullYear(), 0, 1);

    // date object for representing DST (DST is always active in july, in participating regions)
    const jul = new Date(this.getFullYear(), 6, 1);

    // standard offset will be in january
    const nonDstOffset = Math.max(
        jan.getTimezoneOffset(),
        jul.getTimezoneOffset()
    );

    // returns true if the date's offset is different from the standard, non-DST offset
    return this.getTimezoneOffset() < nonDstOffset;
};

export default function getHrtDuration() {
    const hrtDateString = 'July 18, 2025 19:36:23 GMT-0400';

    let currentDateInMilliseconds = new Date().getTime();
    let millisecondDiff =
        currentDateInMilliseconds - new Date(hrtDateString).getTime();

    /*/
    /*  i do not yet know why i have to make this correction, but
    /*  this is to correct the day difference to the actual amount.
    /*  subtracts 2 days from the total time amount
    /*/
    millisecondDiff -= 2 * 24 * 60 * 60 * 1000;

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
