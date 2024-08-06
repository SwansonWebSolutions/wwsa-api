import React from 'react'

function Header() {

  const message = () => {
    console.log("Contact Sales")
  }

  return (
    
    <div className='flex justify-between p-4 bg-gray-800 text-white'>
      <div className='flex flex-col'>
        <img src="" alt="" className='w-[150px] h-[50px]'/>
        <h1 className='text-2xl text-white font-bold text-shadow-black'>World Wide Strategic Alliances</h1>
      </div>
      <div className='flex justify-start items-end'>
        <button onClick={message} className='text-xl font-semibold py-1 px-4 bg-soft-green rounded-md'>Contact Sales</button>
      </div>
    </div>
  )
}

export default Header