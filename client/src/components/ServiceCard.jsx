import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
function ServiceCard({ number, title, description, icon}) {
  return (
    <div className='flex flex-col gap-4 text-light-blue lg:w-[49%] h-inherit p-4 border-solid border-2 border-light-blue rounded-md hover:text-white hover:bg-black hover:bg-opacity-90 duration-500 ease-in-out'>
      <div className='flex justify-between items-center'>
        <FontAwesomeIcon icon={icon} className='size-6'/>
        <h2 className='text-3xl text-white'>{title}</h2>
        <span className='text-5xl font-bold'>{number}</span>
      </div>
      <div className='flex flex-col gap-4'>
        <p>{description}</p>
        <Link to='/service1' className='border-solid border text-white border-light-blue w-fit py-1 px-2 space-x-2 rounded-md hover:bg-light-blue hover:text-black duration-300 ease-in-out'>
          <span>Learn More</span>
          <FontAwesomeIcon icon={faExternalLink} className='size-4'/>
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard