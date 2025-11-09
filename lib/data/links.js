const links = [
    { name: 'github', url: 'https://github.com/Meowcelinee' },
    { name: 'git.gay', url: 'https://git.gay/meowcelinee' },
    { name: 'instagram', url: 'https://www.instagram.com/meowcelineeee/' },
    { name: 'bluesky', url: 'https://marcelineeee.bsky.social/' },
    { name: 'queercraft', url: 'https://queercraft.net' },
    { name: "my amazing gf's etsy", url: 'https://artby5klr.etsy.com/' },
];

export function createLink(link) {
    const list = document.getElementById('links');
    const li = list.appendChild(document.createElement('li'));
    const a = li.appendChild(document.createElement('a'));
    li.classList.add('link');

    a.textContent = link.name;
    a.href = link.url;
    a.target = '_blank';
}

export default links;
