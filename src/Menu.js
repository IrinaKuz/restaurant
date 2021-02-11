/* 
<h3>Breakfast options</h3>
<ul>
    <li>English breakfast</li>
    <li>Vegetable omelete</li>
    <li>Oatmeal</li>
    <li>Waffles</li>
    <li>Pancakes</li>
    <li>Avocado and egg toast</li>
    <li>Kids breakfast</li>
</ul>
<h3>Add-ons</h3>
<ul>
    <li>Banana</li>
    <li>Yogurt</li>
    <li>Sausage</li>
    <li>Croissant</li>
</ul>
<h3>Beverages</h3>
<ul>
    <li>Coffee</li>
    <li>Orange juice</li>
    <li>Tea</li>
</ul>
*/

function makeList (list, options) {
    options.map(el => {
        const li = document.createElement('li');
        li.innerText = el;
        list.appendChild(li);
    });
    return list;
}
function load_menu(container) {
    if(container.innerText !== '') {
        container.innerText = '';
    }
    const h1 = document.createElement('h1');
    h1.innerText = 'Our Menu';
    container.appendChild(h1);

    const h3_meal = document.createElement('h3');
    h3_meal.innerText = 'Breakfast options';
    const ul_meal = document.createElement('ul');
    makeList(ul_meal, ['English breakfast', 'Vegetable omelete', 'Oatmeal', 'Waffles', 'Pancakes', 'Avocado and egg toast', 'Kids Breakfst']);
    container.appendChild(h3_meal);
    container.appendChild(ul_meal);

    const h3_addons = document.createElement('h3');
    h3_addons.innerText = 'Add-ons';
    const ul_addons = document.createElement('ul');
    makeList(ul_addons, ['Banana', 'Yogurt', 'Sausage', 'Croissant']);
    container.appendChild(h3_addons);
    container.appendChild(ul_addons);

    const h3_beverage = document.createElement('h3');
    h3_beverage.innerText = 'Beverages';
    const ul_beverage = document.createElement('ul');
    makeList(ul_beverage, ['Coffee', 'Orange juice', 'Tea']);
    container.appendChild(h3_beverage);
    container.appendChild(ul_beverage);
}

export default load_menu;