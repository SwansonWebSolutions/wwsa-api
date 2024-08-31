import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import Logo from '../images/poi.png'
function Header() {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }

  return (
    <header className='absolute top-0 z-10 w-full flex justify-between items-center py-4 bg-gray-800 bg-opacity-50 text-white md:px-[6%] lg:px-[8%] xl:px-[12%]'>
      <div onClick={goHome} className='flex h-[64px] cursor-pointer'>
        <img src={Logo} alt="" className='w-[64px] h-[64px]'/>
        <h1 className='text-xl lg:text-3xl text-white font-bold text-shadow-black'>World Wide<br/> Strategic Alliances</h1>
      </div>
      <Navbar/>
    </header>
  )
}

export default Header