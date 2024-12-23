import AmericanFlag from '../images/american-flag.png'
import SupplyChain from '../images/supply-chain.png'
import LeadershipVision from '../images/leadership-vision.png'
import TQM from '../images/tqm.png'
import EmailMessage from '../components/EmailMessage'
import { Helmet } from 'react-helmet'

function About() {

  return (
    <>
    <Helmet>
      <title>About - WWSA</title>
      <meta name="description" content="Discover innovative logistics solutions with 15+ years of expertise in supply chain management, leadership, and total quality management. Enhance ROI, customer satisfaction, and competitive advantage with our dedicated team." />
      <link rel="canonical" href="https://www.wws-alliances.org/about" />
      <meta name="keywords" content="about, shipping, logistics, ecommerce, international trade, freight solutions" />
    </Helmet>
    <div className='flex flex-col text-xl'>
      <div className="w-full object-fill overflow-hidden flex items-center justify-center">
        <h1 className="absolute text-5xl md:text-8xl text-white flex items-center justify-center text-shadow font-parisienne">
          We the people...
        </h1>
        <img src={AmericanFlag} alt="" className="object-cover w-full" />
        
      </div>

      <div className="flex flex-col gap-6 p-4 bg-light-gray">
        <h1 className="text-center text-xl md:text-3xl font-rubik font-bold text-navy-blue">
          The Intelligence Behind Your Logistics Solutions <br />& Simplifying The Logistics Process
        </h1>
        <div className="h-1 w-1/4 bg-light-blue mx-auto rounded-full my-2" />
      </div>

      {/* Supply Chain Management Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white px-[10%]">
        {/* Image Container */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <div className='w-1/2 shadow-2xl rounded-full border-solid border-4 border-navy-blue transform hover:scale-105 transition-transform duration-300'>
            <img src={SupplyChain} alt="Supply Chain Management" className='object-fit rounded-full' />
          </div>
        </div>
        {/* Text Content */}
        <div className='w-full md:w-1/2 text-center md:text-start'>
          <h3 className="text-2xl font-semibold text-light-blue font-rubik pb-4">Supply Chain Management & Consulting</h3>
          <p className="text-lg font-light text-gray">
            With 15+ years of extensive experience in supply chain management and consulting, we have honed our skills within both corporate and military environments. Our expertise spans across a diversified industry, covering logistics operations, distribution, and all modes of transportation internationally and domestically.
          </p>
        </div>
      </div>

      {/* Leadership and Vision Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 p-8 bg-light-gray px-[10%]">
        <div className='md:w-1/2 text-center md:text-start'>
          <h3 className="text-2xl font-semibold text-light-blue font-rubik pb-4">Leadership and Vision</h3>
          <p className="text-lg font-light text-gray">
            Our ability to quickly acclimate to both company and client business environments has enabled us to deliver enhanced customer satisfaction, improved ROI, and strengthened competitive positions for both domestic and international clients. Our leadership principles are deeply ingrained in our professional and personal lives, making us a sought-after logistics partner.
          </p>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <div className='w-1/2 shadow-2xl rounded-full border-solid border-4 border-navy-blue transform hover:scale-105 transition-transform duration-300'>
            <img src={LeadershipVision} alt="Leadership and Vision" className='object-fit rounded-full' />
          </div>
        </div>
      </div>

      {/* Total Quality Management Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white px-[10%]">
        <div className='w-full md:w-1/2 flex justify-center'>
          <div className='w-1/2 shadow-2xl rounded-full border-solid border-4 border-navy-blue transform hover:scale-105 transition-transform duration-300'>
            <img src={TQM} alt="Total Quality Management" className='object-fit rounded-full' />
          </div>
        </div>
        <div className='md:w-1/2 text-center md:text-start'>
          <h3 className="text-2xl font-semibold text-light-blue font-rubik pb-4">Total Quality Management</h3>
          <p className="text-lg font-light text-gray">
          A key element of our work ethic is a commitment to continuous improvement. This approach ensures seamless partnerships with companies, vendors, alliances, and clients in the contract logistics industry. Our flexibility and commitment to continuous improvement lead to economically attractive logistics solutions. These principles have been at the core of our success and the reason clients select us to lead their logistics initiatives.
          </p>
        </div>
      </div>

      {/* Executive Team Section */}
      <div className="flex flex-col gap-4 bg-light-gray text-gray p-4">
        <h2 className="text-3xl text-navy-blue font-semibold font-rubik text-center">Executive Team</h2>
        <div className='flex flex-col text-lg text-center'>
          <h3 className="text-2xl font-bold ">Mark Jackson</h3>
          <span className="italic">Founder and CEO</span>
          <a href="mailto:mark@wws-alliances.org">mark@wws-alliances.org</a>
        </div>
      
      </div>

      <EmailMessage />
    </div>
    </>
  )
}

export default About
