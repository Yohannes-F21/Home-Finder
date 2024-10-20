import React from 'react'
import temp from "../../assets/section2.png"
import { Link } from 'react-router-dom';
const Section3 = () => {
  return (
    <div className="py-16 -mt-16">
      <div className="px-6 m-auto text-gray-600 xl:container md:px-12 xl:px-16">
        <div className="lg:bg-gray-50 lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="mx-8 md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#009688] md:text-4xl ">
            For Tenants or buyers:
            </h2>
            <p className="my-8 text-gray-600">
            Whether you are looking for houses, flats, offices or buildings for sale or for rent, we offer you free-of-charge accompanied viewing of properties you choose through our state-of-the-art website. With our team of experienced and dedicated real estate agents, we at Real Ethio offer highly professional and personalized assistance in finding you the right home in Ethiopia.
            </p>

            <Link to='/search' className="self-center w-auto px-8 mr-4 border-0 text-white text-lg btn hover:bg-secondary bg-primary hover:text-white">
            Get started
          </Link>
          </div>
          <div className="md:5/12 lg:w-1/2">
            <img
              src={temp}
              alt="image"
              loading="lazy"
              width=""
              height=""
              className="rounded-2xl hover:-translate-y-12 transition-all ease-in-out duration-500" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3