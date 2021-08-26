import './styles.css';
import status from './status.js';
import './crud.js';

let listItem = [];

class List {
  constructor(description, index) {
      this.completed = false;
      this.description = description;
      this.index = listItem.length +1;
      this.id = `id${this.index}`
  }
}

const add = () => {
  document.getElementById('addBtn').addEventListener('click', () => {
    const newItem = new List(`${document.getElementById('input').value}`, listItem.length);
    listItem.push(newItem);
    localStorage.setItem('list', JSON.stringify(listItem));
});
}

add();

const display = () => {
  const page = document.getElementById('list')
  const list = JSON.parse(localStorage.getItem('list'));
  list.forEach((e) => {
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    const removeBtn = document.createElement('a');
    removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
    removeBtn.id = e.id;
    if (e.completed) {
      (div.style.textDecoration = 'underline line-through');
    } else {
      (div.style.textDecoration = 'none');
    }
    checkbox.setAttribute('type', 'checkbox');
    checkbox.name = 'checkbox';
    checkbox.checked = e.completed;
    div.append(checkbox);
    div.append(e.description);
    div.append(removeBtn);
    div.classList.add('list-group-item');
    page.append(div);
  });
}

display();

// listItem = listItem.sort((a, b) => a.index - b.index);

// if (!localStorage.getItem('list')) {
//   localStorage.setItem('list', JSON.stringify(listItem));
// }
// const populate = () => {
//   let storeList;
//   if (localStorage.getItem('list')) {
//     storeList = JSON.parse(localStorage.getItem('list'));
//   }
//   const page = document.getElementById('list');
//   storeList.forEach((element) => {
//     const div = document.createElement('div');
//     const checkbox = document.createElement('input');
//     if (element.completed) {
//       (div.style.textDecoration = 'underline line-through');
//     } else {
//       (div.style.textDecoration = 'none');
//     }
//     checkbox.setAttribute('type', 'checkbox');
//     checkbox.name = 'checkbox';
//     checkbox.checked = element.completed;
//     div.append(checkbox);
//     div.append(element.description);
//     div.classList.add('list-group-item');
//     page.append(div);
//   });
// };

// populate();

// status();