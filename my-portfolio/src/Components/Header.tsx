import { IconVs } from "@tabler/icons-react";
import SideBar from "./SideBar";

const links = ["About", "Work", "Experience", "Skills", "Contact"];
const navLinks = (col: boolean) => {
  return links.map((link, index) => {
    return (
      <a
        key={index}
        className={`${
          col ? "flex flex-col items-center" : ""
        } text-textColor text-lg font-mono hover:text-primaryColor`}
        href={`#${link}`}
      >
        <span className="text-primaryColor">0{index + 1}. </span>
        {link}
      </a>
    );
  });
};

const Header = () => {
  return (
    <>
      <nav className="flex bg-bgColor  h-[15vh]  justify-between items-center px-10">
        <IconVs className="z-10" stroke={1.25} size={60} color="#64ffda" />

        <div className="md:flex gap-8 hidden">{navLinks(false)}</div>
        <SideBar />
      </nav>
    </>
  );
};

export default Header;
export { navLinks };
