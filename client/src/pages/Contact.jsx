import React from 'react'
import EmailQuote from '../components/EmailQuote'
import { Helmet } from 'react-helmet'

function Contact() {
  return (
    <>
    <Helmet>
      <title>Contact - WWSA</title>
      <meta name="description" content="Get in contact with our team so we can help you with your logisitcs and distribution needs." />
      <link rel="canonical" href="https://www.wws-alliances.org/contact" />
      <meta name="keywords" content="shipping, logistics, ecommerce, international trade, freight solutions, contact" />
    </Helmet>
    <div>
      <EmailQuote />
    </div>
    </>
  )
}

export default Contact