import "./listPage.css";
import { headerBar } from "../../components/headerBar/headerBar";
import { slogan } from "../../components/slogan/slogan";
import { createList } from "../../components/coffeeList/coffeeList";
import { footerListPage } from "../../components/footerListPage/footerListPage";
import { createElement } from "../../element";

export default { title: "Pages/List" };

export const pageList = () => {
  const listPage = createElement("div", { className: "listPage" });
  const fullWidth = createElement("main", { className: "fullWidth" });

  fullWidth.append(createList());
  listPage.append(headerBar());
  listPage.append(slogan());
  listPage.append(fullWidth);
  listPage.append(footerListPage());

  return listPage;
};
