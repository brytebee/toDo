export default function clearAll() {
  if (JSON.parse(localStorage.getItem('list'))) {
    let list = JSON.parse(localStorage.getItem('list'));
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
  }
}