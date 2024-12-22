import React from 'react';

const TruckingServicesOptions = () => (
  <div className="bg-light-gray p-8 shadow-lg px-[10%]">
    <h2 className="text-3xl font-semibold text-navy-blue text-center mb-8">
      Trucking Services Options
    </h2>

    <div className="grid md:grid-cols-2 gap-2 md:gap-6 grid-cols-1 md:grid-rows-2">
      {/* Full Truckload Option */}
      <div className="bg-light-gray p-6 rounded-lg border-solid border-2 border-navy-blue hover:bg-light-blue transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold text-navy-blue mb-4">Full Truckload</h3>
        <p className="text-gray-600">
          Worldwide Strategic Alliances' comprehensive truckload network gives you access to a broad range of equipment across the United States, including dry vans and flatbeds.
        </p>
      </div>

      {/* Partial Load Option */}
      <div className="bg-light-gray p-6 rounded-lg border-solid border-2 border-navy-blue hover:bg-light-blue transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold text-navy-blue mb-4">Partial Load</h3>
        <p className="text-gray-600">
          PTL is a cost-effective and flexible transportation solution that allows a more direct route for shipments that do not require a full truck.
        </p>
      </div>

      {/* Less-than-truckload (LTL) Option */}
      <div className="bg-light-gray p-6 rounded-lg border-solid border-2 border-navy-blue hover:bg-light-blue transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold text-navy-blue mb-4">Less-than-Truckload (LTL)</h3>
        <p className="text-gray-600">
          Pay for only the space you need with LTL. Our network offers an easy-to-use TMS system that allows you to shop all the major carriers at once, compare rates, and select the best option for your needs.
        </p>
      </div>

      {/* Specialized & Project Freight Option */}
      <div className="bg-light-gray p-6 rounded-lg border-solid border-2 border-navy-blue hover:bg-light-blue transition duration-300 ease-in-out">
        <h3 className="text-xl font-semibold text-navy-blue mb-4">Specialized & Project Freight</h3>
        <p className="text-gray-600">
          From beginning to end, depend on us to support your team on projects that need extra attention and specialized freight solutions.
        </p>
      </div>
    </div>
  </div>
);

export default TruckingServicesOptions;
