import { saveInStorage } from "./storage";

const indexUpdate = (list) => {
  let counter = 1;
  list.forEach((task) => {
    task.index = counter;
    counter++;
  });
 saveInStorage(list);
 return list;
};

export default  indexUpdate;