const removeItem = () => {
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
  const contentHolder = document.createElement('div');
  contentHolder.textContent = input.value;
  const page = document.getElementById('list').appendChild(contentHolder);
  page.remove(contentHolder);
  const wrapperChildren = Array.from(document.querySelectorAll('#list div'));
  return wrapperChildren;
};

export default removeItem;
