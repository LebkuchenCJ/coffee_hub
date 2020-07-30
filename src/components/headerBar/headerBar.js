import { createElement } from "../../element";
import navIconSrc from "../../../Images/nav_icon.svg";
import searchIconSrc from "../../../Images/search_icon.svg";

export const headerBar = () => {
  const bar = createElement("div", { className: "header" });
  const button = createElement("button");
  const navImg = createElement("img", { src: navIconSrc, alt: "Navigation" });
  const searchImg = createElement("img", {
    src: searchIconSrc,
    alt: "Searchbar",
  });
  button.append(navImg);
  bar.append(button);
  bar.append(searchImg);
  return bar;
};
