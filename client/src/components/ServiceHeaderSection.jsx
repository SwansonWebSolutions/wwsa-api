import React from 'react';
import { Link } from 'react-router-dom';

const ServiceHeaderSection = ({
    title = "Ecommerce",
    subtitle = "It's never been easier to grow your ecommerce business anywhere in the world",
    description = "Worldwide Strategic Alliances ”WWSA” network enables digital retailers of any size to provide their customers affordable, reliable, and fast delivery service around the US and to more than 220 countries and territories. Using a combination of our domestic and international express export and import shipping services, we can create a complete logistics solution that's perfect for your ecommerce business.",
    linkText = "Contact Us",
    linkTo = "/contact",
    imageSrc,
    imageAlt = "Ecommerce Worker",
}) => (
    <div className='flex flex-col md:flex-row justify-center gap-8 bg-navy-blue text-white pb-4 pt-12 px-4 md:px-[10%]'>
        {/* Text Content */}
        <div className='w-full md:w-1/2 h-fit'>
            <h1 className='text-3xl md:text-5xl font-rubik'>{title}</h1>
            <span className='text-light-gray text-sm italic block mt-2'>
                {subtitle}
            </span>
            <p className='block pt-6 md:pt-8 font-light'>
                {description}
            </p>
            <div className='pt-6 md:pt-8'>
                <Link
                    to={linkTo}
                    className='bg-light-blue py-2 px-4 font-semibold border-solid border border-light-blue hover:bg-transparent duration-300 ease-in inline-block'
                >
                    {linkText}
                </Link>
            </div>
        </div>
        {/* Image */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
            <img
                src={imageSrc}
                alt={imageAlt}
                className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover'
            />
        </div>
    </div>
);

export default ServiceHeaderSection;