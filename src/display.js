import editItem from './editItem.js';
import removeItem from './removeItem.js';
import status from './status.js';

const display = (list) => {
  const page = document.getElementById('list');
  page.innerHTML = '';
  if (list) {
    list.forEach((task) => {
      const div = document.createElement('div');
      const checkbox = document.createElement('input');
      const textHolder = document.createElement('p');
      const removeBtn = document.createElement('a');
      const checkInputDiv = document.createElement('div');

      textHolder.className = 'input';
      removeBtn.className = 'rmvbtn';
      div.className = 'task';
      checkbox.className = 'checkbox';
      checkInputDiv.className = 'check-input-div';

      removeBtn.name = 'rmvbtn';
      removeBtn.id = task.id;
      checkbox.name = 'checkbox';

      textHolder.setAttribute('contenteditable', true);
      removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
      
      checkbox.addEventListener('click', () => status(task, list));
      removeBtn.addEventListener('click', () => removeItem(list, task, display));
      textHolder.addEventListener('keyup', () => editItem(list, task, textHolder));
      
      if (task.completed) {
        div.style.textDecoration = 'line-through';
        div.classList.add('dim');
      } else {
        div.style.textDecoration = 'none';
      }
      
      checkbox.checked = task.completed;
      textHolder.textContent = task.description;
      
      checkbox.setAttribute('type', 'checkbox');
      checkInputDiv.append(checkbox, textHolder);
      
      div.append(checkInputDiv, removeBtn);
      div.classList.add('list-group-item');
      page.append(div);
    });
  }
};

export default display;