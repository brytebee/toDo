import display from './display.js';
import indexUpdate from './indexUpdate.js';
import getFromStorage, { saveInStorage } from './storage.js';

export default function clearAll(list) {
  console.log('before filter', list);
  list = list.filter((task) => task.completed !== true);
  console.log('after filter', list);
  saveInStorage(list);
  list = indexUpdate(getFromStorage());
  display(list);
};