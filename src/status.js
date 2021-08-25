export default function status() {
  const list = JSON.parse(localStorage.getItem('list'));
  const checkbox = Object.values(document.getElementsByName('checkbox'));
  checkbox.forEach((e, i) => {
    e.addEventListener('click', () => {
      if (e.checked) {
        list[i].completed = true;
        e.parentElement.style.textDecoration = 'line-through underline';
      } else {
        list[i].completed = false;
        e.parentElement.style.textDecoration = 'none';
      }
      localStorage.setItem('list', JSON.stringify(list));
    });
  });
};