import image from "./assets/home.svg";

const displayHome = function () {
  const content = document.querySelector("#content");
  const container = document.createElement("div");
  const heading = document.createElement("h1");
  const pic = document.createElement("img");
  const intro = document.createElement("p");
  const para = document.createElement("p");

  heading.textContent = "The Koottaan Restaurant";
  pic.src = image;
  intro.textContent =
    "Come taste and enjoy the dishes that you could get only in Kerala. Our restaurant brings you selected signature food from the Tropical Paradise.";
  para.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aliquam necessitatibus eveniet at quam, atque possimus eius quod ea commodi. Fuga officia sit animi similique excepturi inventore iusto debitis natus. Adolor sit amet consectetur adipisicing elit. Alias aliquam necessitatibus eveniet at quam, atque possimus eius quod ea commodi. Fuga officia sit animi similique excepturi inventore iusto debitis natus!";

  content.appendChild(container);
  container.appendChild(heading);
  container.appendChild(pic);
  container.appendChild(intro);
  container.appendChild(para);
};

export { displayHome };
