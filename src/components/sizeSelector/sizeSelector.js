import { createElement } from "../../element";
import macchiatoSrc from "../../../Images/macchiato.svg";

export function sizeSelector() {
  const sizeSelector = createElement("div", { className: "selector" });

  const imgSmall = createElement("img", {
    src: macchiatoSrc,
    className: "smallCup",
    alt: "Macchiato Cup",
  });
  const smallLabel = createElement("label", { className: "smallLabel" });
  const smallInput = createElement("input", {
    type: "radio",
    name: "size",
    value: "S",
  });
  smallLabel.append(smallInput);
  smallLabel.append(imgSmall);

  const imgMedium = createElement("img", {
    src: macchiatoSrc,
    className: "mediumCup",
    alt: "Macchiato Cup",
  });
  const mediumLabel = createElement("label", { className: "mediumLabel" });
  const mediumInput = createElement("input", {
    type: "radio",
    name: "size",
    value: "M",
  });
  mediumLabel.append(mediumInput);
  mediumLabel.append(imgMedium);

  const imgLarge = createElement("img", {
    src: macchiatoSrc,
    className: "largeCup",
    alt: "Macchiato Cup",
  });
  const largeLabel = createElement("label", { className: "largeLabel" });
  const largeInput = createElement("input", {
    type: "radio",
    name: "size",
    value: "L",
  });
  largeLabel.append(largeInput);
  largeLabel.append(imgLarge);

  sizeSelector.append(smallLabel);
  sizeSelector.append(mediumLabel);
  sizeSelector.append(largeLabel);

  return sizeSelector;
}
