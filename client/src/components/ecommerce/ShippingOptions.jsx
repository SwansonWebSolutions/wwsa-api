import React from 'react';
import DHL from '../../images/ecommerce-dhl.png'
import DropShipping from '../../images/ecommerce-drop.png'

const ShippingOptions = () => (
    <div className="bg-white py-8 px-[10%] flex flex-col gap-8 justify-center">
        {/* Drop Shipments Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
                <img src={DropShipping} alt="Drop Shipping Solution" className="object-cover h-48 w-48 md:h-60 md:w-60" />
            </div>
            <div className="flex flex-col w-full">
                <h2 className="font-rubik text-navy-blue text-xl md:text-2xl mb-4 text-center md:text-left">
                    DROP SHIPMENTS
                </h2>
                <p className="text-sm font-light mb-4 text-justify leading-relaxed">
                    Drop-Shipping through WWSA network Import Express allows inventory sourced from foreign vendors to be shipped directly to you or to your end customer. The savings produced by not having to maintain the inventories locally can be significant, especially for high-cost specialty products or parts.
                </p>
            </div>
        </div>

        {/* DHL Express Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
                <img src={DHL} alt="DHL Express On Demand Delivery" className="object-cover h-48 w-48 md:h-60 md:w-60" />
            </div>
            <div className="flex flex-col w-full">
                <h2 className="font-rubik text-navy-blue text-xl md:text-2xl mb-4 text-center md:text-left">
                    DHL EXPRESS
                </h2>
                <p className="text-sm font-light mb-4 text-justify leading-relaxed">
                    WWSA network Import Express has the only carrier that has the international capability to automatically message a shipper's receivers when the shipment is picked up and provide you with the ability to control how the shipment will be delivered to them. This helps the shipper avoid undelivered shipments and multiple delivery attempts, offering <strong>On Demand Delivery</strong> for greater flexibility and efficiency.
                </p>
            </div>
        </div>
    </div>
);

export default ShippingOptions;
