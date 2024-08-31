import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
function ServiceCard({ number, title, description, icon}) {
  return (
    <div className='flex flex-col text-white bg-subtle-blue w-[49%] h-inherit p-4 border-solid border border-light-blue rounded-md hover:text-white hover:bg-black hover:bg-opacity-70 duration-500 ease-in-out'>
      <div className='flex justify-between items-center'>
        <FontAwesomeIcon icon={icon} className='size-6'/>
        <span className='text-5xl font-bold'>{number}</span>
      </div>
      <div className='flex flex-col gap-4'>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to='/service1' className='border-solid border border-white w-fit py-1 px-2 space-x-2 rounded-md'>
          <span>Learn More</span>
          <FontAwesomeIcon icon={faExternalLink} className='size-4'/>
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard