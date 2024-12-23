import React from 'react';

const LogisticsSolutions = () => (
    <div className='bg-light-gray flex flex-col justify-center items-center py-10 px-[10%] shadow-lg'>
        <h2 className='font-rubik text-4xl text-navy-blue text-center lg:text-start lg font-semibold mb-4'>
            Flexible Logistics Solutions
        </h2>
        <p className='text-gray-700 text-lg mb-6 text-center'>
            Our goal is to make it easy for retailers to sell merchandise, understand product entry requirements, and clear customs in the global marketplace.
        </p>
        <ul className='space-y-4'>
            {[
                'Integrate our low pricing directly with many storefront platforms including ShipStation and Magento',
                'Minimize returned and lost packages through free international and domestic address verification',
                'Free 24-hours tracking visibility for you and your customers',
                'Free and easy daily pick-ups with no volume requirements',
                'Free signature delivery verification, reducing false claims of undelivered packages',
                'Optional value protection on all shipments - inbound and outbound',
            ].map((text, index) => (
                <li key={index} className='flex items-start space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-navy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className='text-gray'>{text}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default LogisticsSolutions;
