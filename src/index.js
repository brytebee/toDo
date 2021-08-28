import './styles.css';
import status from './status.js';
import display from './display.js';
import removeItem from './removeItem.js';
import clearAll from './clearAll.js';
import add from './addItem.js';
import indexUpdate from './indexUpdate.js';
import addByEnter from './addByEnter';
import getFromStorage, { saveInStorage } from './storage';
document.getElementById('addBtn').addEventListener('click', () => {
  add();
  const list = getFromStorage();
  indexUpdate(list);
  saveInStorage(list);
  display(list);
});

document.getElementById('clearBtn').addEventListener('click', () => {
 const list = getFromStorage();
  clearAll(list);
});

document.querySelector('.form-control').addEventListener('keypress', (event) => addByEnter(event, add));

const list = indexUpdate(getFromStorage());

display(list);
