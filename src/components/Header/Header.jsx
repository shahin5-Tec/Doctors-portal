import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className=" my-container ">
      <div className="flex relative items-center justify-between">
        <Link
          to="/"
          aria-label="Doctors Portal"
          title="Doctors Portal"
          className="inline-flex items-center"
        >
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">
           Doctor's Portal
          </span>
        </Link>
        {/* navbar-components */}
        <ul className="lg:flex items-center md:hidden hidden  font-semibold  space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Home
            </NavLink>
          </li>
        
        
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              About 
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appoinment"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Appointment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Login
            </NavLink>
          </li>
        </ul>
        {/* mobile-navbar-section */}
        <div className="lg:hidden">
          <button
            aria-label="open-menu"
            title="open-menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Doctors portal"
                      title="Doctors Portal"
                      className="inline-flex items-center"
                    >
                    
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">
                       Doctor's Portal
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="close-menu"
                      title="close-menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <div>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "  text-blue-600" : ""
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                   
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? "  text-blue-600" : "" 
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/appoinment"
                        className={({ isActive }) =>
                          isActive ? "  text-blue-600" : "" 
                        }
                      >
                        Appoinment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          isActive ? "  text-blue-600" : "" 
                        }
                      >
                        Login
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;