import { createList } from "./coffeeList";

export default { title: "Coffee List" };

export function createCoffeeList() {
  const list = createList();

  return list;
}
