import './styles.css';
import status from './status.js';
import display from './display.js';
import removeItem from './removeItem.js';
import clearAll from './clearAll.js';
import add from './addItem.js'


document.getElementById('addBtn').addEventListener('click', () => {
  add();
  display();
});

document.getElementById('clearBtn').addEventListener('click', () => {
  clearAll();
});




const completed = () => {
  status();
};

completed();



removeItem();
