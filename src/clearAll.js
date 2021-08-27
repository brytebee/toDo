export default function clearAll() {
    let list = JSON.parse(localStorage.getItem('list'));
    document.getElementById('clearBtn').addEventListener('click', () =>{
      list = list.filter((e) => !e.completed);
      localStorage.setItem('list', JSON.stringify(list))
      if (list !== null) {
        location.reload();
      }
    })
  }