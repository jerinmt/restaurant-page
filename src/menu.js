import image from "./assets/menu.svg";

const displayMenu = function () {
  const content = document.querySelector("#content");
  const container = document.createElement("div");

  const heading = document.createElement("h1");
  const pic = document.createElement("img");
  const list = document.createElement("ul");
  const item1 = document.createElement("li");
  const item2 = document.createElement("li");
  const item3 = document.createElement("li");
  const item4 = document.createElement("li");
  const item5 = document.createElement("li");
  const item6 = document.createElement("li");
  const item7 = document.createElement("li");

  heading.textContent = "Our Menu";
  pic.src = image;
  item1.textContent = "Appam Muttacurry";
  item2.textContent = "Kappa Meencurry";
  item3.textContent = "Porotta Pothcurry";
  item4.textContent = "Idiyappam Beefcurry";
  item5.textContent = "Thattudosa Omelette";
  item6.textContent = "Puttu Kadalacurry";
  item7.textContent = "Oonu Kozhicurry";

  content.appendChild(container);
  container.appendChild(heading);
  container.appendChild(pic);
  container.appendChild(list);
  list.appendChild(item1);
  list.appendChild(item2);
  list.appendChild(item3);
  list.appendChild(item4);
  list.appendChild(item5);
  list.appendChild(item6);
  list.appendChild(item7);
};

export { displayMenu };
