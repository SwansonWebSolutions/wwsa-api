import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const navigateToService = (name) => {
    return navigate(name);
  };

  return (
    <nav className="relative">
      {/* Hamburger icon - only visible on mobile */}
      <div className="md:hidden px-4 z-50" onClick={toggleMenu}>
        {isOpen ? (
          <FontAwesomeIcon icon={faTimes} className="text-2xl cursor-pointer text-white" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="text-2xl cursor-pointer text-white" />
        )}
      </div>

      {/* Menu links */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row md:justify-center md:items-center gap-4 fixed md:static top-0 left-0 w-full h-full md:h-auto md:w-auto bg-gray-800 md:bg-transparent p-8 md:p-0 text-4xl md:text-2xl font-normal`}
      >
        <div className="relative text-white md:ml-4 md:p-0 border-solid border-light-blue border-b-0 hover:lg:border-b-2 duration-200 ease-in">
          <button onClick={toggleMenu} className='md:hidden w-full text-end'>
            <FontAwesomeIcon icon={faTimes} className="mr-2" />
          </button>
          <button onClick={toggleServices} className="flex items-center">
            Services <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </button>
          {/* Dropdown Menu */}
          <ul
            className={`${
              isServicesOpen ? 'block' : 'hidden'
            } absolute mt-2 md:mt-0 text-2xl bg-opacity-75 border-solid border-y-2 border-black bg-gray-700 md:bg-transparent w-full md:w-auto`}
          >
            <li
              onClick={() => navigateToService('/service-1')}
              className="p-2 flex items-center hover:bg-gray-600 hover:cursor-pointer"
            >
              Example Service
            </li>
          </ul>
        </div>
        <Link
          to="/about"
          className="text-white border-solid border-light-blue border-b-0 hover:lg:border-b-2 hover:cursor-pointer duration-200 ease-in"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-white md:bg-light-blue md:border-solid md:border md:border-light-blue md:px-4 text-shadow md:py-2 md:rounded-md md:ml-4 border-solid border-0 md:border-1 border-light-blue hover:md:bg-transparent duration-200 ease-in"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
