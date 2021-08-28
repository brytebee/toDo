import display from './display.js';
import indexUpdate from './indexUpdate.js';
import getFromStorage, { saveInStorage } from './storage.js';

export default function clearAll(list) {
  list = list.filter((task) => task.completed !== true);
  saveInStorage(list);
  list = indexUpdate(getFromStorage());
  display(list);
};