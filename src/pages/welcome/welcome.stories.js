import "./welcome.css";
import { welcome } from "./welcome";

export default { title: "Pages/Welcome" };

export const headers = () => {
  const welcomeMain = welcome();

  return welcomeMain;
};
