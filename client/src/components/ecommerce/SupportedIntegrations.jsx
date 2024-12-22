import React from 'react';
import { Link } from 'react-router-dom';
import SupportedIntegrationsImage from '../../images/supported-integrations.png';

const SupportedIntegrations = () => {
  return (
    <div className="bg-light-gray py-12 px-6 md:px-[10%]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-navy-blue text-2xl font-rubik md:text-4xl font-bold mb-6">
          Supported Integrations
        </h2>
        <p className="text-gray text-lg leading-relaxed mb-8">
          WWSA network offers a comprehensive selection of plug-and-play shopping cart integrations. Current customers can log in to our updated WWSA network Import Express system and access our eCommerce integration capabilities and self-help tools through the Settings menu.
        </p>
        <p className="text-gray text-lg leading-relaxed mb-12">
          Contact our <Link to="/contact" className="text-navy-blue font-semibold hover:underline">WWSA network Import Express International Help Desk</Link> for additional support.
        </p>
      </div>

      {/* Shopping Cart Integrations Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-5xl mx-auto">
        <h2 className="text-light-blue text-2xl font-semibold mb-4 text-center">
          Popular Shopping Cart Integrations
        </h2>
        <div>
            <img src={SupportedIntegrationsImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SupportedIntegrations;
