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

  let addToCart = addButton("Add to Cart");
  /*   let para = document.getElementsByClassName("counter");
  addToCart.addEventListener("click", () => {
    if (para.innerText === "1") {
      alert("Buy some more");
    }
  }); */
  main.append(addToCart);

  return main;
};
