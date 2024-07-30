import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'

function Layout({children}) {
  return (
    <div className="flex flex-col px-0 lg:px-[15%] text-black">
      <div className='max-w-screen p-4 border-solid border-b-2 border-blue-500'>
        <img src=""  className="w-[150px] h-[50px]" alt="" />
        <h1>World Wide Strategic Alliances</h1>
      </div>
       <div className="flex flex-col min-h-screen">
        <div className='flex'>
          <Navbar />
            <div className="min-h-screen w-full p-4">
                {children}
            </div>
        </div>
          <Footer />
       </div>
    </div>
  )
}

export default Layout