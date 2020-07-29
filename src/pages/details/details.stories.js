import "./details.css";
import { quantitySelector } from "../../components/quantitySelector/quantitySelector";
import { addButton } from "../../components/button/button";
import { createElement } from "../../element";
import macchiatoSrc from "../../../Images/macchiato.svg";
import { sizeSelector } from "../../components/sizeSelector/sizeSelector";

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
  /* const coffeeInput = createElement("input"); */
  coffeeSize.append(sizeSelector());

  const sugarSize = createElement("label", { innerText: "Sugar (in Cubes)" });
  const sugarInput = createElement("input");
  sugarSize.append(sugarInput);

  main.append(form);

  form.append(coffeeName);
  form.append(quantitySelector());
  form.append(coffeeSize);
  form.append(sugarSize);
  form.append(addButton("Add to Cart"));

  return main;
};
