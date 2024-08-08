import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'

function Layout({children}) {
  return (
    <div className="bg-slate-200 bg-opacity-90 flex flex-col px-0 text-black">
      <Header/>
      <Navbar />
       <div className="flex flex-col min-h-screen">
        <div className='flex flex-col'>
          <div className="min-h-screen w-full lg:px-[8%] xl:px-[12%]">
              {children}
          </div>
        </div>
          <Footer />
       </div>
    </div>
  )
}

export default Layout