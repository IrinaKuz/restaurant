import load_home from './HomePage.js';
import load_nav from './LoadNav.js';
import load_menu from './Menu.js';
import load_about from './About.js';
import load_contact from './Contact.js';

const content = document.querySelector('#content');
load_nav(content);

let container = document.createElement('div');
container.setAttribute('class', 'container');
content.appendChild(container);

load_home(container);

document.querySelector('#home').addEventListener('click', function() {
    console.log('Loading home page');
    load_home(container);
}, false);

document.querySelector('#menu').addEventListener('click', function() {
    console.log('Loading menu');
    load_menu(container);
}, false);

document.querySelector('#about').addEventListener('click', function() {
    console.log('Loading about page');
    load_about(container);
}, false);

document.querySelector('#contact').addEventListener('click', function() {
    console.log('Loading contact page');
    load_contact(container);
}, false);
