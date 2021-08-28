import { saveInStorage } from "./storage";

const editItem = (list, task, textHolder) => {
  task.description = textHolder.value;
  saveInStorage(list);
};

export default editItem;