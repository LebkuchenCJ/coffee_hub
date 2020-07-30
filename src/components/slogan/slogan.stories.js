import "./slogan.css";
import { slogan } from "./slogan";

export default { title: "Slogan" };

export const heading = () => {
  const text = slogan();
  return text;
};
