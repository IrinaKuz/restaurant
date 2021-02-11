function load_about(container) {
    if(container.innerText !== '') {
        container.innerText = '';
    }
    const h1 = document.createElement('h1');
    h1.innerHTML = 'About &ldquo;The Breakfast Club&rdquo;';
    container.appendChild(h1);

    const p = document.createElement('p');
    p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    container.appendChild(p);
}

export default load_about;