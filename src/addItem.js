import display from "./display";
import indexUpdate from "./indexUpdate";
import getFromStorage, { saveInStorage } from "./storage";

class List {
  constructor(description) {
    this.completed = false;
    this.description = description;
    this.index = list.length + 1;
    this.id = `id${this.index}`;
  }
}

export default function add() {
  if (document.getElementById('input').value !== '') {
    const newItem = new List(`${document.getElementById('input').value}`);
   let list = getFromStorage();
   list.push(newItem);
   saveInStorage(list);
   list = getFromStorage();
   list = indexUpdate(list);
   display(list);
    document.getElementById('input').value = '';
  }
};