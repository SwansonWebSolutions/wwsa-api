import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked on mobile
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="relative">
      {/* Hamburger icon for mobile */}
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
        </div>
        <Link
          to="/"
          className="text-white border-solid border-light-blue border-b-0 hover:lg:border-b-2 hover:cursor-pointer duration-200 ease-in"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white border-solid border-light-blue border-b-0 hover:lg:border-b-2 hover:cursor-pointer duration-200 ease-in"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="/service-1"
          className="text-white border-solid border-light-blue border-b-0 hover:lg:border-b-2 hover:cursor-pointer duration-200 ease-in"
          onClick={closeMenu}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="text-white md:bg-transparent md:border-solid md:border md:border-light-blue md:px-4 text-shadow md:py-2 md:rounded-md md:ml-4 border-solid border-0 md:border-1 border-light-blue hover:md:bg-light-blue duration-200 ease-in"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
