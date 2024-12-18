import AmericanFlag from '../images/american-flag.png'
import SupplyChain from '../images/supply-chain.png'
import LeadershipVision from '../images/leadership-vision.png'
import TQM from '../images/tqm.png'
import EmailMessage from '../components/EmailMessage'

function About() {

  return (
    <div className='flex flex-col text-xl'>
      <div className="w-full object-fill overflow-hidden">
        <img src={AmericanFlag} alt="" className="object-cover w-full" />
        <h1 className="absolute inset-0 text-5xl text-white flex items-center justify-center text-shadow font-parisienne">
          We the people...
        </h1>
      </div>

      <div className="flex flex-col gap-6 p-4 bg-light-gray">
        <h1 className="text-center text-3xl font-rubik font-bold text-navy-blue">
          The Intelligence Behind Your Logistics Solutions <br />& Simplifying The Logistics Process
        </h1>
        <div className="h-1 w-1/4 bg-light-blue mx-auto rounded-full my-2" />
      </div>

        {/* Supply Chain Management Section */}
        <div className="flex items-center gap-8 p-4 bg-white px-[10%]">
          <div className='w-1/3 rounded-full border-solid border-4 border-navy-blue transform hover:scale-105 transition-transform duration-300'>
            <img src={SupplyChain} alt="Supply Chain Management" className='object-fit rounded-full' />
          </div>
          <div className='w-1/2'>
            <h3 className="text-2xl font-semibold text-light-blue font-rubik pb-4">Supply Chain Management & Consulting</h3>
            <p className="text-lg font-light text-gray">
              With 15+ years of extensive experience in supply chain management and consulting, we have honed our skills within both corporate and military environments. Our expertise spans across a diversified industry, covering logistics operations, distribution, and all modes of transportation internationally and domestically. { /* This background provides us with the insight and credibility to present valued operational assessments and propositions to partner alliances, vendors, and prospective companies. */ }
            </p>
          </div>
        </div>

      {/* Leadership and Vision Section */}
      <div className="flex items-center gap-8 p-4 bg-light-gray px-[10%]">
        <div className='w-1/2'>
          <h3 className="text-2xl font-semibold text-light-blue font-rubik pb-4">Leadership and Vision</h3>
          <p className="text-lg font-light text-gray">
            Our ability to quickly acclimate to both company and client business environments has enabled us to deliver enhanced customer satisfaction, improved ROI, and strengthened competitive positions for both domestic and international clients. Our leadership principles are deeply ingrained in our professional and personal lives, making us a sought-after logistics partner.
          </p>
        </div>
        <div className='w-1/3 rounded-full border-solid border-4 border-navy-blue transform hover:scale-105 transition-transform duration-300'>
          <img src={LeadershipVision} alt="Leadership and Vision" className="object-fit rounded-full" />
        </div>
      </div>

      {/* Total Quality Management Section */}
      <div className="flex items-center gap-8 p-4 bg-white px-[10%]">
        <div className='w-1/3 rounded-full border-solid border-4 border-navy-blue transform hover:scale-105 transition-transform duration-300'>
          <img src={TQM} alt="Total Quality Managment" className="object-fit rounded-full" />
        </div>
        <div className='w-1/2'>
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
  )
}

export default About
