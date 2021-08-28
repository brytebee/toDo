import display from "./display";
import getFromStorage from "./storage";

const addByEnter = (event, add) => {
  if (event.key === 'Enter') {
    add();
    display(getFromStorage());
  }
}

export default addByEnter;