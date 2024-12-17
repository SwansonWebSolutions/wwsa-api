import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Earth1280 from '../images/earth-1280.jpg'; // This is still referenced but will be used only within specific sections
import Plane640 from '../images/plane-640.png';
import CargoShip from '../images/cargo-ship.png';
import ServiceCard from '../components/ServiceCard';
import GlobeImage from '../images/globe.png';
import Handshake from '../images/handshake.png';
import EmailForm from '../components/EmailMessage';

function Home() {
  const screensize = window.screen.width < 768;
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing after the animation is triggered
        }
      },
      {
        threshold: 1, // Trigger when 10% of the element is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className='flex'>
      {/* Left Sidebar (hidden on small screens) */}
      <div className="bg-blue-200 md:w-1/4 hidden md:block">
      {/* Sidebar content can go here */}
      </div>

      {/* Center Column (Main content) */}
      <div className="flex flex-col bg-white text-black md:2/4">
          <div className="flex gap-16 justify-center text-gray bg-light-gray p-8">
            <div className='border-solid border border-navy-blue w-1/4'>
              <img src={GlobeImage} alt="" className='' />
            </div>
            <div className='w-1/2 justify-center flex flex-col gap-4'>
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

          <div className="flex gap-16 justify-center text-gray bg-white p-8">
            <div className='w-1/2 justify-center flex flex-col gap-4'>
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
            <div className='border-solid border border-navy-blue w-1/4'>
              <img src={Handshake} alt="" className='' />
            </div>
          </div>
          <EmailForm />
      </div>

      {/* Right Sidebar (hidden on small screens) */}
      <div className="bg-blue-200 p-4 md:w-1/4 hidden md:block">
      {/* Sidebar content can go here */}
      </div>
  </div>
  );
}

export default Home;
