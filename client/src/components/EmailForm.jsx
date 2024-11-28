import React, { useEffect, useRef, useState } from 'react';

function EmailForm() {
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState()
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    title: '',
    message: '',
  });
  const [selectedOptions, setSelectedOptions] = useState([]); // State to store selected options
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    // Handle form submission
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({formData, selectedOptions})
    })

    const data = await response.json();
    console.log('Email sent:', data);

    if(!response.ok) {
      console.error('Error sending email:', response.statusText);
      setError(data.message);
      return;
    }

    setSuccess("Thank you. Your message has been received.");
    // You can send the form data, including the selected options, to your server here
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.75, // Adjust this value to trigger the animation earlier or later
      }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={formRef}
      className="flex flex-col lg:flex-row gap-4 bg-subtle-blue text-white p-4 lg:mx-[10%] shadow-full-black rounded-md"
    >
      <div className='flex flex-col gap-2 lg:w-[40%] text-white'>
        <h1 className='text-3xl'>Let's talk about your shipping needs!</h1>
        <span className={`text-lg font-thin transition-opacity duration-1000 ${isInView ? 'animate-fadeInLeft' : 'opacity-0'}`}>
          Complete our service intake form to streamline your logistics and distribution needs. Provide key details about your shipment, delivery preferences, and any special requirements. Our team will review your request and respond promptly to ensure efficient, reliable transportation solutions tailored to your business.
        </span>
      </div>

      <form onSubmi={handleSubmit} className='flex flex-col gap-2 lg:w-[60%]'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <section className='flex flex-col w-full'>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" className="text-black rounded-md p-1" />
          </section>
          <section className='flex flex-col w-full'>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" className="text-black rounded-md p-1" />
          </section>
        </div>

        <div className='flex flex-col lg:flex-row gap-4'>
          <section className='flex flex-col w-full'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="text-black rounded-md p-1" />
          </section>

          <section className='flex flex-col w-full'>
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" className="text-black rounded-md p-1" />
          </section>
        </div>

        <div className='flex flex-col lg:flex-row gap-4'>
          <section className='flex flex-col w-full'>
            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="company" className="text-black rounded-md p-1" />
          </section>

          <section className='flex flex-col w-full'>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" className="text-black rounded-md p-1" />
          </section>
        </div>

        <section className='flex flex-col w-full'>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="10" className="text-black rounded-md p-1"></textarea>
        </section>
        <section>
          <button type="submit" className='p-4 text-xl text-subtle-blue bg-light-blue border-solid border border-light-blue rounded-md hover:bg-transparent hover:text-white duration-300 ease-in'>Send Message</button>
        </section>
      </form>
    </div>
  );
}

export default EmailForm;
