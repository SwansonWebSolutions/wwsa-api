import React, { useEffect, useRef, useState } from 'react';

function EmailFormPage() {
  const [isInView, setIsInView] = useState(false);
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
  const [selectedOptions, setSelectedOptions] = useState([]); // State to store selected options
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

  return (
    <div
      ref={formRef}
      className="relative top-1/2 md:top-24 flex flex-col lg:flex-row gap-4 bg-subtle-blue text-white p-4 shadow-full-black rounded-md md:pt-4 w-[90%] md:w-[75%]"
    >
      <div className="flex flex-col gap-2 lg:w-[40%] text-white">
        <h1 className="text-3xl">Let's talk about your shipping needs!</h1>
        <span className="text-lg font-thin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-[60%]">
        <div className="flex flex-col lg:flex-row gap-4">
          <section className="flex flex-col w-full">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="text-black rounded-md p-1"
            />
          </section>
          <section className="flex flex-col w-full">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
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

        <div className="flex flex-col lg:flex-row gap-4">
          <section className="flex flex-col w-full">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleInputChange}
              className="text-black rounded-md p-1"
            />
          </section>

          <section className="flex flex-col w-full">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleInputChange}
              className="text-black rounded-md p-1"
            />
          </section>
        </div>

        {/* Multi-select field */}
        <section className="flex flex-col w-full">
          <label htmlFor="services">Which services are you interested in?</label>
          <select
            name="services"
            id="services"
            multiple
            value={selectedOptions}
            onChange={handleSelectChange}
            className="text-black rounded-md p-1"
          >
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
            <option value="service3">Service 3</option>
            <option value="service4">Service 4</option>
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
    </div>
  );
}

export default EmailFormPage;
