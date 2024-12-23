import React from 'react'
import ServiceHeaderSection from '../components/ServiceHeaderSection'
import TruckloadInformation from '../components/ts/TruckloadInformation'
import EmailMessage from '../components/EmailMessage'
import TruckloadServiceImage from '../images/truckload-service.jpg'
import { Helmet } from 'react-helmet'

function TruckloadService() {
  return (
    <>
    <Helmet>
      <title>Truckload Service - WWSA</title>
      <meta name="description" content="Experience easy truckload shipping with WWSA's extensive network and flexible solutions. Gain access to peak season capacity, reliable service, and strategic partnerships." />
      <link rel="canonical" href="https://www.wws-alliances.org/truckoad-service" />
      <meta name="keywords" content="truckload, commerce, shipping, logistics, international trade, freight solutions" />
    </Helmet>
    <div>
        <ServiceHeaderSection
            title="Truckload Service"
            subtitle='Welcome to the new standard in truckload service'
            description='Find out how effortless truckload shipping can be when you partner with a
            team that prioritizes your peace of mind. We at Worldwide Strategic Alliances
            focus on delivering exceptional service, ensuring smooth shipments that help
            drive your business forward.'
            linkTo='/contact'
            linkText='Contact Us'
            imageSrc={TruckloadServiceImage}
            imageAlt="Truck on the road"
        />
        <TruckloadInformation />
        <EmailMessage />
    </div>
    </>
  )
}

export default TruckloadService