import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Logo from '../images/wwsa.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();  // To track the current location/path
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Update selected link based on the current location.pathname
    setIsSelected(location.pathname);
  }, [location]); // Runs every time location changes

  const [isSelected, setIsSelected] = useState(location.pathname); // Initialize with current pathname

  const goHome = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full md:px-[10%] flex flex-col justify-between items-center md:items-start bg-navy-blue text-white">
      {/* Logo and Home Button */}
      <div className={`flex items-center justify-between shadow-bottom-black md:shadow-none md:border-none ${isOpen ? 'border-b-2 border-solid border-bright-yellow' : ''} w-full py-4`}>
        <div onClick={goHome} className="flex items-center cursor-pointer">
          <img src={Logo} alt="Logo" className="w-[64px] h-[64px]" />
          <h1 className="text-xl lg:text-3xl text-white font-bold text-shadow-black ml-2">
            World Wide<br /> Strategic Alliances
          </h1>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden px-4" onClick={toggleMenu}>
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} className="text-2xl cursor-pointer text-white" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-2xl cursor-pointer text-white" />
          )}
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`${
          isOpen ? 'flex z-50 fixed bg-navy-blue top-[11.5%] w-full' : 'hidden'
        } md:hidden flex-col text-md gap-4 py-4 justify-center items-center transition-all duration-500 ease-in-out`}
      >
        <Link
          to="/"
          className={`text-white rounded-full px-4 py-2 ${isActive('/') ? 'border-b-4 border-light-blue text-navy-blue' : ''}`}
          onClick={() => closeMenu()}
        >
          HOME
        </Link>
        <Link
          to="/ltl"
          className={`text-white rounded-full px-4 py-2 ${isActive('/ltl') ? 'border-b-4 border-light-blue text-navy-blue' : ''}`}
          onClick={() => closeMenu()}
        >
          LTL FREIGHT SHIPPING
        </Link>
        <Link
          to="/truckload-service"
          className={`text-white rounded-full px-4 py-2 ${isActive('/truckload-service') ? 'border-b-4 border-light-blue text-navy-blue' : ''}`}
          onClick={() => closeMenu()}
        >
          TRUCKLOAD SERVICE
        </Link>
        <Link
          to="/trucking-solution"
          className={`text-white rounded-full px-4 py-2 ${isActive('/trucking-solution') ? 'border-b-4 border-light-blue text-navy-blue' : ''}`}
          onClick={() => closeMenu()}
        >
          COMPLETE TRUCKING SOLUTION
        </Link>
        <Link
          to="/ecommerce"
          className={`text-white rounded-full px-4 py-2 ${isActive('/ecommerce') ? 'border-b-4 border-light-blue text-navy-blue' : ''}`}
          onClick={() => closeMenu()}
        >
          E-COMMERCE
        </Link>
        <Link
          to="/about"
          className={`text-white rounded-full px-4 py-2 ${isActive('/about') ? 'border-b-4 border-light-blue text-navy-blue' : ''}`}
          onClick={() => closeMenu()}
        >
          ABOUT
        </Link>
        <Link
          to="/contact"
          className={`text-white rounded-full px-4 py-2 ${isActive('/contact') ? 'border-b-4 border-light-blue text-navy-blue' : ''}`}
          onClick={() => closeMenu()}
        >
          CONTACT US
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex md:flex-row gap-8 items-center justify-start text-nowrap text-md w-full mb-2">
        <Link
          to="/"
          className={`text-white p-2 hover:border-b border-light-blue border-solid ${isActive('/') ? 'border-b-4 border-light-blue text-navy-blue' : ''}`}
        >
          HOME
        </Link>
        <Link
          to="/ltl"
          className={`text-white p-2 hover:border-b border-light-blue border-solid ${isActive('/ltl') ? 'border-b-4 border-light-blue text-navy-blue' : ''}`}
        >
          LTL FREIGHT SHIPPING
        </Link>
        <Link
          to="/truckload-service"
          className={`text-white p-2 hover:border-b border-light-blue border-solid ${isActive('/truckload-service') ? 'border-b-4 border-light-blue text-navy-blue' : ''}`}
        >
          TRUCKLOAD SERVICE
        </Link>
        <Link
          to="/trucking-solution"
          className={`text-white p-2 hover:border-b border-light-blue border-solid ${isActive('/trucking-solution') ? 'border-b-4 border-light-blue text-navy-blue' : ''}`}
        >
          COMPLETE TRUCKING SOLUTION
        </Link>
        <Link
          to="/ecommerce"
          className={`text-white p-2 hover:border-b border-light-blue border-solid ${isActive('/ecommerce') ? 'border-b-4 border-light-blue text-navy-blue' : ''}`}
        >
          E-COMMERCE
        </Link>
        <Link
          to="/about"
          className={`text-white p-2 hover:border-b border-light-blue border-solid ${isActive('/about') ? 'border-b-4 border-light-blue text-navy-blue' : ''}`}
        >
          ABOUT
        </Link>
        <Link
          to="/contact"
          className={`text-white p-2 hover:border-b border-light-blue border-solid ${isActive('/contact') ? 'border-b-4 border-light-blue text-navy-blue' : ''}`}
        >
          CONTACT US
        </Link>
      </div>
    </header>
  );
}

export default Header;