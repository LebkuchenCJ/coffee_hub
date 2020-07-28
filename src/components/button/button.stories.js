import "./button.css";
import { addButton } from "./button";
/* import button from "./button.html";
 */
export default { title: "Button" };

export const addToCart = () => {
  let button = addButton("Hello there");

  return button;
};
