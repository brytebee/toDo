import { saveInStorage } from "./storage";

const status = (task, checkbox, list) => {
  task.completed = !task.completed;
  checkbox.checked ? 
  checkbox.parentElement.classList.add('dim') : 
  checkbox.parentElement.classList.remove('dim');
 saveInStorage(list);
}
export default status;