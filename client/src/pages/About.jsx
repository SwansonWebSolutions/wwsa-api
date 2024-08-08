import React from 'react'
import USA from '../images/usa-banner.png'
import Flags from '../images/all-country-flags.png'

function About() {
  return (
    <div className='flex flex-col gap-4 text-xl pt-8'>
      <div>
        <div className='relative'>
          <img src={USA} alt="" className='object-cover w-full h-full'/>
          <h1 className='absolute inset-0 text-5xl md:text-7xl lg:text-8xl text-white flex items-center justify-center text-shadow font-parisienne'>We the people...</h1>
        </div>
        <div className='flex items-center justify-center '>
          <img src={Flags} alt="" className='w-[600px] h-[400px]'/>
        </div>
      </div>
        <div className='pl-8 flex flex-col gap-2'>
          <h2 className='text-3xl font-bold'>Mark Jackson</h2>
          <span className=' italic'>Founder and CEO</span>
        </div>
        <div className='pl-16'>
          <h2 className='text-2xl font-semibold'>Experience</h2>
          <span className=''>Lorem ipsum </span>
        </div>
        <div className='pl-16'>
          <h2 className='text-2xl font-semibold'>History</h2>
          <span>Lorem ipsum </span>
        </div>

    </div>
  )
}

export default About