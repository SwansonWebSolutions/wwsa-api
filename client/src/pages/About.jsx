import React from 'react'

function About() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-5xl text-center'>Slogan, Mission Statement, or Goal goes here.</h1>
      <div className='w-[100%] bg-black h-2' />
      <div className='pl-8 flex flex-col gap-2 border-solid border-2 border-blue-500'>
        <h2 className='text-3xl font-bold'>Mark Jackson</h2>
        <span className=' italic'>Chief Executive Officer</span>
      </div>
      <h2 className='text-2xl font-semibold'>History of the CEO</h2>
      <span>Lorem ipsum </span>
      <h2></h2>
      <span>Lorem ipsum </span>

    </div>
  )
}

export default About