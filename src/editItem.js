import { saveInStorage } from './storage.js';

const editItem = (list, task, textHolder) => {
  task.description = textHolder.textContent;
  saveInStorage(list);
};

export default editItem;