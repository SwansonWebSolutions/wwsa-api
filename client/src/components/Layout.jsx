import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({children}) {
  return (
    <div className="relative bg-slate-200 bg-opacity-90 flex flex-col text-black">
      <Header/>
      <div className="flex flex-col min-h-screen">
        <div className='flex flex-col'>
          <div className="min-h-screen w-full">
              {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout