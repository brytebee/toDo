import { saveInStorage } from './storage.js';

const status = (task, list) => {
  task.completed = !task.completed;
  saveInStorage(list);
};
export default status;
