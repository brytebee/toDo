import './styles.css';
import status from './status.js';
import display from './display.js';
import removeItem from './removeItem.js';
import clearAll from './clearAll.js';

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
    if (document.getElementById('input').value !== '') {
      const newItem = new List(`${document.getElementById('input').value}`);
      if (localStorage.list) {
        listItem = JSON.parse(localStorage.getItem('list'));
      }
      listItem.push(newItem);
      localStorage.setItem('list', JSON.stringify(listItem));
      document.getElementById('input').value = '';
    }
    display();
  });
};
add();


// window.addEventListener('DOMContentLoaded', () => {
//   console.log('DOM fully loaded and parsed');
  const completed = () => {
    status();
  };
  
  completed();
  clearAll(document.getElementById('clearBtn'));
  removeItem();
// });