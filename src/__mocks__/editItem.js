const editItem = (list, task, textHolder) => {
  document.body.innerHTML = `
  <div class='card'>
    <div class='input-group'>
        <input id='input' type='text' class='form-control' placeholder='Enter task...'>
        <button id='addBtn' class='btn btn-outline-secondary' type='button'></button>
    </div>
    <div id='list' class='card-body'></div>
  </div>
  `;
  textHolder = document.getElementById('input');
  textHolder.value = 'some statement';
  task = document.createElement('div');
  task.append(textHolder);
  list = document.createElement('div');
  list.append(task);
  textHolder.value = 'some state...';
  return textHolder.value;
};

export default editItem;