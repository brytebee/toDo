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
        console.log(list);
        console.log(e.id);
        list = list.filter((x) => (e.id !== x.id));
        console.log(list);
        localStorage.setItem('list', JSON.stringify(list));
      }
    });
  });
}