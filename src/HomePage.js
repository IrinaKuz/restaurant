import load_nav from './LoadNav.js';

function load_home(container) {
    if(container.innerText !== '') {
        container.innerText = '';
    }
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.innerText = 'The Breakfast Club';
    const p = document.createElement('p');
    p.innerText = 'Best breakfast in town!';
    const img = document.createElement('img');
    img.setAttribute('src', './img/english_breakfast.jpg');
    img.setAttribute('alt', 'English breakfast');
    header.appendChild(h1);
    header.appendChild(p);
    header.appendChild(img);
    container.appendChild(header);
    return container;
}

export default load_home;
