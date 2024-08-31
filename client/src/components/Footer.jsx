import React from 'react'
import Logo from '../images/poi.png'
function Footer() {
  return (
      <footer className="bg-gray-800 flex flex-col border-solid p-4 text-white md:px-[6%] lg:px-[8%] xl:px-[12%]">
        <div className="flex justify-between">
          <div className='flex gap-2'>
            <img src={Logo} alt="" className='w-[64px] h-[64px]' />
            <div>
              <h1 className="text-2xl lg:font-md font-bold">World Wide Strategic Alliances</h1>
              <p className='text-xl lg:text-sm'>© 2024 World Wide Strategic Alliances</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl lg:font-md font-bold">Contact Us</h1>
            <span className='text-xl lg:text-sm'>+1 (818) 917-8941</span>
          </div>
        </div>
      </footer>       
  )
}

export default Footer