// project: { name: string, description: string, sourceUrl: string }
const projects = [
    {
        name: 'mfhsclock',
        description: 'an alternate clock for FHS using localized times',
        sourceUrl: 'https://github.com/Meowcelinee/mfhsclock',
    },
    {
        name: 'oocqc page',
        description:
            '[NO LONGER ACTIVE] a website for the former OOCQC thread on queercraft',
        sourceUrl: 'https://github.com/Meowcelinee/oocqc-page',
    },
    {
        name: 'my old website',
        description: 'my old website built using nextjs',
        sourceUrl: 'https://github.com/Meowcelinee/website',
    },
    {
        name: 'gae enterprises',
        description:
            'my first nextjs project; a website for the queercraft corporation i shared with my now ex',
        sourceUrl: 'https://github.com/Nyameliaaaa/gae-ent/tree/next',
    },
    {
        name: 'vpride',
        description: 'small webpage for the virtual pride event on queercraft',
        sourceUrl: 'https://git.gay/vpride/pages',
    },
    {
        name: 'this website',
        description: 'yep',
        sourceUrl: 'https://git.gay/meowcelinee/pages',
    },
    {
        name: 'pylist',
        description:
            "[abandoned] a wrapper script for yt-dlp, intended for downloading playlists. you'd never guess what it's written in",
    },
];

export function createProject(project) {
    const projects = document.getElementById('projects');

    const container = projects.appendChild(document.createElement('div'));
    container.classList.add('project-container');

    const name = container.appendChild(document.createElement('h2'));
    const desc = container.appendChild(document.createElement('p'));

    name.classList.add('project-name');
    desc.classList.add('project-description');

    desc.textContent = project.description;

    if (!project.sourceUrl) {
        name.textContent = project.name;
        return;
    }

    const a = name.appendChild(document.createElement('a'));
    a.textContent = project.name;
    a.href = project.sourceUrl;
    a.target = '_blank';
}

export default projects;
