import { clearContent } from "./clearer";
import { displayContact } from "./contact";
import { displayHome } from "./home";
import { displayMenu } from "./menu";
import "./style.css";

displayHome();
const buttons = document.querySelectorAll("button");
buttons[0].addEventListener(
  "click",
  () => {
    clearContent();
    displayHome();
  },
  false,
);
buttons[1].addEventListener(
  "click",
  () => {
    clearContent();
    displayMenu();
  },
  false,
);
buttons[2].addEventListener(
  "click",
  () => {
    clearContent();
    displayContact();
  },
  false,
);
