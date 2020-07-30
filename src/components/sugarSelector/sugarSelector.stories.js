import "./sugarSelector.css";
import { sugarSelector } from "./sugarSelector";
export default { title: "Sugar Selector" };

export const sugarCubes = () => {
  const select = sugarSelector();

  return select;
};
