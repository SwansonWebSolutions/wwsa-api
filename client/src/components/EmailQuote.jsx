import React, { useState } from 'react';
import NightShipping from '../images/night-shipping.png';
import Spinner from './Loading';

function EmailQuote() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event) => {
    const options = event.target.options;
    const selectedValues = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);

    // Update the selected options state
    setSelectedOptions((prevOptions) => {
      // Create a Set to handle unique values and avoid duplicates
      const updatedOptions = new Set(prevOptions);
      selectedValues.forEach(value => updatedOptions.add(value));
      return Array.from(updatedOptions);
    });
  };

  const removeSelectedOption = (option) => {
    setSelectedOptions((prevOptions) => prevOptions.filter(o => o !== option));
  };

  const validateContent = () => {
    const { firstName, lastName, email, phone, company, title, message } = formData;
    console.log(formData);
    if (!firstName || !lastName || !email || !phone || !company || !title || !message) {
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
    const response = await fetch("/api/send-quote", {
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

    setLoading(false);
    setSuccess("Thank you. Your message has been received.");
    setError(null);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      title: '',
      message: '',
    });
    setSelectedOptions([]);
    // You can send the form data, including the selected options, to your server here
  };

  return (
    <div className="flex flex-col">
      <div className='w-full overflow-auto'>
        <img src={NightShipping} alt="" className='w-full h-[300px] object-cover' />
      </div>
      <div className="flex flex-col items-center gap-2 py-8 bg-white text-black">
        <h1 className="text-2xl font-rubik text-navy-blue">Request a Quote</h1>
        <span className="text-lg font-thin text-center max-w-[70%]">
          Complete our service intake form to streamline your logistics and distribution needs. Provide key details about your shipment, delivery preferences, and any special requirements. Our team will review your request and respond promptly to ensure efficient, reliable transportation solutions tailored to your business.
        </span>
      </div>

      {!loading ? (
      !success ? (<form onSubmit={handleSubmit} className="flex flex-col gap-2 bg-light-gray py-8 px-[15%]">
        {error && <div className="text-center text-red-700 text-xl">{error}</div>}
        <div className="flex flex-col lg:flex-row gap-4">

          <section className="flex flex-col w-full">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder='First Name'
              className="text-black p-2 border-2 border-navy-blue border-solid"
            />
          </section>
          <section className="flex flex-col w-full">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder='Last Name'
              className="text-black p-2 border-2 border-navy-blue border-solid"
            />
          </section>
        </div>

        <section className="flex flex-col w-full">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Email'
            className="text-black p-2 border-2 border-navy-blue border-solid"
          />
        </section>

        <section className="flex flex-col w-full">
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder='Telephone'
            className="text-black p-2 border-2 border-navy-blue border-solid"
          />
        </section>

        <section className="flex flex-col w-full">
          <input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder='Company'
            className="text-black p-2 border-2 border-navy-blue border-solid"
          />
        </section>

        <section className="flex flex-col w-full">
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder='Title'
            className="text-black p-2 border-2 border-navy-blue border-solid"
          />
        </section>

        {/* Multi-select field */}
        <section className="flex flex-col w-full">
          <label htmlFor="services">Which services are you interested in?</label>
          <select
            name="services"
            id="services"
            multiple
            value={selectedOptions}
            onChange={handleSelectChange}
            className="text-black p-2 border-2 border-navy-blue border-solid"
          >
            <option value="LTL Freight Shipping">LTL Freight Shipping</option>
            <option value="Truckload Service">Truckload Service</option>
            <option value="Complete Trucking Solution">Complete Trucking Solution</option>
            <option value="E-Commerce">E-Commerce</option>
          </select>
        </section>

        {/* Display selected services */}
        <section className="flex flex-col w-full mt-2">
          <label>Selected Services:</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedOptions.map((option) => (
              <div key={option} className="flex items-center gap-2 bg-light-blue text-white rounded-md p-2">
                <span>{option}</span>
                <button
                  type="button"
                  onClick={() => removeSelectedOption(option)}
                  className="text-red-500 hover:text-red-700"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col w-full">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="7"
            value={formData.message}
            onChange={handleInputChange}
            className="text-black p-2 border-2 border-navy-blue border-solid"
          ></textarea>
        </section>
        <section>
          <button type="submit" className='border-solid border-2 border-navy-blue p-2 hover:bg-navy-blue hover:text-white duration-200 ease-in'>Submit</button>
        </section>
      </form>) : (
        <div className="text-center text-green-700 text-xl h-[300px]">
          {success}
          
        </div>
      )
      ) : (
        <Spinner message="Please wait while your message is being sent!"/>
      )}
    </div>
  );
}

export default EmailQuote;