import display from './display.js';
import getFromStorage from './storage.js';

const addByEnter = (event, add) => {
  if (event.key === 'Enter') {
    add();
    display(getFromStorage());
  }
};

export default addByEnter;