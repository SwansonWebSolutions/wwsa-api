import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faBookAtlas} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className='flex flex-col gap-4 text-2xl p-4 border-r-4'>
        <Link to="/" className='invisible hidden md:flex md:justify-center md:items-center md:gap-2 lg:visible'>
            <FontAwesomeIcon icon={faHome} size=''/>
            <span>Home</span>
        </Link>
        <Link to="/about" className='invisible hidden md:flex md:justify-center md:items-center md:gap-2 lg:visible'>
          <FontAwesomeIcon icon={faBookAtlas} size=''/>
          <span>About</span>
        </Link>
    </div>
  )
}

export default Navbar