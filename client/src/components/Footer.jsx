import React from 'react'
import Logo from '../images/poi.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
      <footer className="bg-gray-800 flex flex-col border-solid p-4 text-white md:px-[6%] lg:px-[8%] xl:px-[12%]">
        <div className="flex flex-col justify-between gap-4">
          <div className='flex gap-2'>
            <img src={Logo} alt="" className='w-[64px] h-[64px]' />
            <div>
              <h1 className="text-2xl lg:text-md font-bold">World Wide Strategic Alliances</h1>
            </div>
          </div>
          <div>
            <h1 className="text-xl lg:text-md font-bold">Contact Us</h1>
            <div className='flex flex-col font-thin'>
              <span className='text-xl lg:text-sm'>+1 (818) 917-8941</span>
              <span className='text-xl lg:text-sm'>info@wws-alliances.org</span>
            </div>
          </div>
          <div className='text-center'>
            <p className='text-xl lg:text-sm font-light'>© 2024 World Wide Strategic Alliances</p>
          </div>
        </div>
      </footer>       
  )
}

export default Footer