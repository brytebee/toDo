import display from "./display";
import indexUpdate from "./indexUpdate";
import getFromStorage, { saveInStorage } from "./storage";

const removeItem = (list, task) => {
  list = list.filter((eachTask) => eachTask.index !== task.index);
  list = indexUpdate(list);
  saveInStorage(list);
  display(getFromStorage());
};

export default removeItem;