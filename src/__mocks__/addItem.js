const add = () => {
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
  const input2 = document.getElementById('input');
  input2.value = 'two';
  const contentHolder = document.createElement('div');
  contentHolder.textContent = input.value;
  const contentHolder2 = document.createElement('div');
  contentHolder2.textContent = input2.value;
  document.getElementById('list').append(contentHolder, contentHolder2);
  const wrapperChildren = Array.from(document.querySelectorAll('#list div'));
  return wrapperChildren;
};

export default add;