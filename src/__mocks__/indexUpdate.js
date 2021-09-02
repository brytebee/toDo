const indexUpdate = (list) => {
  document.body.innerHTML = `
    <div class='card'>
      <div class='input-group'>
          <input id='input' type='text' class='form-control' placeholder='Enter task...'>
          <button id='addBtn' class='btn btn-outline-secondary' type='button'></button>
      </div>
      <div id='list' class='card-body'></div>
    </div>
    `;
  list = [];
  class Item {
    constructor(description, list) {
      this.completed = false;
      this.description = description;
      this.index = list.length + 1;
    }
  }

  const input = new Item('one', list);
  list.push(input.index);
  const input2 = new Item('two', list);
  list.push(input2.index);
  list.pop(); // remove the index = 2
  const input3 = new Item('three', list);
  list.push(input3.index);
  return list;
};

export default indexUpdate;
