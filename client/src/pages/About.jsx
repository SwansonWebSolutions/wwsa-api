import React from 'react'

function About() {
  return (
    <div className='flex flex-col gap-4 text-xl'>
      <h1 className='text-5xl text-center'>Slogan, Mission Statement, or Goal goes here.</h1>
      <div className='mx-auto w-[50%] bg-black h-2' />
        <div className='pl-8 flex flex-col gap-2'>
          <h2 className='text-3xl font-bold'>Mark Jackson</h2>
          <span className=' italic'>Chief Executive Officer</span>
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