// ugggghghghghhhhh i hate using Date() so much i miss luxonjs
export default function getHrtDuration() {
    const hrtDate = 'July 18, 2025 19:36:23 GMT-0400';
    const millisecondDiff = new Date().getTime() - new Date(hrtDate).getTime();

    const secondDiff = Math.floor(millisecondDiff / 1000);
    const minuteDiff = Math.floor(millisecondDiff / 1000 / 60);
    const hourDiff = Math.floor(millisecondDiff / 1000 / 60 / 60);
    const dayDiff = Math.floor(millisecondDiff / 1000 / 60 / 60 / 24);
    const monthDiff = Math.floor(millisecondDiff / 1000 / 60 / 60 / 24 / 30);

    return new Intl.DurationFormat('en', { style: 'short' }).format({
        months: monthDiff,
        days: dayDiff - monthDiff * 30,
        hours: hourDiff - dayDiff * 24,
        minutes: minuteDiff - hourDiff * 60,
        seconds: secondDiff - minuteDiff * 60,
    });
}
