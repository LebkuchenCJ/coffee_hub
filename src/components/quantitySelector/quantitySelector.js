import { createElement } from "../../element";

export function quantitySelector() {
  const quantitySelector = createElement("div", {
    className: "quantitySelector",
  });

  const decrease = createElement("button", {
    className: "decrease",
    tpye: "button",
    innerHTML: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="2"
    viewBox="0 0 11 2"
  >
    <rect class="a" width="11" height="2" rx="1" />
  </svg>`,
  });

  const counter = createElement("input", {
    className: "counter",
    value: 1,
    min: 1,
    max: 9,
    tpye: "number",
    name: "quantity",
  });

  const increase = createElement("button", {
    className: "increase",
    tpye: "button",
    innerHTML: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="10.763"
    height="10.762"
    viewBox="0 0 10.763 10.762"
  >
    <path
      class="a"
      d="M4.651,9.994V6.112H.769a.769.769,0,0,1,0-1.538H4.651V.769a.769.769,0,1,1,1.537,0V4.574H9.995a.769.769,0,0,1,0,1.538H6.188V9.994a.769.769,0,1,1-1.537,0Z"
    />
  </svg>`,
  });

  quantitySelector.prepend(decrease);
  quantitySelector.append(counter);
  quantitySelector.append(increase);

  let count = 1;

  decrease.addEventListener("click", () => {
    counter.value = count;
    count--;
    if (count < 0) {
      count = 0;
      decrease.disabled = true;
    }
  });

  increase.addEventListener("click", () => {
    count++;
    counter.value = count;
    if (count === 1) {
      decrease.disabled = false;
    }
  });

  return quantitySelector;
}
