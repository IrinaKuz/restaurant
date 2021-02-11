// Initialize and add the map
function addMap(container) {
  /* 
  <iframe
  width="600"
  height="450"
  frameborder="0" style="border:0"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDMrZsJ6saiKyapqTXB0Fcs5vjGZeWwsv0
      &q=Space+Needle,Seattle+WA" allowfullscreen>
  </iframe>
  */
  const map_frame = document.createElement('iframe');
  map_frame.setAttribute('width', 600);
  map_frame.setAttribute('height', 400);
  map_frame.setAttribute('frameborder', 0);
  map_frame.setAttribute('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyDMrZsJ6saiKyapqTXB0Fcs5vjGZeWwsv0&q=100+Water+Street,New+York+NY");
  container.appendChild(map_frame);
}

function load_contact(container) {
    if(container.innerText !== '') {
        container.innerText = '';
    }
    const h1 = document.createElement('h1');
    h1.innerText = 'Contact Us';
    container.appendChild(h1);

    // add div with id map
    addMap(container);

    /*
    let map = document.createElement('div');
    map.setAttribute('id', 'map');
    container.appendChild(map);
    initMap(); // add google map to div #map
    */
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