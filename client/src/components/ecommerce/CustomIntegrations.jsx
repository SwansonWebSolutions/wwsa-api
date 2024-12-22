import React from 'react';

const CustomIntegrations = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <h1 className="text-navy-blue text-3xl md:text-4xl font-bold mb-6 text-center">
          Custom Integrations and Unsupported Online Stores
        </h1>
        <p className="text-gray text-lg leading-relaxed mb-8 text-center">
          When off-the-shelf solutions don't work for your infrastructure, or if your online store is currently not supported, we offer several custom solutions.
        </p>

        {/* Solutions List */}
        <div className="bg-light-gray p-6 rounded-lg shadow-lg">
          <h2 className="text-light-blue text-2xl font-semibold mb-4">
            Custom Solutions
          </h2>
          <ul className="list-disc list-inside text-gray text-lg space-y-4">
            <li>
              <strong>Webhooks:</strong> Integrate any shopping cart by providing three custom programmed URLs to our software.
            </li>
            <li>
              <strong>REST API:</strong> Obtain shipping rates and pull-push order information.
            </li>
            <li>
              <strong>CSV Batch Shipping:</strong> Create a shipment .csv batch file, upload, and shipments are done.
            </li>
            <li>
              <strong>ODBC Bridge:</strong> Using the WWSA network ODBC Bridge, synchronize order and shipment information between WWSA network PSCSHIP and an ODBC data source.
            </li>
          </ul>
        </div>

        {/* Additional Information */}
        <div className="mt-8 text-center">
          <p className="text-gray text-lg leading-relaxed">
            Current customers who are admin users can log in to our updated WWSA network system and, from the settings menu, access our eCommerce integration capabilities and self-help tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomIntegrations;
