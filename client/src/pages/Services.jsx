import React from 'react'

function Services({title, description, image}) {
  return (
    <div className='flex bg-subtle-blue p-4 rounded-md'>
      <div className='flex flex-col gap-2'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <img src={image} alt="" />
      </div>

    </div>
  )
}

export default Services