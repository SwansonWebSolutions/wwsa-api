import {useState} from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faBookAtlas, faHandsHelping, faClipboard, faCaretDown} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className='bg-white flex items-start lg:text-xl border-solid lg:border-y-4 border-gray-300 md:px-[6%] lg:px-[8%] xl:px-[12%]'>
        <Link to="/" className='w-full p-1 lg:py-2 flex flex-col justify-center items-center lg:flex-row lg:items-center lg:gap-2 hover:bg-warm-coral hover:bg-opacity-60 duration-200 ease-in-out'>
            <FontAwesomeIcon icon={faHome} className='size-8 lg:size-6'/>
            <span className='max-lg:text-sm'>Home</span>
        </Link>
        <Link to="/about" className='w-full p-1  lg:py-2 flex flex-col justify-center items-center lg:flex-row  lg:items-center lg:gap-2 hover:bg-warm-coral hover:bg-opacity-60 duration-200 ease-in-out'>
          <FontAwesomeIcon icon={faBookAtlas} className='size-8 lg:size-6'/>
          <span className='max-lg:text-sm'>About</span>
        </Link>
        <div className="w-full relative flex flex-col">
          <div
            onClick={toggle}
            className="p-1 lg:py-2 flex flex-col justify-center items-center lg:flex-row lg:items-center lg:gap-2 hover:bg-warm-coral hover:bg-opacity-60 duration-200 ease-in-out cursor-pointer"
          >
            <FontAwesomeIcon icon={faHandsHelping} className="text-lg lg:text-xl" />
            <p className="flex items-center lg:gap-1 lg:pr-2">
              <span className="text-sm lg:text-base">Services</span>
              <FontAwesomeIcon icon={faCaretDown} className="text-sm lg:text-base" />
            </p>
          </div>
          {isOpen && (
            <div className="absolute top-full left-1/4 mt-2 bg-white shadow-lg z-20 italic text-md text-black flex flex-col p-2 rounded-lg">
              <Link
                to="/services/service1"
                className="w-full px-4 py-2 cursor-pointer hover:bg-warm-coral hover:bg-opacity-60 duration-200 ease-in-out"
              >
                <span className="text-sm lg:text-base">Service 1</span>
              </Link>
              <Link
                to="/services/service2"
                className="w-full px-4 py-2 cursor-pointer hover:bg-warm-coral hover:bg-opacity-60 duration-200 ease-in-out"
              >
                <span className="text-sm lg:text-base">Service 2</span>
              </Link>
              <Link
                to="/services/service3"
                className="w-full px-4 py-2 cursor-pointer hover:bg-warm-coral hover:bg-opacity-60 duration-200 ease-in-out"
              >
                <span className="text-sm lg:text-base">Service 3</span>
              </Link>
            </div>
          )}
        </div>
        
        <Link to="/contact" className='w-full p-1  lg:py-2 flex flex-col justify-center items-center lg:flex-row lg:items-center lg:gap-2 hover:bg-warm-coral hover:bg-opacity-60 duration-200 ease-in-out'>
          <FontAwesomeIcon icon={faClipboard} className='size-8 lg:size-6'/>
          <span className='max-lg:text-sm '>Contact</span>
        </Link>
    </div>
  )
}

export default Navbar