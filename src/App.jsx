import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/Hero'
import { Navbar } from './components/Nav'
import FeaturedServices from './components/Feature'
import WhyChooseUs from './components/Why'
import Testimonials from './components/Testimonial'
import LocalSEOSection from './components/LocalMAp'
import FaqAccordion from './components/FAQS'
import Footer from './components/Footer'
import TestimonialsA from './components/ApiTestimonial'
import TopBar from './components/TopBar'
import AppointmentBanner from './components/Appointmentbanner'
import DoctorTeethIntro from './components/DTIntro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
<HeroSection/>
<AppointmentBanner/>
<DoctorTeethIntro/>
<FeaturedServices/>
<WhyChooseUs/>

<Testimonials/>
<LocalSEOSection/>
<FaqAccordion/>

    </>
  )
}

export default App
