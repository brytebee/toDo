import './styles.css';
import status from './status.js';
import display from './display.js';
import removeItem from './removeItem.js';
import clearAll from './clearAll.js';
import editItem from './editItem.js';

let listItem = [];

class List {
  constructor(description) {
    this.completed = false;
    this.description = description;
    this.index = listItem.length + 1;
    this.id = `id${this.index}`;
  }
}

const add = () => {
  document.getElementById('addBtn').addEventListener('click', () => {
    const newItem = new List(`${document.getElementById('input').value}`);
    if (localStorage.list) {
      listItem = JSON.parse(localStorage.getItem('list'));
    }
    listItem.push(newItem);
    localStorage.setItem('list', JSON.stringify(listItem));
    display();
  });
};
add();

const completed = () => {
  status();
};

completed();
clearAll();
removeItem();
editItem();