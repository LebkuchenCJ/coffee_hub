import "./coffeeList.css";
import { createElement } from "../../element";
import backSrc from "../../../Images/back.svg";
import espressoSrc from "../../../Images/espresso.svg";
import cappuccinoSrc from "../../../Images/cappuccino.svg";
import macchiatoSrc from "../../../Images/macciato.svg";
import mochaSrc from "../../../Images/mocha.svg";
import latteSrc from "../../../Images/latte.svg";

export function createList() {
  const coffees = [
    { imgSrc: espressoSrc, name: "Espresso" },
    { imgSrc: cappuccinoSrc, name: "Cappuccino" },
    { imgSrc: macchiatoSrc, name: "Macchiato" },
    { imgSrc: mochaSrc, name: "Mocha" },
    { imgSrc: latteSrc, name: "Latte" },
  ];

  const coffeeList = createElement("ul", { className: "coffeeList" });

  coffees.forEach((coffee) => {
    const listItem = createElement("li");
    const imgCoffee = createElement("img", { src: coffee.imgSrc });
    const paragraph = createElement("p", { innerText: coffee.name });
    const imgBack = createElement("img", { src: backSrc, alt: "Back" });

    coffeeList.append(listItem);
    listItem.append(imgCoffee);
    listItem.append(paragraph);
    listItem.append(imgBack);
  });

  return coffeeList;
}
