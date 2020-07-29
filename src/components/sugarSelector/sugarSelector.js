import sugarCubes_0 from "../../../Images/sugarCube_0.svg";
import sugarCubes_1 from "../../../Images/sugarCube_1.svg";
import sugarCubes_2 from "../../../Images/sugarCube_2.svg";
import sugarCubes_3 from "../../../Images/sugarCube_3.svg";
import { createElement } from "../../element";

export function sugarSelector() {
  const sugarSelector = createElement("div", { className: "sugarSelector" });

  const img_0 = createElement("img", {
    src: sugarCubes_0,
    className: "cubes_0",
    alt: "No sugar cubes",
  });
  const label_0 = createElement("label", { className: "label_0" });
  const input_0 = createElement("input", {
    type: "radio",
    name: "Cubes",
    value: 0,
  });
  label_0.append(input_0);
  label_0.append(img_0);

  const img_1 = createElement("img", {
    src: sugarCubes_1,
    className: "cubes_1",
    alt: "One sugar cube",
  });
  const label_1 = createElement("label", { className: "label_1" });
  const input_1 = createElement("input", {
    type: "radio",
    name: "Cubes",
    value: 1,
  });
  label_1.append(input_1);
  label_1.append(img_1);

  const img_2 = createElement("img", {
    src: sugarCubes_2,
    className: "cubes_2",
    alt: "Two sugar cubes",
  });
  const label_2 = createElement("label", { className: "label_2" });
  const input_2 = createElement("input", {
    type: "radio",
    name: "Cubes",
    value: 2,
  });
  label_2.append(input_2);
  label_2.append(img_2);

  const img_3 = createElement("img", {
    src: sugarCubes_3,
    className: "cubes_3",
    alt: "No sugar cubes",
  });
  const label_3 = createElement("label", { className: "label_3" });
  const input_3 = createElement("input", {
    type: "radio",
    name: "Cubes",
    value: 3,
  });
  label_3.append(input_3);
  label_3.append(img_3);

  sugarSelector.append(label_0);
  sugarSelector.append(label_1);
  sugarSelector.append(label_2);
  sugarSelector.append(label_3);

  return sugarSelector;
}
