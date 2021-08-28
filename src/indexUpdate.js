import { saveInStorage } from './storage.js';

const indexUpdate = (list) => {
  let counter = 1;
  list.forEach((task) => {
    task.index = counter;
    counter += 1;
  });
  saveInStorage(list);
  return list;
};

export default indexUpdate;