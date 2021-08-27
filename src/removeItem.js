export default function removeItem() {
  let list = JSON.parse(localStorage.getItem('list'));
  const removeBtn = Object.values(document.getElementsByName('rmvbtn'));
  removeBtn.forEach((e) => {
    e.addEventListener('click', () => {
      const doubleCheck = confirm('Are you sure?');
      if (doubleCheck) {
        e.parentElement.remove();
        list = list.filter((x) => !(e.id === x.id));
        localStorage.setItem('list', JSON.stringify(list)); 
      }
      });
  });
}