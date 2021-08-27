export default function removeItem() {
  let list = JSON.parse(localStorage.getItem('list'));
  const removeBtn = Object.values(document.getElementsByName('rmvbtn'));
  removeBtn.forEach((e) => {
    e.addEventListener('click', () => {
      /* eslint-disable */
      const doubleCheck = confirm('Are you sure?');
      /* eslint-enable */
      if (doubleCheck) {
        e.parentElement.remove();
        list = list.filter((x) => (e.id !== x.id));
        localStorage.setItem('list', JSON.stringify(list));
        /* eslint-disable */
        location.reload();
        /* eslint-enable */
      }
    });
  });
}