export default function status() {
  const list = JSON.parse(localStorage.getItem('list'));
  const checkbox = Object.values(document.getElementsByName('checkbox'));
  checkbox.forEach((e, i) => {
    e.addEventListener('click', () => {
      if (e.checked) {
        list[i].completed = true;
        e.parentElement.style.textDecoration = 'line-through underline';
        e.parentElement.classList.add('dim');
        list.sort((a, b) => a.completed - b.completed);
      } else {
        list[i].completed = false;
        e.parentElement.style.textDecoration = 'none';
        e.parentElement.classList.remove('dim');
        list.sort((a, b) => a.index - b.index);
      }
      localStorage.setItem('list', JSON.stringify(list));
      location.reload();
    });
  });
}