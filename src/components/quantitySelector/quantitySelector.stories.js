import { useEffect } from "@storybook/client-api";

import "./quantitySelector.css";
import { quantitySelector } from "./quantitySelector";
/* import quantitySelector from "./quantitySelector.html"; */

export default { title: "Quantity Selector" };

export const quantSel = () => {
  let button = quantitySelector();

  return button;
};

/* export const simpleSelector = () => {
  useEffect(() => {
    const minus = document.querySelector(".decrease");
    const plus = document.querySelector(".increase");
    const number = document.querySelector(".counter");
    let count = Number(1);

    minus.addEventListener("click", () => {
      number.innerHTML = count;
      count--;
      if (count < 0) {
        count = 0;
        minus.disabled = true;
      }
    });

    plus.addEventListener("click", () => {
      count++;
      number.innerHTML = count;
      if (count === 1) {
        minus.disabled = false;
      }
    });
  });

  return quantitySelector;
};
 */
