import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { CgClose } from "react-icons/cg";
import { CgMenu } from "react-icons/cg";
import { CgShoppingCart } from "react-icons/cg";
import Cart from "../cart/Cart";
import { StoreContext } from "../../Store/provider";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { isOpen, cart, handleOpenCart } = useContext(StoreContext);

  const handle = () => {
    setMenu(!menu);
  };
  return (
    <nav className="fixed bg-white border-b-2 border-blue-200 w-full top-0 flex justify-between left-0 pb-12 z-10">
      <div className="container pl-4 pr-4  mx-auto md:flex z-10 md:justify-between md:items-center w-full fixed">
        <div className="flex items-center md:flex md:px-14 py-2  ">
          <Link to="/">
            <FcHome className="w-auto h-6 sm:h-7" />
          </Link>
          <Link to="/">
            <img
              className="w-auto h-6 sm:h-7 px-2"
              src="https://merakiui.com/images/full-logo.svg"
              alt=""
            />
          </Link>
        </div>

        <div className="flex items-center justify-center md:block">
          <a
            onClick={handleOpenCart}
            className="relative text-blue-400 text-2xl transition-colors duration-300 transform cursor-pointer hover:text-blue-200 right-1 "
          >
            <CgShoppingCart />

            {cart?.length > 0 && (
              <span className="absolute  -right-3 -top-1 text-xs text-white bg-red-500 rounded-full w-4 h-4 cursor-pointer justify-center items-center flex">
                {cart?.length > 0 ? cart?.length : 0}
              </span>
            )}
          </a>
        </div>

        <div
          className={
            menu
              ? "flex flex-col w-full transition-all duration-500 ease-in  gap-4 md:inline"
              : "hidden md:inline"
          }
        >
          {/* <Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className="absolute inset-x-0 z-20 w-full pl-12 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <NavLink
                to="/"
                className="my-2 text-blue-400 transition-colors duration-300 transform  hover:text-blue-200 md:mx-4 md:my-0"
              >
                Home
              </NavLink>
              <NavLink
                className="my-2 text-blue-400 transition-colors duration-300 transform  hover:text-blue-200 md:mx-4 md:my-0"
                to="/drink"
              >
                Drink
              </NavLink>

              <NavLink
                className="my-2 text-blue-400 transition-colors duration-300 transform  hover:text-blue-200 md:mx-4 md:my-0"
                to="/contact"
              >
                Contact
              </NavLink>
              <NavLink
                className="my-2 text-blue-400 transition-colors duration-300 transform  hover:text-blue-200 md:mx-4 md:my-0"
                to="/about"
              >
                About
              </NavLink>
            </div>
          </div>
        </div>
        <div
          className="inline  slef-start text-3xl absolute right-6 top-7 cursor-pointer md:hidden "
          onClick={handle}
        >
          {!menu ? <CgMenu /> : <CgClose />}
        </div>
      </div>

      {isOpen && <Cart />}
    </nav>
  );
};

export default Navbar;
