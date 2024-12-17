import React, { useEffect, useRef, useState } from 'react';

function SendMessage() {
    const [error, setError] = useState(null);
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


    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        // Handle form submission
        const response = await fetch("/api/send-email", {
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

        setSuccess("Thank you. Your message has been received.");
        // You can send the form data, including the selected options, to your server here
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

  return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-[60%]">
        <h2 className="text-2xl lg:text-md font-bold font-rubik text-light-blue">Contact Us</h2>

        <div className="flex flex-col lg:flex-row gap-4">
          <section className="flex flex-col w-full">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="text-black rounded-md p-1"
            />
          </section>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <section className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="text-black rounded-md p-1"
            />
          </section>

          <section className="flex flex-col w-full">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="text-black rounded-md p-1"
            />
          </section>
        </div>

        <section className="flex flex-col w-full">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="10"
            value={formData.message}
            onChange={handleInputChange}
            className="text-black rounded-md p-1"
          ></textarea>
        </section>

        {error && <div className="text-center bg-red-400 text-white text-xl rounded-md">{error}</div>}
        {success && <div className="text-center bg-green-400 text-white text-xl rounded-md">{success}</div>}

        <section>
          <button
            type="submit"
            className="bg-light-blue text-white text-shadow text-lg font-semibold rounded-md p-2 w-full hover:bg-blue-500 duration-200 ease-in"
          >
            Submit
          </button>
        </section>
      </form>
  )
}

export default SendMessage