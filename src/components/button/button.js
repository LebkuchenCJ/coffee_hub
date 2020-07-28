export function addButton(buttonText) {
  let button = document.createElement("button");
  button.classList.add("btn");
  const text = document.createTextNode(buttonText);
  button.append(text);
  button.addEventListener("mouseover", () => {
    let anotherButton = addButton(buttonText);
    button.parentElement.append(anotherButton);
  });
  button.addEventListener("click", () => {
    let anotherButton = addButton(buttonText);
    button.nextSibling.remove(anotherButton);
  });
  return button;
}
