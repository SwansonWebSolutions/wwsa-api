import React from 'react'
import ServiceHeaderSection from '../components/ServiceHeaderSection'
import TruckloadInformation from '../components/ts/TruckloadInformation'
import EmailMessage from '../components/EmailMessage'
import TruckloadServiceImage from '../images/truckload-service.jpg'
function TruckloadService() {
  return (
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
  )
}

export default TruckloadService