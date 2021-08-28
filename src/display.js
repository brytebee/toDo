import editItem from './editItem.js';
import indexUpdate from './indexUpdate.js';
import removeItem from './removeItem.js';
import getFromStorage from './storage.js';
import status from './status.js';

const display = (list) => {
  // console.log('from display', list);
  // const newList = getFromStorage(list);
  // list = newList;
  // indexUpdate(list);
  // const newL = getFromStorage(list);
  // list = newL;
  const page = document.getElementById('list');
  page.innerHTML = '';
  if (list) {
    list.forEach((task) => {
      const div = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.addEventListener('click', () => status(task, checkbox, list));
      const removeBtn = document.createElement('a');
      removeBtn.addEventListener('click', () => removeItem(list, task));
      const textHolder = document.createElement('input');
      textHolder.className = 'input';
      removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
      removeBtn.className = 'rmvbtn';
      removeBtn.name = 'rmvbtn';
      removeBtn.id = task.id;
      if (task.completed) {
        div.style.textDecoration = 'underline line-through';
        div.classList.add('dim');
      } else {
        div.style.textDecoration = 'none';
      }
      checkbox.setAttribute('type', 'checkbox');
      checkbox.name = 'checkbox';
      checkbox.className = 'checkbox';
      checkbox.checked = task.completed;
      textHolder.value = task.description;
      div.append(checkbox, textHolder, removeBtn);
      div.classList.add('list-group-item');
      page.append(div);
      textHolder.addEventListener('keyup', () => editItem(list, task, textHolder));
    });
  }
};
// display(list);

export default display;