import { saveInStorage } from './storage.js';

const editItem = (list, task, textHolder) => {
  task.description = textHolder.value;
  saveInStorage(list);
};

export default editItem;