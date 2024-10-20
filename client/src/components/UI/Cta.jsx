import React from 'react'
import { Link } from 'react-router-dom';
import ctaPic from '../../assets/cta.jpg'

const cta = () => {
  return (
    <section
    className="overflow-hidden bg-[url(https://img1.wsimg.com/isteam/ip/1cee1217-39ec-44b5-8388-36d631117966/apartment%20render%202.png/:/cr=t:5.52%25,l:0%25,w:100%25,h:88.95%25/rs=w:1240,h:620,cg:true)] bg-cover bg-top bg-no-repeat"
  >
    <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Lets Get Started</h2>
  
        <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
        Sign to your account to get the full experiance
        </p>
  
        <div className="mt-4 sm:mt-8">
        <Link to='/search' className="self-center w-auto px-8 mr-4 border-0 text-white text-lg btn hover:bg-secondary bg-primary hover:text-white">
            Get started
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
}

export default cta