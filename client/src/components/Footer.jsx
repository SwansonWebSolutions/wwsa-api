import React from 'react'

function Footer() {
  return (
      <footer className="bg-gray-800 flex flex-col border-solid border-t-8 border-gray-300 p-4 text-white">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl lg:font-md font-bold">World Wide Strategic Alliances</h1>
            <p className='text-xl lg:text-sm'>© 2024 World Wide Strategic Alliances</p>
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