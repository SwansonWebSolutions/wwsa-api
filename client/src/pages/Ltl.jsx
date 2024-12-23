import React from 'react'
import ServiceHeaderSection from '../components/ServiceHeaderSection'
import StartShipping from '../components/ltl/StartShipping'
import LTLInfo from '../components/ltl/LTLInfo'
import FAQ from '../components/ltl/FAQ'
import EmailMessage from '../components/EmailMessage'
import FreightShipping from '../images/freight-shipping.jpg'
import { Helmet } from 'react-helmet'
function Ltl() {
  return (
    <>
    <Helmet>
      <title>LTL Freight Shipping - WWSA</title>
      <meta name="description" content="Grow your ecommerce business globally with WWSA's flexible logistics solutions. Enjoy fast delivery, easy integrations, real-time tracking, and drop shipping options." />
      <link rel="canonical" href="https://www.wws-alliances.org/ltl" />
      <meta name="keywords" content="ltl, freight shipping, commerce, shipping, logistics, international trade, freight solutions" />
    </Helmet>
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
    </>
  )
}

export default Ltl