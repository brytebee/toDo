const display = () => {
  let list = JSON.parse(localStorage.getItem('list'));
  const page = document.getElementById('list')
  list.forEach((e) => {
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    const removeBtn = document.createElement('a');
    removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
    removeBtn.id = e.id;
    removeBtn.name = 'rmvbtn';
    if (e.completed) {
      div.style.textDecoration = 'underline line-through';
      div.classList.add('dim');
    } else {
      div.style.textDecoration = 'none';
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

export default  display;
