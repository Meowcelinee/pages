export default function getCurrentTime() {
    const timeFormatOptions = {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    const dateFormatter = new Intl.DateTimeFormat('en-US', timeFormatOptions);

    return dateFormatter.format(new Date());
}
