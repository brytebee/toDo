const clearAll = () => {
  document.body.innerHTML = `
  <div class='card'>
  <div class='input-group'>
      <input id='input' type='text' class='form-control' placeholder='Enter task...'>
      <button id='addBtn' class='btn btn-outline-secondary' type='button'></button>
  </div>
  <div id='list' class='card-body'></div>
  </div>
  `;
  const input = document.getElementById('input');
  input.value = 'one';
  const checkbox = document.createElement('checkbox');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.isChecked = true;
  input.appendChild(checkbox);

  const input2 = document.getElementById('input');
  input2.value = 'two';
  checkbox.setAttribute('type', 'checkbox');
  checkbox.isChecked = false;
  input.appendChild(checkbox);

  const contentHolder = document.createElement('div');
  contentHolder.textContent = input.value;
  const contentHolder2 = document.createElement('div');
  contentHolder2.textContent = input2.value;
  const page = document.getElementById('list').appendChild(contentHolder, contentHolder2);
  if (checkbox.isChecked === true) {
    page.remove(contentHolder, contentHolder2);
  }
  const wrapperChildren = Array.from(document.querySelectorAll('#list div'));
  return wrapperChildren;
};

export default clearAll;