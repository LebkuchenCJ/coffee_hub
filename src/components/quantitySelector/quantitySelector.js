export function quantitySelector() {
  let quantitySelector = document.createElement("div");
  quantitySelector.classList.add("quantitySelector");

  let decrease = document.createElement("button");
  decrease.classList.add("decrease");
  decrease.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="11"
  height="2"
  viewBox="0 0 11 2"
>
  <rect class="a" width="11" height="2" rx="1" />
</svg>`;
  quantitySelector.prepend(decrease);

  let counter = document.createElement("p");
  counter.classList.add("counter");
  counter.innerHTML = "1";
  quantitySelector.append(counter);

  let increase = document.createElement("button");
  increase.classList.add("increase");
  increase.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="10.763"
  height="10.762"
  viewBox="0 0 10.763 10.762"
>
  <path
    class="a"
    d="M4.651,9.994V6.112H.769a.769.769,0,0,1,0-1.538H4.651V.769a.769.769,0,1,1,1.537,0V4.574H9.995a.769.769,0,0,1,0,1.538H6.188V9.994a.769.769,0,1,1-1.537,0Z"
  />
</svg>`;
  quantitySelector.append(increase);

  let count = Number(1);

  decrease.addEventListener("click", () => {
    counter.innerHTML = count;
    count--;
    if (count < 0) {
      count = 0;
      decrease.disabled = true;
    }
  });

  increase.addEventListener("click", () => {
    count++;
    counter.innerHTML = count;
    if (count === 1) {
      decrease.disabled = false;
    }
  });

  return quantitySelector;
}
