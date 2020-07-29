import "./details.css";
import { quantitySelector } from "../../components/quantitySelector/quantitySelector";
import { addButton } from "../../components/button/button";
import { createElement } from "../../element";
import macchiatoSrc from "../../../Images/macchiato.svg";
import { sizeSelector } from "../../components/sizeSelector/sizeSelector";
import { sugarSelector } from "../../components/sugarSelector/sugarSelector";

export default {
  title: "Pages/Details",
};

export const basic = () => {
  const main = createElement("main", { className: "details" });
  const header = createElement("header", { className: "details__header" });
  main.append(header);

  const titel = createElement("h2", { innerText: "Macchiato" });
  const img = createElement("img", {
    src: macchiatoSrc,
    alt: "Macchiato Cub",
  });
  header.append(titel);
  titel.after(img);

  const form = createElement("form", { className: "details__form" });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  const coffeeName = createElement("div", { innerText: "Macchiato" });
  const price = createElement("div", { innerText: "$2.80" });
  coffeeName.append(price);

  const coffeeSize = createElement("label", { innerText: "Size" });
  coffeeSize.append(sizeSelector());

  const sugarSize = createElement("label", { innerText: "Sugar (in Cubes)" });
  sugarSize.append(sugarSelector());

  main.append(form);

  form.append(coffeeName);
  form.append(quantitySelector());
  form.append(coffeeSize);
  form.append(sugarSize);
  form.append(addButton("Add to Cart"));

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    for (let [name, value] of formData) {
      console.log(`${name} = ${value}`);
    }
    alert("Coffee submitted. See console for values");
  });

  return main;
};
