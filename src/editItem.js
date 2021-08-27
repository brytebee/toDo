export default function editItem() {
  const editBtn = Object.values(document.getElementsByName('editbtn'));
  editBtn.forEach((e) => {
    e.addEventListener('click', () => {
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.name = 'checkbox';
      checkbox.checked = e.completed;
    });
  });
}