import { Link } from 'react-router-dom';
import GlobeImage from '../images/globe.png';
import Handshake from '../images/handshake.png';
import ShippingVideo from '../videos/shipping.mp4';
import EmailForm from '../components/EmailMessage';

function Home() {

  return (
    <div className='flex flex-col'>
      <div className="relative w-full overflow-hidden">
        {/* Video */}
        <video 
          src={ShippingVideo} 
          className="w-full h-[500px] object-cover" 
          autoPlay 
          loop 
          muted
        ></video>

        {/* Overlay Container */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-xl md:text-4xl lg:text-4xl font-semibold text-white text-shadow animate-slideInLeft mb-4">
            The Intelligence Behind Your Logistics Solutions <br /> & Simplifying The Logistics Process
          </h1>
          <Link
            to="/contact"
            className="border border-light-blue text-lg px-8 py-2 text-white text-shadow bg-light-blue font-light animate-slideInRight hover:bg-navy-blue hover:border duration-300 ease-in"
          >
            <span>Get a Quote</span>
          </Link>
        </div>
      </div>

      <div className='flex'>
      {/* Left Sidebar (hidden on small screens) */}
      <div className="bg-navy-blue md:w-1/4 hidden md:block">
        {/* Sidebar content can go here */}
      </div>

      {/* Center Column (Main content) */}
      <div className="flex flex-col bg-white text-black md:2/4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center text-center md:text-start text-gray bg-light-gray p-8">
            <div className='border-solid border border-navy-blue w-3/4 md:w-1/4'>
              <img src={GlobeImage} alt="" className='' />
            </div>
            <div className='md:w-1/2 justify-center flex flex-col gap-4'>
              <h2 className="text-2xl text-navy-blue text-subtle-blue font-semibold font-rubik">
                Connecting Commerce
              </h2>
              <p className="block ">
                In an increasingly interconnected world, is your business reaching its global potential? We
                streamline international shipping rates, processes, and technology to help you effortlessly compete on
                the world stage. Let us simplify the complexities of global logistics, so you can focus on growing your
                international presence.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 justify-center items-center text-center md:text-start text-gray bg-white p-8">
            <div className='md:w-1/2 justify-center flex flex-col gap-4'>
              <h2 className="text-2xl text-navy-blue text-subtle-blue font-semibold font-rubik">
                We can meet your shipping needs
              </h2>
              <p className="block ">
                In an increasingly interconnected world, is your business reaching its global potential? We
                streamline international shipping rates, processes, and technology to help you effortlessly compete on
                the world stage. Let us simplify the complexities of global logistics, so you can focus on growing your
                international presence.
              </p>
            </div>
            <div className='border-solid border border-navy-blue w-3/4 md:w-1/4'>
              <img src={Handshake} alt="" className='' />
            </div>
          </div>
          <EmailForm />
      </div>

      {/* Right Sidebar (hidden on small screens) */}
      <div className="bg-navy-blue p-4 md:w-1/4 hidden md:block">
        {/* Sidebar content can go here */}
      </div>
      </div>
      
  </div>
  );
}

export default Home;
