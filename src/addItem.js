let listItem = [];

class List {
  constructor(description) {
    this.completed = false;
    this.description = description;
    this.index = listItem.length + 1;
    this.id = `id${this.index}`;
  }
}

export default function add() {
  if (document.getElementById('input').value !== '') {
    const newItem = new List(`${document.getElementById('input').value}`);
    if (localStorage.list) {
      listItem = JSON.parse(localStorage.getItem('list'));
    }
    listItem.push(newItem);
    localStorage.setItem('list', JSON.stringify(listItem));
    document.getElementById('input').value = '';
  }
};