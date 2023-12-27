// 1. Where to add
const placeList = document.getElementById('places-list');

// What to be added

const li = document.createElement('li');
li.innerText = 'phartoli bon';

// 3. add the child
placesList.appendChild(li);

// 4. where to ad
const mainContainer = documentElementById('main-container');

// 5. What to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'briyani'
ul.appendChild(li1);

mainContainer.appendChild(section);




//  set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = <h1>My Dress section</h1>


