import React from 'react'
import ServiceHeaderSection from '../components/ServiceHeaderSection'
import StartShipping from '../components/ltl/StartShipping'
import LTLInfo from '../components/ltl/LTLInfo'
import FAQ from '../components/ltl/FAQ'
import EmailMessage from '../components/EmailMessage'
import FreightShipping from '../images/freight-shipping.jpg'
function Ltl() {
  return (
    <div>
        <ServiceHeaderSection
            title='LTL Freight Shipping'
            subtitle='Navigating the World of LTL Freight Shipping'
            description='New to LTL freight? Start with the basics to understand when and why less-than-truckload (LTL) shipping is a good option.'
            linkTo='/contact'
            linkText='Contact Us'
            imageSrc={FreightShipping}
            imageAlt='LTL Freight Shipping'
        />
        <StartShipping />
        <LTLInfo />
        <FAQ />
        <EmailMessage />
    </div>
  )
}

export default Ltl