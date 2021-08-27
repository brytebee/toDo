export default function clearAll() {
  let list = JSON.parse(localStorage.getItem('list'));
  document.getElementById('clearBtn').addEventListener('click', () => {
    /* eslint-disable */
    const doubleCheck = confirm('Are you sure?');
    /* eslint-enable */
    if (doubleCheck) {
      list = list.filter((e) => !e.completed);
      localStorage.setItem('list', JSON.stringify(list));
      if (list !== null) {
        /* eslint-disable */
        location.reload();
        /* eslint-enable */
      }
    }
  });
}