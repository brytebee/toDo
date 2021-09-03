const status = (task, list) => {
  document.body.innerHTML = `
  <div class='card'>
    <div class='input-group'>
        <input id='input' type='text' class='form-control' placeholder='Enter task...'>
        <button id='addBtn' class='btn btn-outline-secondary' type='button'></button>
    </div>
    <div id='list' class='card-body'></div>
  </div>
  `;
  const text = document.createElement('p');
  text.value = 'two';
  const div = document.createElement('div');
  const checkbox = document.createElement('checkbox');
  checkbox.setAttribute('type', 'checkbox');
  let completed = false;
  div.appendChild(text);
  checkbox.isChecked = true;
  list = document.createElement('div');
  task = document.createElement('div');
  task.appendChild(div);
  list.appendChild(task);
  if (checkbox.isChecked) {
    task.style.textDecoration = 'line-through';
    completed = true;
  } else {
    task.style.textDecoration = 'none';
    completed = false;
  }
  return completed;
};

export default status;
