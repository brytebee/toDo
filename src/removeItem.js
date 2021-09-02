import indexUpdate from './indexUpdate.js';
import getFromStorage, { saveInStorage } from './storage.js';

const removeItem = (list, task, display) => {
  list = list.filter((eachTask) => eachTask.index !== task.index);
  list = indexUpdate(list);
  saveInStorage(list);
  display(getFromStorage());
};

export default removeItem;
