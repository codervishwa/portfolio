import { IconVs } from "@tabler/icons-react";

const Header = () => {
  return (
    <>
      <nav className="flex bg-bgColor dm-mono-regular h-[15vh]  justify-between items-center px-10">
        <IconVs stroke={1.25} size={60} color="#64ffda" />

        <div className="flex gap-5">
          <a className="text-textColor  hover:text-primaryColor" href="#about">
            About
          </a>
          <a className="text-textColor  hover:text-primaryColor" href="#work">
            Work
          </a>
          <a
            className="text-textColor  hover:text-primaryColor"
            href="#experience"
          >
            Experience
          </a>
          <a className="text-textColor  hover:text-primaryColor" href="#skills">
            Skills
          </a>
          <a
            className="text-textColor  hover:text-primaryColor"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
