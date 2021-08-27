import './styles.css';
import status from './status.js';
import display from './display.js';
import removeItem from './removeItem.js'
import clearAll from './clearAll.js'

let listItem = [];

class List {
  constructor(description, index) {
    this.completed = false;
    this.description = description;
    this.index = listItem.length +1;
    this.id = `id${this.index}`;
  };
}

const add = () => {
  document.getElementById('addBtn').addEventListener('click', () => {
    const newItem = new List(`${document.getElementById('input').value}`, listItem.length);
    listItem.push(newItem);
    localStorage.setItem('list', JSON.stringify(listItem));
});
}

add();


display();

const completed = () => {
  status();
}
completed();


clearAll();



removeItem();
