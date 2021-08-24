import './styles.css';
import { status } from './status.js'

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
localStorage.setItem('list', JSON.stringify(listItem));
const populate = () => {
  const page = document.getElementById('list');
  JSON.parse(localStorage.getItem('list')).forEach((element) => {
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox', 'defaultChecked');
    div.append(checkbox);
    div.append(element.description);
    div.classList.add('list-group-item');
    page.append(div);
  });
};

populate();

status();