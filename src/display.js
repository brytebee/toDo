const display = () => {
  const list = JSON.parse(localStorage.getItem('list'));
  const page = document.getElementById('list');
  page.innerHTML = '';
  if (list) {
    list.forEach((e) => {
      const div = document.createElement('div');
      const checkbox = document.createElement('input');
      const removeBtn = document.createElement('a');
      const textHolder = document.createElement('input');
      textHolder.className = 'input';
      removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
      removeBtn.name = 'rmvbtn';
      removeBtn.id = e.id;
      if (e.completed) {
        div.style.textDecoration = 'underline line-through';
        div.classList.add('dim');
      } else {
        div.style.textDecoration = 'none';
      }
      checkbox.setAttribute('type', 'checkbox');
      checkbox.name = 'checkbox';
      checkbox.className = 'checkbox';
      checkbox.checked = e.completed;
      textHolder.value = e.description;
      div.append(checkbox, textHolder, removeBtn);
      div.classList.add('list-group-item');
      page.append(div);
      textHolder.addEventListener('keyup', () => {
        e.description = textHolder.value;
        localStorage.setItem('list', JSON.stringify(list));
      });
    });
  }
};
display();

export default display;