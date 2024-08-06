import {useEffect} from 'react'
import Earth1280 from '../images/earth-1280.jpg'
import Earth640 from '../images/earth-640.jpg'
import Plane640 from '../images/plane-640.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import ServiceCard from '../components/ServiceCard'
import EmailForm from '../components/EmailForm'

function Home() {
  const screensize = window.screen.width < 768;

  useEffect(() =>{
    if(screensize){
      document.getElementById('banner').src = Earth640
    }else{
      document.getElementById('banner').src = Earth1280
    }

   })
  return (
    <div className='flex flex-col gap-8 bg-white'>
      <div className='relative w-full h-auto flex items-center justify-center'>
        <img id="banner" className="w-full h-auto" alt="Banner" />
        <div className="absolute flex flex-col items-center">
          <h1 className='text-white text-3xl lg:text-5xl font-bold animate-slideInRight'>Shipping made easy...</h1>
          <div className='border-b-4 border-soft-green animate-fadeInBorder mt-2 w-full'></div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row mx-[3%] items-center'>
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl text-subtle-blue font-semibold">Bridging Borders, Connecting Commerce</h2>
          <p className="block pl-2 border-solid border-l-4 border-subtle-blue text-lg lg:textl-xl">In an increasingly interconnected world, is your business reaching its global potential? We streamline international shipping rates, processes, and technology to help you effortlessly compete on the world stage. Let us simplify the complexities of global logistics, so you can focus on growing your international presence.</p>
        </div>
        <img src={Plane640} alt="" className="object-scale-down size-2/3 lg:size-1/2 animate-fade"/>
      </div>
      <div className="px-[15%]">
        <div className='bg-slate-700 text-white flex flex-col justify-center items-center gap-2 p-2 rounded-md shadow-black'>
          <span className="lg:text-2xl font-light text-center">Ready to explore your international shipping options with a live expert, call now?</span>
          <a href="tel:+18189178941" className="flex gap-2 justify-center items-center bg-soft-green text-shadow-black py-2 px-4 font-semibold rounded-md border-solid border">
            <FontAwesomeIcon icon={faPhone} className="size-4"/>
            <span>+1 (818) 917-8941</span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-center font-semibold">Our Services</h2>
      </div>
      <div className='flex flex-wrap justify-center'>
        <ServiceCard number="01" title="Service 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={faPhone}/>
        <ServiceCard number="02" title="Service 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={faPhone}/>
        <ServiceCard number="03" title="Service 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={faPhone}/>
        <ServiceCard number="04" title="Service 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={faPhone}/>
        <ServiceCard number="05" title="Service 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." icon={faPhone}/>
      </div>
      <EmailForm />
    </div>
  )
}

export default Home