import './styles.css';
import { status } from './status.js';

let listItem = [
  {
    completed: false,
    description: 'Learn how to use proper ES6 syntax',
    index: 8,
  },
  {
    completed: false,
    description: 'Use ES6 modules to write modular JavaScript',
    index: 12,
  },
  {
    completed: false,
    description: 'Use webpack to bundle JavaScript',
    index: 6,
  },
];

listItem = listItem.sort((a, b) => a.index - b.index);

if (!localStorage.getItem('list')) {
  localStorage.setItem('list', JSON.stringify(listItem));
}
const populate = () => {
  let storeList;
  if (localStorage.getItem('list')) {
    storeList = JSON.parse(localStorage.getItem('list'));
  }
  const page = document.getElementById('list');
  storeList.forEach((element) => {
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    if (element.completed) {
      (div.style.textDecoration = 'underline line-through');
    } else {
      (div.style.textDecoration = 'none');
    }
    checkbox.setAttribute('type', 'checkbox');
    checkbox.name = 'checkbox';
    checkbox.checked = element.completed;
    div.append(checkbox);
    div.append(element.description);
    div.classList.add('list-group-item');
    page.append(div);
  });
};

populate();

status();