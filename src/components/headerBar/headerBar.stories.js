import "./headerBar.css";
import { headerBar } from "./headerBar";

export default { title: "Header Bar" };

export const headerElement = () => {
  const headBar = headerBar();
  return headBar;
};
