import { createElement } from "../../element";
import coffeeMainSrc from "../../../Images/coffee_main.svg";

export const welcome = () => {
  const welcomePage = createElement("div", {
    className: "background",
  });
  const img = createElement("img", { src: coffeeMainSrc, alt: "Coffee Cup" });
  welcomePage.append(img);

  return welcomePage;
};
