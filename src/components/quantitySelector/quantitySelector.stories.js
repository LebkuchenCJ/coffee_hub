import "./quantitySelector.css";
import { quantitySelector } from "./quantitySelector";

export default { title: "Quantity Selector" };

export const quantSel = () => {
  let button = quantitySelector();

  return button;
};
