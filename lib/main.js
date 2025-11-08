import links from './links.js';
import projects, { createProject } from './projects.js';

document.getElementById('year').textContent = new Date().getFullYear();

// update time display every 250ms
setInterval(() => {
    const timeFormatOptions = {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    const dateFormatter = new Intl.DateTimeFormat('en-US', timeFormatOptions);

    document.getElementById('currentTime').textContent = dateFormatter.format(
        new Date()
    );
}, 250);

// populate link list
links.forEach(link => {
    const list = document.getElementById('links');
    const li = list.appendChild(document.createElement('li'));
    const a = li.appendChild(document.createElement('a'));
    li.classList.add('link');

    a.textContent = link.name;
    a.href = link.url;
    a.target = '_blank';
});

// populate project list
projects.forEach(project => createProject(project));

console.log(`only gay people can read this`);
