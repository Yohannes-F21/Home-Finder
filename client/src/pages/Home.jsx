import React from 'react'
import Hero from '../components/UI/Hero'

import Section2 from '../components/UI/Section2'
import Section3 from '../components/UI/Section3'
import Section4 from '../components/UI/Section4'
import Testimonials from '../components/UI/Testimonials'
import Cta from '../components/UI/Cta'


const Home = () => {
  return (
    <>
      <Hero />
  
      <Section2 />
      <Section3 />
      <Section4 />
     
      <Testimonials />
      <Cta />
    </>
  );
}

export default Home