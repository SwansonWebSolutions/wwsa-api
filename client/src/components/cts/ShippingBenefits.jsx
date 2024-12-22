import React from 'react';

const ShippingBenefits = () => (
  <div className="bg-white p-8 shadow-lg">
    <h2 className="text-3xl font-semibold text-navy-blue text-center mb-8">
      What Are the Benefits to Shipping Through Worldwide Strategic Alliances?
    </h2>
    
    <div className='flex items-center justify-center'>
        <ul className='space-y-4'>
                {[
                    'Real-time shipment quoting, shipping, and tracking',
                    'Easily make and monitor your LTL shipments on our online shipping platform',
                    'Receive automatic email notification and alerts on your FTL shipments for full visibility',
                    'Get prompt responses to your calls and emails from our experienced customer service teams',
                    'Access to world-class Top Tier logistics companies Worldwide',
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
  </div>
);

export default ShippingBenefits;
