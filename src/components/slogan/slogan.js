import { createElement } from "../../element";

export const slogan = () => {
  const textSlogan = createElement("div", { className: "slogan" });
  const h1 = createElement("h1", { innerText: "It's Great " });
  const span = createElement("span", { innerText: "Day for Coffee" });

  h1.append(span);
  textSlogan.append(h1);

  return textSlogan;
};
