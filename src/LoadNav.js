/*
<nav>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <header>
                <h1>At Irina's</h1>
                <p>Best breakfast in town!</p>
                <img src="./img/english_breakfast.jpg" alt="logo">
            </header>
*/

function load_nav(container) {
    if(container.innerText !== '') {
        return;
    }
    const mobile_nav = document.createElement('div');
    mobile_nav.innerHTML = '&#9776;';
    mobile_nav.setAttribute('id', 'mobile_nav');
    container.appendChild(mobile_nav);

    const arr_li = ['Home', 'Menu', 'About', 'Contact'];
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    for(let i = 0; i < arr_li.length; i++) {
        const li = document.createElement('li');
        li.innerText = arr_li[i];
        li.setAttribute('id', arr_li[i].toLowerCase());
        ul.appendChild(li);
    }
    nav.appendChild(ul);
    container.appendChild(nav);

    mobile_nav.addEventListener('click', function() {
        nav.classList.toggle('open');
    })
}

export default load_nav;