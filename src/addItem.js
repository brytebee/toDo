import display from './display.js';
import indexUpdate from './indexUpdate.js';
import getFromStorage, { saveInStorage } from './storage.js';

class List {
  constructor(description, list) {
    this.completed = false;
    this.description = description;
    this.index = list.length + 1;
    this.id = `id${this.index}`;
  }
}

export default function add() {
  if (document.getElementById('input').value !== '') {
    let list = getFromStorage();
    const newItem = new List(`${document.getElementById('input').value}`, list);
    list.push(newItem);
    saveInStorage(list);
    list = getFromStorage();
    list = indexUpdate(list);
    display(list);
    document.getElementById('input').value = '';
  }
}
