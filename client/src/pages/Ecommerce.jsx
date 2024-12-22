import React from 'react'
import { Link } from 'react-router-dom'
import Worker from '../images/ecommerce-worker.jpg'
import DHL from '../images/ecommerce-dhl.png'
import DropShipping from '../images/ecommerce-drop.png'

function Ecommerce() {
  return (
    <div className='bg-navy-blue'>
        <div className='flex justify-center gap-8 bg-navy-blue text-white pb-4 pt-12 px-[10%]'>
            <div className='w-1/2 h-fit'>
                <h1 className='text-5xl font-rubik'>Ecommerce</h1>
                <span className='text-light-gray text-sm italic'>It's never been easier to grow your ecommerce business anywhere in the world</span>
                <p className='block pt-8 font-light'>Worldwide Strategic Alliances ”WWSA” network enables digital retailers of any size to provide their customers affordable, reliable, and fast delivery service around the US and to more than 220 countries and territories. Using a combination of our <span className='text-light-blue font-semibold'>domestic and international express export and import shipping services</span>, we can create a complete logistics solution that's perfect for your ecommerce business.</p>
                <div className='pt-8'>
                    <Link to="/contact" className='bg-light-blue py-2 px-4 font-semibold border-solid border border-light-blue hover:bg-transparent duration-300 ease-in'>Contact Us</Link>
                </div>
            </div>
            <div className='flex h-fit'>
                <img src={Worker} alt="" className=' size-3/4 ml-auto' />
            </div>
        </div>

        <div className='bg-light-gray flex flex-col justify-center items-center py-10 px-[10%] shadow-lg'>
            <h2 className='font-rubik text-4xl text-navy-blue font-semibold mb-4'>
                Flexible Logistics Solutions
            </h2>
            <p className='text-gray-700 text-lg mb-6 text-center'>
                Our goal is to make it easy for retailers to sell merchandise, understand product entry requirements, and clear customs in the global marketplace.
            </p>
            <ul className='space-y-4'>
                <li className='flex items-start space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-navy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className='text-gray'>Integrate our low pricing directly with many storefront platforms including ShipStation and Magento</span>
                </li>
                <li className='flex items-start space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-navy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className='text-gray'>Minimize returned and lost packages through free international and domestic address verification</span>
                </li>
                <li className='flex items-start space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-navy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className='text-gray'>Free 24-hours tracking visibility for you and your customers</span>
                </li>
                <li className='flex items-start space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-navy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className='text-gray'>Free and easy daily pick-ups with no volume requirements</span>
                </li>
                <li className='flex items-start space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-navy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className='text-gray'>Free signature delivery verification, reducing false claims of undelivered packages</span>
                </li>
                <li className='flex items-start space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-navy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className='text-gray'>Optional value protection on all shipments - inbound and outbound</span>
                </li>
            </ul>
        </div>

        <div className='bg-white py-8 px-[10%]'>
            <div className='flex flex-col gap-8 justify-center'>
                <div className='flex items-center gap-8'>
                    <div className=''>
                        <img src={DropShipping} alt="Drop Shipping Solution" className='object-fit' />
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='font-rubik text-navy-blue text-2xl mb-4'>DROP SHIPMENTS</h2>
                        <p className='text-sm font-light block mb-4 text-justify leading-relaxed'>
                            Drop-Shipping through WWSA network Import Express allows inventory sourced from foreign vendors to be shipped directly to you or to your end customer. The savings produced by not having to maintain the inventories locally can be significant, especially for high-cost specialty products or parts.
                        </p>
                    </div>
                </div>

                <div className='flex items-center gap-8'>
                    <div className=''>
                        <img src={DHL} alt="DHL Express On Demand Delivery" className='' />
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='font-rubik text-navy-blue text-2xl mb-4'>DHL EXPRESS</h2>
                        <p className='text-sm font-light block mb-4 text-justify leading-relaxed'>
                            WWSA network Import Express has the only carrier that has the international capability to automatically message a shipper's receivers when the shipment is picked up and provide you with the ability to control how the shipment will be delivered to them. This helps the shipper avoid undelivered shipments and multiple delivery attempts, offering <strong>On Demand Delivery</strong> for greater flexibility and efficiency.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Ecommerce