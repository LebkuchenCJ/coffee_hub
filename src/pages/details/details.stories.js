import { useEffect } from "@storybook/client-api";

export default {
  title: "Pages/Details",
};

export const basic = () => {
  useEffect(() => {
    const button = document.querySelector(".btn");
    button.addEventListener("click", () => {
      button.innerHTML = "Moin";
    });
  });

  return '<button class="btn">Hallo Fische</button>';
};

/* const numberOfStudents = 15;
const message = `Hello ${numberOfStudents} fishes`;

alert(message);
 */
