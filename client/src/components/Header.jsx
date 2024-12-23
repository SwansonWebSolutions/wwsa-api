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
    <header className="lg:px-[10%] flex flex-col justify-between items-center lg:items-start bg-navy-blue text-white">
      {/* Logo and Home Button */}
      <div className={`flex items-center justify-between shadow-bottom-black lg:shadow-none lg:border-none border-b-2 border-solid border-light-blue w-full py-4`}>
        <div onClick={goHome} className="flex items-center cursor-pointer">
          <img src={Logo} alt="Logo" className="w-[64px] h-[64px]" />
          <h1 className="text-xl lg:text-3xl text-white font-bold text-shadow-black ml-2">
            World Wide<br /> Strategic Alliances
          </h1>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden px-4" onClick={toggleMenu}>
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
          isOpen ? 'flex z-20 bg-navy-blue top-[9%] w-full' : 'hidden'
        } lg:hidden border-solid border-b-2 border-light-blue flex-col text-md gap-4 py-4 justify-center items-center transition-all duration-500 ease-in-out`}
      >
        <Link
          to="/"
          className={`text-white rounded-full px-4 py-2 ${isActive('/') ? 'border-b border-light-blue text-navy-blue' : ''}`}
          onClick={() => closeMenu()}
        >
          HOME
        </Link>
        <Link
          to="/ltl"
          className={`text-white rounded-full px-4 py-2 ${isActive('/ltl') ? 'border-b border-light-blue text-navy-blue' : ''}`}
          onClick={() => closeMenu()}
        >
          LTL FREIGHT SHIPPING
        </Link>
        <Link
          to="/truckload-service"
          className={`text-white rounded-full px-4 py-2 ${isActive('/truckload-service') ? 'border-b border-light-blue text-navy-blue' : ''}`}
          onClick={() => closeMenu()}
        >
          TRUCKLOAD SERVICE
        </Link>
        <Link
          to="/complete-trucking-solution"
          className={`text-white rounded-full px-4 py-2 ${isActive('/complete-trucking-solution') ? 'border-b border-light-blue text-navy-blue' : ''}`}
          onClick={() => closeMenu()}
        >
          COMPLETE TRUCKING SOLUTION
        </Link>
        <Link
          to="/ecommerce"
          className={`text-white rounded-full px-4 py-2 ${isActive('/ecommerce') ? 'border-b border-light-blue text-navy-blue' : ''}`}
          onClick={() => closeMenu()}
        >
          E-COMMERCE
        </Link>
        <Link
          to="/about"
          className={`text-white rounded-full px-4 py-2 ${isActive('/about') ? 'border-b border-light-blue text-navy-blue' : ''}`}
          onClick={() => closeMenu()}
        >
          ABOUT
        </Link>
        <Link
          to="/contact"
          className={`text-white rounded-full px-4 py-2 ${isActive('/contact') ? 'border-b border-light-blue text-navy-blue' : ''}`}
          onClick={() => closeMenu()}
        >
          CONTACT US
        </Link>
      </div>

      {/* Desktop Navigation Links */}
<div className="hidden lg:flex flex-wrap items-center justify-start text-md mb-2">
  <Link
    to="/"
    className={`text-white p-2 hover:border-b border-light-blue border-solid whitespace-nowrap ${isActive('/') ? 'border-b border-light-blue text-navy-blue' : ''}`}
  >
    HOME
  </Link>
  <Link
    to="/ltl"
    className={`text-white p-2 hover:border-b border-light-blue border-solid whitespace-nowrap ${isActive('/ltl') ? 'border-b border-light-blue text-navy-blue' : ''}`}
  >
    LTL FREIGHT SHIPPING
  </Link>
  <Link
    to="/truckload-service"
    className={`text-white p-2 hover:border-b border-light-blue border-solid whitespace-nowrap ${isActive('/truckload-service') ? 'border-b border-light-blue text-navy-blue' : ''}`}
  >
    TRUCKLOAD SERVICE
  </Link>
  <Link
    to="/complete-trucking-solution"
    className={`text-white p-2 hover:border-b border-light-blue border-solid whitespace-nowrap ${isActive('/complete-trucking-solution') ? 'border-b border-light-blue text-navy-blue' : ''}`}
  >
    COMPLETE TRUCKING SOLUTION
  </Link>
  <Link
    to="/ecommerce"
    className={`text-white p-2 hover:border-b border-light-blue border-solid whitespace-nowrap ${isActive('/ecommerce') ? 'border-b border-light-blue text-navy-blue' : ''}`}
  >
    E-COMMERCE
  </Link>
  <Link
    to="/about"
    className={`text-white p-2 hover:border-b border-light-blue border-solid whitespace-nowrap ${isActive('/about') ? 'border-b border-light-blue text-navy-blue' : ''}`}
  >
    ABOUT
  </Link>
  <Link
    to="/contact"
    className={`text-white p-2 hover:border-b border-light-blue border-solid whitespace-nowrap ${isActive('/contact') ? 'border-b border-light-blue text-navy-blue' : ''}`}
  >
    CONTACT US
  </Link>
</div>

    </header>
  );
}

export default Header;