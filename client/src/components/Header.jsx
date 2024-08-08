import React from 'react'

function Header() {

  const message = () => {
    console.log("Contact Sales")
  }

  return (
    
    <div className='flex justify-between p-4 bg-gray-800 text-white md:px-[6%] lg:px-[8%] xl:px-[12%]'>
      <div className='flex flex-col'>
        <img src="" alt="" className='w-[150px] h-[50px]'/>
        <h1 className='text-2xl text-white font-bold text-shadow-black'>World Wide Strategic Alliances</h1>
      </div>
    </div>
  )
}

export default Header