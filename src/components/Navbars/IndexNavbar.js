/*eslint-disable*/
import React from "react";
import { Link, NavLink } from "react-router-dom";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-1 navbar-expand-lg bg-white ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/YourListing">
              <img
                alt="..."
                className="w-14 mr-8"
                src={require("assets/img/Logo.svg").default}
              />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-2 py-1  block lg:hidden outline-none focus:outline-none focus:bg-none : "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-rose-700  lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                {/* <IndexDropdown /> */}
                <NavLink
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  to="/YourListing"
                  activeStyle={{ color: "#a5ce22", textDecoration: "none" }}
                  className="text-black font-semibold leading-relaxed inline-block mx-4 py-2 whitespace-nowrap"
                >
                  your listings
                </NavLink>
              </li>
              <li className="flex items-center">
                <NavLink
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  activeStyle={{ color: "#a5ce22", textDecoration: "none" }}
                  to="/AddNewListing"
                  className="text-black focus:text-green font-semibold leading-relaxed inline-block mx-4 py-2 whitespace-nowrap"
                >
                  Add listings
                </NavLink>
              </li>

              <li className="flex items-center">
                <NavLink
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  activeStyle={{ color: "#a5ce22", textDecoration: "none" }}
                  to="/Messages"
                  className="text-black focus:text-green font-semibold leading-relaxed inline-block mx-4 py-2 whitespace-nowrap"
                >
                  Messages
                </NavLink>
              </li>

              <li className="flex items-center">
                <NavLink
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  activeStyle={{ color: "#a5ce22", textDecoration: "none" }}
                  to="/Profile"
                  className="text-black focus:text-green font-semibold leading-relaxed inline-block mx-4 py-2 whitespace-nowrap"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
