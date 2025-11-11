// project: { name: string, description: string, sourceUrl?: string, url?: string }
// prettier-ignore
const projects = [
    {
        name: 'mfhsclock',
        description: 'an alternate clock for FHS using localized times',
        sourceUrl: 'https://github.com/Meowcelinee/mfhsclock',
        url: 'https://mfhsclock.pages.dev/',
    },
    {
        name: 'oocqc page',
        description: '[NO LONGER ACTIVE] a website for the former OOCQC thread on queercraft',
        sourceUrl: 'https://github.com/Meowcelinee/oocqc-page',
    },
    {
        name: 'my old website',
        description: 'my old website built using nextjs',
        sourceUrl: 'https://github.com/Meowcelinee/website',
        url: 'https://meowceline.pages.dev/',
    },
    {
        name: 'gae enterprises',
        description: 'my first nextjs project; a website for the queercraft corporation i shared with my now-ex',
        sourceUrl: 'https://github.com/Nyameliaaaa/gae-ent/tree/next',
        url: 'https://gae-ent.pages.dev/',
    },
    {
        name: 'vpride',
        description: 'small webpage for the virtual pride event on queercraft',
        sourceUrl: 'https://git.gay/vpride/pages',
        url: 'https://vpride.pages.gay/',
    },
    {
        name: 'this website',
        description: 'yep',
        sourceUrl: 'https://git.gay/meowcelinee/pages',
        url: '/',
    },
    {
        name: 'pylist',
        description: "[abandoned] a wrapper script for yt-dlp, intended for downloading playlists. you'd never guess what it's written in",
    },
];

export function createProject(project) {
    const projects = document.getElementById('projects');

    const container = projects.appendChild(document.createElement('div'));
    container.classList.add('project-container');

    const name = container.appendChild(document.createElement('h2'));
    name.classList.add('project-name');

    if (project.sourceUrl) {
        const a = name.appendChild(document.createElement('a'));
        a.textContent = project.name;
        a.href = project.sourceUrl;
        a.target = '_blank';
    } else name.textContent = project.name;

    if (project.url) {
        const url = container.appendChild(document.createElement('a'));
        url.classList.add('project-link');
        url.textContent = 'visit';
        url.href = project.url;
        url.target = '_blank';
    }

    const desc = container.appendChild(document.createElement('p'));
    desc.classList.add('project-description');
    desc.textContent = project.description;
}

export default projects;
