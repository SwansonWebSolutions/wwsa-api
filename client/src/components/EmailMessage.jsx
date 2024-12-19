import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Spinner from './Loading';

function EmailForm() {
  const [error, setError] = useState()
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateContent = () => {
    const { fullname, email, phone, message } = formData;
    if (!fullname || !email || !phone || !message) {
      setError("Please fill in all required fields.");
      return true;
    } else {
      setError(null);
      return false;
    }
  };  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(validateContent()) return;
    setError(null);
    setLoading(true);
    // Handle form submission
    const response = await fetch("/api/send-message", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({formData})
    })

    const data = await response.json();
    console.log('Email sent:', data);

    if(!response.ok) {
      console.error('Error sending email:', response.statusText);
      setError(data.message);
      return;
    }

    setLoading(false);
    setError(null);
    setSuccess("Thank you. Your message has been received.");
    // You can send the form data, including the selected options, to your server here
  };


  return (
    <div className="flex flex-col gap-8 bg-light-gray text-black py-8">
      <div className=' flex justify-center'>
        <h2 className='text-2xl text-navy-blue text-subtle-blue font-semibold font-rubik'>Contact Us</h2>
      </div>
      <div className='flex flex-col-reverse gap-8 md:flex-row px-16'>
        <div className='flex flex-col gap-8 text-black md:w-1/2'>
          <h2 className='text-md text-navy-blue font-extralight font-rubik'>Logistics & Distribution Services</h2>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <FontAwesomeIcon icon={faPhone} size="lg" className='text-white bg-navy-blue p-2 rounded-full'/>
              <h3 className='text-gray text-md font-light'>+1 (818) 917-8941</h3>
            </div>
            <div className='flex items-center gap-4'>
              <FontAwesomeIcon icon={faEnvelope} size="lg" className='text-white bg-navy-blue p-2 rounded-full'/>
              <a href="mailto:info@wws-alliances.org" className='text-gray hover:text-navy-blue duration-300 ease-in '>info@wws-alliances.org</a>
            </div>
          </div>
        </div>
        {!loading ? (
          !success ? (
          <form onSubmit={handleSubmit} className='flex flex-col gap-2 md:w-1/2'>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <section className='border-solid border-2 border-navy-blue '>
              <input type="text" name="fullname" id="fullname" onChange={handleInputChange} className='text-navy-blue text-lg font-light w-full p-2 pl-4' placeholder='Name'/>
            </section>

            <section className='border-solid border-2 border-navy-blue '>
              <input type="text" name="email" id="email" onChange={handleInputChange} className='text-navy-blue text-lg font-light w-full p-2 pl-4' placeholder='Email'/>
            </section>

            <section className='border-solid border-2 border-navy-blue '>
              <input type="text" name="phone" id="phone" onChange={handleInputChange} className='text-navy-blue text-lg font-light w-full p-2 pl-4' placeholder='Telephone'/>
            </section>

            <section className='border-solid border-2 border-navy-blue flex flex-col w-full'>
              <textarea name="message" id="message" rows="7" onChange={handleInputChange} className="text-navy-blue text-lg font-light w-full p-2 pl-4" placeholder='Message'></textarea>
            </section>
            <section>
              <button type="submit" className='border-solid border-2 border-navy-blue p-2 hover:bg-navy-blue hover:text-white duration-200 ease-in'>Send Message</button>
            </section>
          </form>
          ) : (<div className='text-green-500 text-md'>{success}</div>)
          ) : (
            <Spinner message="Please wait while we send your message!"/>
          )}
        </div>
    </div>
  );
}

export default EmailForm;
