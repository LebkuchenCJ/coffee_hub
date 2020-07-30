import { createElement } from "../../element";
import homeSrc from "../../../Images/home.svg";
import locationSrc from "../../../Images/loc.svg";
import cubSrc from "../../../Images/cup.svg";
import profileSrc from "../../../Images/profile.svg";

export const footerListPage = () => {
  const footerList = createElement("div", { className: "footerListPage" });

  const imgFooter = [
    { src: homeSrc, alt: "Home" },
    { src: locationSrc, alt: "Location" },
    { src: cubSrc, alt: "Cup counter" },
    { src: profileSrc, alt: "Profile" },
  ];

  imgFooter.forEach((button) => {
    const link = createElement("a", { href: "#" });
    const img = createElement("img", { src: button.src, alt: button.alt });
    link.append(img);
    footerList.append(link);
  });

  return footerList;
};
