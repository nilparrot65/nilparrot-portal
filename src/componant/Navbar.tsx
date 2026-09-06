import React, { useEffect, useState } from "react";
import logo from "../assets/logo2.png";
import { menuItemsData } from "../data/menu";
import { Link } from "react-router-dom";
import type { Menu } from "../model/Menu";

interface NavbarProps {
  activeMenu: string;
  setActiveMenu: (type: string) => void;
}

export const Navbar = ({ activeMenu, setActiveMenu }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Only close if menu is currently open AND page has been scrolled down
      if (isOpen && window.scrollY > 20) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]); // Added isOpen dependency so it correctly reads the state

  const toggleServiceMenu = (menu: Menu) => {
    if (menu.label.toLowerCase() !== "demo") {
      setActiveMenu(menu.label.toLowerCase());
    }
    setIsOpen(false); // Closes mobile menu after selecting a page
  };

  const bgHome =
    "sticky navbar navbar-expand-lg top-0 bg-gradient-to-b from-white to-indigo-100 backdrop-blur-md z-50";

  const bgOther =
    "sticky navbar navbar-expand-lg top-0 bg-gradient-to-b from-white to-green-200 backdrop-blur-md z-50";

  const linkCss =
    "nav-link nav2 text-indigo-400 hover:text-indigo-900 transition text-sm xl:text-base block py-2 lg:py-0";

  const activeLinkCss =
    "nav-link nav2 text-indigo-900 font-bold transition text-sm xl:text-base block py-2 lg:py-0";

  const buttonCss =
    "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 inline-block";

  return (
    <nav className={activeMenu === "home" ? bgHome : bgOther}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
        <Link
          className="navbar-brand navbar-brand-custom text-2xl font-bold font-display text-slate-900"
          to="/"
          onClick={() => {
            setActiveMenu("home");
            setIsOpen(false);
          }}
        >
          <img src={logo} className="h-14 w-auto" alt="Logo" />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleNavbar}
          className="navbar-toggler navbar-toggler-custom lg:hidden p-2 focus:outline-none"
          type="button"
          aria-controls="mainNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="bar block w-6 h-0.5 bg-slate-800 mb-1"></span>
          <span className="bar block w-6 h-0.5 bg-slate-800 mb-1"></span>
          <span className="bar block w-6 h-0.5 bg-slate-800"></span>
        </button>

        {/* Navigation Links and CTA */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-start lg:items-center justify-between w-full lg:w-auto mt-4 lg:mt-0`}
          id="mainNav"
        >
          <ul className="navbar-nav ms-auto flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-8 font-medium w-full lg:w-auto mb-4 lg:mb-0">
            {menuItemsData.map((menu) => (
              <li className="nav-item w-full lg:w-auto" key={menu.label}>
                <Link
                  className={
                    menu.label.toLowerCase() !== "demo"
                      ? activeMenu.toLowerCase() === menu.label.toLowerCase()
                        ? activeLinkCss
                        : linkCss
                      : buttonCss
                  }
                  onClick={() => toggleServiceMenu(menu)}
                  to={menu.label !== "Product" ? menu.href : "#"}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;