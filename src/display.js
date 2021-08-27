const display = () => {
  const list = JSON.parse(localStorage.getItem('list'));
  const page = document.getElementById('list');
  list.forEach((e) => {
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    const removeBtn = document.createElement('a');
    const editBtn = document.createElement('a');
    const textHolder = document.createElement('span');
    removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.name = 'editbtn';
    removeBtn.name = 'rmvbtn';
    removeBtn.id = e.id;
    editBtn.id = e.id;
    if (e.completed) {
      div.style.textDecoration = 'underline line-through';
      div.classList.add('dim');
    } else {
      div.style.textDecoration = 'none';
    }
    checkbox.setAttribute('type', 'checkbox');
    checkbox.name = 'checkbox';
    checkbox.checked = e.completed;
    textHolder.setAttribute('contentEditable', true);
    textHolder.append(e.description);
    div.append(checkbox, textHolder, editBtn, removeBtn);
    div.classList.add('list-group-item');
    page.append(div);
  });
};

export default display;