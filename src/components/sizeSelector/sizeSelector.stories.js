import "./sizeSelector.css";
import { sizeSelector } from "./sizeSelector";

export default { title: "Size Selector" };

export const coffeeSize = () => {
  let select = sizeSelector();

  return select;
};
