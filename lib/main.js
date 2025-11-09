import getCurrentTime from './time/getCurrentTime.js';
import getHrtDuration from './time/getHrtDuration.js';
import projects, { createProject } from './projects.js';
import links, { createLink } from './links.js';

document.getElementById('year').textContent = new Date().getFullYear();

// refresh time/duration displays every 250ms
setInterval(() => {
    document.getElementById('currentTime').textContent = getCurrentTime();
    document.getElementById('hrtTime').textContent = getHrtDuration();
}, 250);

// populate link list
links.forEach(link => createLink(link));

// populate project list
projects.forEach(project => createProject(project));

console.log(`only gay people can read this`);
