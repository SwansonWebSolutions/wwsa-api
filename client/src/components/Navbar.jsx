import {useState} from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faBookAtlas, faHandsHelping, faClipboard, faCaretDown} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className='bg-white flex items-start lg:text-xl border-solid lg:border-y-4 border-gray-300 md:px-[6%] lg:px-[8%] xl:px-[12%]'>
        <Link to="/" className='w-full p-1 lg:py-2 flex flex-col justify-center items-center lg:flex-row lg:items-center lg:gap-2 hover:bg-soft-green hover:bg-opacity-60 duration-200 ease-in-out'>
            <FontAwesomeIcon icon={faHome} className='size-8 lg:size-6'/>
            <span className='max-lg:text-sm'>Home</span>
        </Link>
        <Link to="/about" className='w-full p-1  lg:py-2 flex flex-col justify-center items-center lg:flex-row  lg:items-center lg:gap-2 hover:bg-soft-green hover:bg-opacity-60 duration-200 ease-in-out'>
          <FontAwesomeIcon icon={faBookAtlas} className='size-8 lg:size-6'/>
          <span className='max-lg:text-sm'>About</span>
        </Link>
        <div className='w-full flex flex-col'>
          <div onClick={toggle} className='p-1 lg:py-2 flex flex-col justify-center items-center lg:flex-row lg:items-center lg:gap-2 hover:bg-soft-green hover:bg-opacity-60 duration-200 ease-in-out'>
            <FontAwesomeIcon icon={faHandsHelping} className='size-8 lg:size-6'/>
            <p className='flex items-center lg:gap-1 lg:pr-2'>
              <span className='max-lg:text-sm'>Services</span> 
              <FontAwesomeIcon icon={faCaretDown} className='max-lg:size-4'/>
            </p>
          </div>
          {isOpen ? (<div className='relative italic text-md text-norwap flex flex-col p-2'>
            <Link to="/services" className='w-full cursor-pointer md:flex md:justify-end md:items-center md:gap-2 hover:bg-soft-green hover:bg-opacity-60 duration-200 ease-in-out'>
              <span className='max-lg:text-sm'>Service 1</span>
            </Link>
            <Link to="/services" className='w-full cursor-pointer md:flex md:justify-end md:items-center md:gap-2 hover:bg-soft-green hover:bg-opacity-60 duration-200 ease-in-out'>
              <span className='max-lg:text-sm '>Service 2</span>
            </Link>
            <Link to="/services" className='w-full cursor-pointer  md:flex md:justify-end md:items-center md:gap-2 hover:bg-soft-green hover:bg-opacity-60 duration-200 ease-in-out'>
              <span className='max-lg:text-sm'>Service 3</span>
            </Link>
          </div>) : (<></>)}

        </div>
        
        <Link to="/contact" className='w-full p-1  lg:py-2 flex flex-col justify-center items-center lg:flex-row lg:items-center lg:gap-2 hover:bg-soft-green hover:bg-opacity-60 duration-200 ease-in-out'>
          <FontAwesomeIcon icon={faClipboard} className='size-8 lg:size-6'/>
          <span className='max-lg:text-sm '>Contact</span>
        </Link>
    </div>
  )
}

export default Navbar