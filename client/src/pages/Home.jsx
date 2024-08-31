import {useEffect, useState, useRef} from 'react'
import Earth1280 from '../images/earth-1280.jpg'
import Plane640 from '../images/plane-640.png'
import CargoShip from '../images/cargo-ship.png'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import ServiceCard from '../components/ServiceCard'
import EmailForm from '../components/EmailForm'
import { Link } from 'react-router-dom'
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
    <div 
      className='flex flex-col gap-8 bg-slate-400 h-screen max-w-full overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg'
      style={{backgroundImage: `url(${Earth1280})`}}
    >
      <div className='flex items-center justify-center'>
        <div className=" p-4 pt-40 md:pt-52 lg:pt-72 flex flex-col gap-4 text-wrap h-full">
          <h1 className='text-white text-xl md:text-4xl lg:text-4xl font-semibold animate-slideInLeft'>The Intelligence Behind Your Logistics Solutions <br />& Simplifying The Logistics Process</h1>
          <div className='h-1 w-[25%] bg-light-blue'/>
          <Link to="/contact" className="border-solid border border-white text-lg px-8 lg:py-2 w-fit text-white font-semibold rounded-md animate-slideInRight hover:bg-light-blue duration-300 ease-in">
            <span>Request a Quote</span>
          </Link>
        </div>
      </div>
      <div className='h-[300px] w-full'/>
      <div className='space-y-12 pb-8 lg:px-[8%] xl:px-[12%]'>
        <div className='bg-light-blue bg-opacity-80 flex flex-col gap-4 py-8'>
          <div className='flex flex-col lg:flex-row mx-[3%] items-center'>
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-3xl text-subtle-blue font-semibold font-rubik">Bridging Borders, Connecting Commerce</h2>
              <p className="block pl-2 border-solid border-l-4 border-subtle-blue text-xl text-white text-shadow lg:textl-xl">In an increasingly interconnected world, is your business reaching its global potential? We streamline international shipping rates, processes, and technology to help you effortlessly compete on the world stage. Let us simplify the complexities of global logistics, so you can focus on growing your international presence.</p>
            </div>
            <img src={Plane640} alt="" className="object-scale-down size-2/3 lg:size-1/2 animate-fade"/>
          </div>
          <div className='flex flex-col lg:flex-row-reverse mx-[3%] gap-8 items-center'>
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-3xl text-subtle-blue font-semibold font-rubik">We can meet your shipping needs</h2>
              <p className="block pl-2 border-solid border-r-4 border-subtle-blue text-xl text-white text-shadow lg:textl-xl">In an increasingly interconnected world, is your business reaching its global potential? We streamline international shipping rates, processes, and technology to help you effortlessly compete on the world stage. Let us simplify the complexities of global logistics, so you can focus on growing your international presence.</p>
            </div>
            <img src={CargoShip} alt="" className="object-scale-down animate-fade"/>
          </div>
        </div>
        <div className="">
          <div className='bg-black bg-opacity-70 border-solid border border-light-blue text-white flex flex-col justify-center items-center gap-2 p-2 rounded-md shadow-black'>
            <h3 className="text-xl lg:text-3xl font-bold text-center">Not sure what service you need?</h3>
            <span className='text-center'>Contact us today for a custom quote that covers all of your shipping needs!</span>
            <Link to="/contact" className="flex gap-2 justify-center items-center text-shadow bg-light-blue text-shadow-black py-2 px-4 font-semibold rounded-md border-solid border hover:bg-black duration-200 ease-in">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
        
        <div className='flex flex-col gap-4'>
          <div
            ref={sectionRef}
            className={`bg-light-blue py-2 rounded-md ${
              isInView ? 'animate-slideInLeft' : ''
            }`}
              >
            <h2 className="text-3xl lg:text-4xl text-center pl-2 py-2 text-wrap text-subtle-blue font-semibold font-rubik">
              Our Services
            </h2>
          </div>
          <div className='flex flex-wrap gap-2'>
            <ServiceCard number="01" title="Service 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={faPhone}/>
            <ServiceCard number="02" title="Service 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={faPhone}/>
            <ServiceCard number="03" title="Service 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={faPhone}/>
            <ServiceCard number="04" title="Service 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={faPhone}/>
            <ServiceCard number="05" title="Service 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={faPhone}/>
            <ServiceCard number="06" title="Service 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={faPhone}/>
          </div>
        </div>
        <EmailForm />
      </div>
    </div>
  )
}

export default Home