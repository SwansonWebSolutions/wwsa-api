import React from 'react';

const TruckloadNetworks = () => (
    <div className='bg-light-gray py-16 px-[10%]'>
        <div className='max-w-7xl mx-auto text-center'>
            <h2 className='text-3xl font-semibold text-navy-blue text-center mb-8'>
                Comprehensive Truckload Networks
            </h2>
            <p className='text-lg mb-8 text-gray'>
                Our extensive truckload networks provide you with access to a broad range of equipment across the United States at competitive rates.
            </p>
            <p className="text-lg font-light text-gray leading-relaxed pb-8">
                We offer carrier rates and service options from dozens of national and local carriers to meet your shipping needs. We forecast price-per-mile rates to ensure our FTL (Full Truckload) quotes are aligned with current market conditions.                         WWSA companies also offer expedited domestic freight options for urgent, heavy packages. Additionally, we provide specialized freight options including:
            </p>
            
            <div className=" p-8 rounded-lg text-start">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="flex items-center mb-4">
                            <span className="bg-light-blue text-white rounded-full p-2 mr-4">
                            </span>
                            <h3 className="text-xl font-semibold text-navy-blue">RGN (Removable Gooseneck)</h3>
                        </div>
                        <p className="text-gray-600">Used for heavy loads like machinery, with a detachable rear section for loading and unloading.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="flex items-center mb-4">
                            <span className="bg-light-blue text-white rounded-full p-2 mr-4">
                            </span>
                            <h3 className="text-xl font-semibold text-navy-blue">Double Drop</h3>
                        </div>
                        <p className="text-gray-600">Ideal for oversized loads with extra height, offering two drops for maximum flexibility.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="flex items-center mb-4">
                            <span className="bg-light-blue text-white rounded-full p-2 mr-4">
                            </span>
                            <h3 className="text-xl font-semibold text-navy-blue">Gooseneck Trailer</h3>
                        </div>
                        <p className="text-gray-600">A heavy-duty trailer designed for towing large equipment, ideal for long-distance hauls.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="flex items-center mb-4">
                            <span className="bg-light-blue text-white rounded-full p-2 mr-4">
                            </span>
                            <h3 className="text-xl font-semibold text-navy-blue">Box Truck</h3>
                        </div>
                        <p className="text-gray-600">Versatile and easy to load, ideal for smaller shipments that require extra protection.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="flex items-center mb-4">
                            <span className="bg-light-blue text-white rounded-full p-2 mr-4">
                            </span>
                            <h3 className="text-xl font-semibold text-navy-blue">Specialized Freight</h3>
                        </div>
                        <p className="text-gray-600">Custom freight options for heavy or oversized loads that require specialized handling.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default TruckloadNetworks;

