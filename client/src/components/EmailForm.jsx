import React, { useEffect, useRef, useState } from 'react';

function EmailForm() {
  const [isInView, setIsInView] = useState(false);
  const formRef = useRef(null);

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
      className="flex gap-4 bg-subtle-blue text-white p-4 m-8 shadow-full-black rounded-md"
    >
      <div className='flex flex-col gap-2 w-[40%] text-white'>
        <h1 className='text-3xl'>Let's talk about your shipping needs!</h1>
        <span className={`text-lg font-thin transition-opacity duration-1000 ${isInView ? 'animate-fadeInLeft' : 'opacity-0'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </div>

      <form action="" className='flex flex-col gap-2 w-[60%]'>
        <div className='flex gap-4'>
          <section className='flex flex-col w-full'>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" className="text-black rounded-md p-1" />
          </section>
          <section className='flex flex-col w-full'>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" className="text-black rounded-md p-1" />
          </section>
        </div>

        <div className='flex gap-4'>
          <section className='flex flex-col w-full'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="text-black rounded-md p-1" />
          </section>

          <section className='flex flex-col w-full'>
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" className="text-black rounded-md p-1" />
          </section>
        </div>

        <div className='flex gap-4'>
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
      </form>
    </div>
  );
}

export default EmailForm;
