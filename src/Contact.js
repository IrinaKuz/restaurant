function load_contact(container) {
    if(container.innerText !== '') {
        container.innerText = '';
    }
    const h1 = document.createElement('h1');
    h1.innerText = 'Contact Us';
    container.appendChild(h1);

    const address = document.createElement('p');
    address.innerText = '100 Water St, New York, NY';
    container.appendChild(address);
    const tel = document.createElement('p');
    tel.innerText = '(555)555-5555';
    container.appendChild(tel);
    const email = document.createElement('p');
    email.innerText = 'thebreakfastclub@gmail.com';
    container.appendChild(email);

    const sched = document.createElement('p');
    sched.innerText = 'Tue - Sun';
    container.appendChild(sched);
    const time = document.createElement('p');
    time.innerText = '7-30 am - 2 pm';
    container.appendChild(time);
}

export default load_contact;