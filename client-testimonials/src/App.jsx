import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import data from "../data.json"
import testimonial from "./components/TestimonialCard"
import TestimonialCard from './components/TestimonialCard'

function App() {
  const [testimonials, setTestimonials] = useState(data);

  return (
    <>
      {
        testimonials.map((testimonial)=>{
          <TestimonialCard data= {testimonial} key={testimonial.id}/>
        })
        
      }
    </>
  )
}

export default App
