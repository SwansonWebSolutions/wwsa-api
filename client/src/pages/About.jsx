import React, { useEffect } from 'react'
import USA from '../images/usa-banner.png'
import Flags from '../images/all-country-flags.png'
// import SupplyChain from '../images/supply-chain.png' // Placeholder image for supply chain section
import Leadership from '../images/analytics.png' // Placeholder image for leadership section
// import TQM from '../images/tqm.png' // Placeholder image for TQM section

function About() {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector('.parallax');
      const scrollPosition = window.pageYOffset;
      parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col gap-4 text-xl pb-8 md:px-[6%] lg:px-[8%] xl:px-[12%]'>
      <div className="pt-28">
        <div className="relative">
          <img src={USA} alt="" className="object-cover w-full h-full" />
          <h1 className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl text-white flex items-center justify-center text-shadow font-parisienne">
            We the people...
          </h1>
        </div>
        <div className="relative overflow-hidden h-[300px] md:h-[600px] flex items-center justify-center">
          <div className="parallax absolute inset-0">
            <img src={Flags} alt="" className="w-screen h-screen object-cover md:object-none" />
          </div>
        </div>
      </div>
  <div className="flex flex-col gap-6 p-4 bg-gradient-to-b from-light-blue via-white to-gray-300">
    <h1 className="text-center text-xl md:text-4xl lg:text-5xl font-bold text-subtle-blue tracking-wide leading-tight">
      The Intelligence Behind Your Logistics Solutions <br />& Simplifying The Logistics Process
    </h1>
    <div className="h-1 w-1/4 bg-light-blue mx-auto rounded-full my-2" />

    {/* Experience Section */}
    <h2 className="text-3xl text-subtle-blue font-semibold font-rubik mt-8 text-center">Experience</h2>
    
    <div className="grid md:grid-cols-2 gap-8 mt-8">
      {/* Supply Chain Management Section */}
      <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
        <img src="{SupplyChain}" alt="Supply Chain Management" className="w-full h-auto rounded-lg" />
        <h3 className="text-2xl font-semibold text-light-blue">Supply Chain Management & Consulting</h3>
        <p className="text-lg font-light text-gray-700">
          With 15+ years of extensive experience in supply chain management and consulting, we have honed our skills within both corporate and military environments. Our expertise spans across a diversified industry, covering logistics operations, distribution, and all modes of transportation internationally and domestically. { /* This background provides us with the insight and credibility to present valued operational assessments and propositions to partner alliances, vendors, and prospective companies. */ }
        </p>
      </div>

      {/* Leadership and Vision Section */}
      <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
        <img src={Leadership} alt="Leadership and Vision" className="w-[256px] h-[256px] mx-auto rounded-lg" />
        <h3 className="text-2xl font-semibold text-light-blue">Leadership and Vision</h3>
        <p className="text-lg font-light text-gray-700">
          Our ability to quickly acclimate to both company and client business environments has enabled us to deliver enhanced customer satisfaction, improved ROI, and strengthened competitive positions for both domestic and international clients. Our leadership principles are deeply ingrained in our professional and personal lives, making us a sought-after logistics partner.
        </p>
      </div>
    </div>

    {/* Total Quality Management Section */}
    <div className="flex flex-col gap-4 mt-8 p-4 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
      <img src="{TQM}" alt="Total Quality Management" className="w-full h-auto rounded-lg" />
      <h3 className="text-2xl font-semibold text-light-blue">Total Quality Management</h3>
      <p className="text-lg font-light text-gray-700">
        A key element of our work ethic is a commitment to continuous improvement. This approach ensures seamless partnerships with companies, vendors, alliances, and clients in the contract logistics industry. Our flexibility and commitment to continuous improvement lead to economically attractive logistics solutions. These principles have been at the core of our success and the reason clients select us to lead their logistics initiatives.
      </p>
    </div>

    {/* Executive Team Section */}
    <h2 className="text-3xl text-subtle-blue font-semibold font-rubik mt-16 text-center">Executive Team</h2>
    
    <div className="mt-8 flex flex-col items-center bg-light-blue p-6 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold font-rubik text-dark-blue">Mark Jackson</h2>
      <span className="text-2xl italic text-gray-700">Founder and CEO</span>
    </div>
    </div>
  </div>
  )
}

export default About
