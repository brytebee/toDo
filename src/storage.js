const getFromStorage = () => {
  if (localStorage.getItem('list') !== null) {
    return JSON.parse(localStorage.getItem('list'));
  }
  return [];
};

const saveInStorage = (list) => {
  localStorage.setItem('list', JSON.stringify(list));
};

export default getFromStorage;
export { saveInStorage };