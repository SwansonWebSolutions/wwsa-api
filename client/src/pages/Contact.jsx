import React from 'react'
import EmailForm from '../components/EmailFormPage'
import Earth1280 from '../images/earth-1280.jpg'

function Contact() {
  return (
    <div 
      className='flex items-center justify-center h-screen max-w-full overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg'
      style={{backgroundImage: `url(${Earth1280})`}}
    >
      <EmailForm />
    </div>
  )
}

export default Contact