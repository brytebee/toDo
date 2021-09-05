import { saveInStorage } from "./storage"

export default (list) => {
  const page = document.getElementById('list');
  console.log(typeof page);
  list.forEach((task, i) => {
    if (task.completed) {
      task.completed = false;
      console.log(i);
    }
    saveInStorage(list);
  })
}