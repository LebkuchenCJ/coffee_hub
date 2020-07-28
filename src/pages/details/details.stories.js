import { useEffect } from "@storybook/client-api";
import { quantitySelector } from "../../components/quantitySelector/quantitySelector";
import { addButton } from "../../components/button/button";

export default {
  title: "Pages/Details",
};

/* export const basic = () => {
  useEffect(() => {
    const button = document.querySelector(".btn");
    button.addEventListener("click", () => {
      button.innerHTML = "Moin";
    });
  });

  return '<button class="btn">Hallo Fische</button>';
}; */

export const quantSelec = () => {
  const main = document.createElement("main");

  main.append(quantitySelector());

  const br = document.createElement("br");
  main.append(br);

  main.append(addButton("Add to cart"));

  return main;
};
