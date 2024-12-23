import React from 'react'
import ServiceHeaderSection from '../components/ServiceHeaderSection'
import TruckloadNetworks from '../components/cts/TruckloadNetworks'
import ShippingBenefits from '../components/cts/ShippingBenefits'
import TruckingServicesOptions from '../components/cts/TruckingServiceOptions'
import EmailMessage from '../components/EmailMessage'
import { Helmet } from 'react-helmet'
import Trucks from '../images/trucks.jpg'
function CompleteTruckingSolution() {
  return (
    <>
    <Helmet>
      <title>Complete Trucking Solution - WWSA</title>
      <meta name="description" content="Discover WWSA's complete trucking solution offering affordable, reliable delivery across the US and 220+ countries. Access diverse freight options and real-time tracking." />
      <link rel="canonical" href="https://www.wws-alliances.org/complete-trucking-solution" />
      <meta name="keywords" content="trucking, solution, shipping, logistics, ecommerce, international trade, freight solutions" />
    </Helmet>
    <div className='bg-navy-blue'>
        <ServiceHeaderSection
            title="Complete Trucking Solution"
            subtitle="We provide a complete trucking solution for all your needs"
            description="Worldwide Strategic Alliances ”WWSA” network enables digital retailers of any size to provide their customers affordable, reliable, and fast delivery service around the US and to more than 220 countries and territories."
            linkText="Contact Us"
            linkTo="/contact"
            imageSrc={Trucks}
            imageAlt="Truck on the road"
        />
        <TruckloadNetworks />
        <ShippingBenefits />
        <TruckingServicesOptions />
        <EmailMessage />
    </div>
    </>
  )
}

export default CompleteTruckingSolution