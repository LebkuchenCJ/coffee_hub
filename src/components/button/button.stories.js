import "./button.css";
/* import button from "./button.html";
 */
export default { title: "Button" };

function addButton(buttonText) {
  let button = document.createElement("button");
  button.classList.add("btn");
  const text = document.createTextNode(buttonText);
  button.append(text);
  button.addEventListener("click", () => {
    let anotherButton = addButton(buttonText);
    button.parentElement.append(anotherButton);
  });
  button.addEventListener("hover", () => {
    let anotherButton = addButton(buttonText);
    button.parentElement.remove(anotherButton);
  });
  return button;
}

export const addToCart = () => {
  let button = addButton("Hello there");

  return button;
};
