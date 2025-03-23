import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link, NavLink } from "react-router-dom";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <>
      <header
        className=" text-white p-4 flex justify-between items-center"
        style={{ backgroundColor: "#252A2E" }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <img
            src="https://cdn.prod.website-files.com/64ba723566506a1a59217abb/667021f69c2f9c9cd5cd06d8_Shopify%20(1).jpg"
            alt="E-Commerce Logo"
            className="h-12"
          />
          <div className="text-xl font-bold text-green-500">E-commerce.</div>
        </div>

        {/* Contact Info and Social Media Icons */}
        <div className="flex items-center space-x-4 mr-8">
          <div className="flex space-x-6">
            {/* Social Media Icons */}
            <a href="#" className="text-white hover:text-green-500 ml-4">
              <FontAwesomeIcon className="text-xl" icon={faFacebookF} />
            </a>
            {/* <a href="#" className="text-white hover:text-green-500">
              <FontAwesomeIcon icon={faTwitter} />
            </a> */}
            <a href="#" className="text-white hover:text-green-500">
              <FontAwesomeIcon className="text-xl" icon={faInstagram} />
            </a>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-green-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </header>
      <header className="bg-green-500 text-white p-4 flex justify-between items-center">
        <nav className="space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-green-500 pt-4 pb-4 pr-3 pl-3"
                : "text-black hover:bg-green-500 pt-4 pb-4 pr-3 pl-3"
            }
          >
            Home
          </NavLink>
          {/* <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-green-500 pt-4 pb-4 pr-3 pl-3"
                : "text-black hover:bg-green-500 pt-4 pb-4 pr-3 pl-3"
            }
          >
            About
          </NavLink> */}
          <NavLink
            to="/shopnow"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-green-500 pt-4 pb-4 pr-3 pl-3"
                : "text-black hover:bg-green-500 pt-4 pb-4 pr-3 pl-3"
            }
          >
           Shop Now
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-green-500 pt-4 pb-4 pr-3 pl-3"
                : "text-black hover:bg-green-500 pt-4 pb-4 pr-3 pl-3"
            }
          >
          Cart
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-green-500 pt-4 pb-4 pr-3 pl-3"
                : "text-black hover:bg-green-500 pt-4 pb-4 pr-3 pl-3"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-green-500 pt-4 pb-4 pr-3 pl-3"
                : "text-black hover:bg-green-500 pt-4 pb-4 pr-3 pl-3"
            }
          >
            Log in
          </NavLink>
        </nav>
      </header>
    </>
    // <header
    //   className={`${
    //     isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
    //   } fixed w-full z-10 lg:px-8 transition-all`}
    // >
    //   <div className="container mx-auto flex items-center justify-between h-full">
    //     <Link to={"/"}>
    //       <div className="w-[40px]">
    //         <img src={Logo} alt="" />
    //       </div>
    //     </Link>

    //     {/* cart */}
    //     <div
    //       onClick={() => setIsOpen(!isOpen)}
    //       className="cursor-pointer flex relative"
    //     >
    //       <BsBag className="text-2xl" />
    //       <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
    //         {itemAmount}
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
