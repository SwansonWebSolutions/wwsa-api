import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../images/wwsa.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState('home');

  useEffect(() => {
  }, [isSelected]); 
  const goHome = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSelected = (link) => {
    setIsSelected(link);
    if (window.innerWidth < 768) closeMenu(); // Close menu on mobile after selecting a link
  };

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
          className={`text-white rounded-full px-4 py-2`}
          onClick={() => handleSelected('home')}
        >
          HOME
        </Link>
        <Link
          to="/ltl"
          className={`text-white rounded-full px-4 py-2`}
          onClick={() => handleSelected('ltl')}
        >
          LTL FREIGHT SHIPPING
        </Link>
        <Link
          to="/truckload-service"
          className={`text-white rounded-full px-4 py-2`}
          onClick={() => handleSelected('truckload-service')}
        >
          TRUCKLOAD SERVICE
        </Link>
        <Link
          to="/trucking-solution"
          className={`text-white rounded-full px-4 py-2`}
          onClick={() => handleSelected('trucking-solution')}
        >
          COMPLETE TRUCKING SOLUTION
        </Link>
        <Link
          to="/ecommerce"
          className={`text-white rounded-full px-4 py-2 `}
          onClick={() => handleSelected('ecommerce')}
        >
          E-COMMERCE
        </Link>
        <Link
          to="/about"
          className={`text-white rounded-full px-4 py-`}
          onClick={() => handleSelected('about')}
        >
          ABOUT
        </Link>
        <Link
          to="/contact"
          className={`text-white rounded-full px-4 py-2 `}
          onClick={() => handleSelected('contact')}
        >
          CONTACT US
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div
        className="hidden md:flex md:flex-row gap-8 items-center justify-start text-nowrap text-md w-full mb-2"
      >
        <Link
          to="/"
          className={`text-white p-2 hover:border-b border-light-blue border-solid ${isSelected === 'home' ? ' border-b border-light-blue border-solid text-navy-blue animate-slideInRight duration-300 ease-in' : ''}`}
          onClick={() => handleSelected('home')}
        >
          HOME
        </Link>
        <Link
          to="/ltl"
          className={`text-white p-2 hover:border-b border-light-blue border-solid ${isSelected === 'ltl' ? ' border-b border-light-blue border-solid text-navy-blue' : ''}`}
          onClick={() => handleSelected('ltl')}
        >
          LTL FREIGHT SHIPPING
        </Link>
        <Link
          to="/truckload-service"
          className={`text-white p-2 hover:border-b border-light-blue border-solid ${isSelected === 'truckload-service' ? 'border-b border-light-blue border-solid text-navy-blue' : ''}`}
          onClick={() => handleSelected('truckload-service')}
        >
          TRUCKLOAD SERVICE
        </Link>
        <Link
          to="/trucking-solution"
          className={`text-white p-2 hover:border-b border-light-blue border-solid ${isSelected === 'trucking-solution' ? ' border-b border-light-blue border-solid text-navy-blue' : ''}`}
          onClick={() => handleSelected('trucking-solution')}
        >
          COMPLETE TRUCKING SOLUTION
        </Link>
        <Link
          to="/ecommerce"
          className={`text-white p-2 hover:border-b border-light-blue border-solid ${isSelected === 'ecommerce' ? 'border-b border-light-blue border-solid text-navy-blue' : ''}`}
          onClick={() => handleSelected('ecommerce')}
        >
          E-COMMERCE
        </Link>
        <Link
          to="/about"
          className={`text-white p-2 hover:border-b border-light-blue border-solid ${isSelected === 'about' ? 'border-b border-light-blue border-solid text-navy-blue' : ''}`}
          onClick={() => handleSelected('about')}
        >
          ABOUT
        </Link>
        <Link
          to="/contact"
          className={`text-white p-2 hover:border-b border-light-blue border-solid ${isSelected === 'contact' ? 'border-b border-light-blue border-solid text-navy-blue' : ''}`}
          onClick={() => handleSelected('contact')}
        >
          CONTACT US
        </Link>
      </div>
    </header>
  );
}

export default Header;