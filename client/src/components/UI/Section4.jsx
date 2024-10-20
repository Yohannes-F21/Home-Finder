import React from 'react'
import temp from "../../assets/section3.png";
import { Link } from 'react-router-dom';
const Section4 = () => {
  return (
    <div className="py-16 -mt-16">
      <div className="px-6 m-auto text-gray-600 xl:container md:px-12 xl:px-16">
        <div className="lg:bg-gray-50 lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
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
          <div className="mx-8 md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#009688]   md:text-4xl ">
            Partnership
            </h2>
            <p className="my-8 text-gray-600">
            Since 2013 we have helped numerous owners and investors to find the properties that suit their needs and now We are partnering with other real estate companies to offer more choices and facilitate purchases of properties for our customers in the local and international property market.
            </p>

            <Link to='/search' className="self-center w-auto px-8 mr-4 border-0 text-white text-lg btn hover:bg-secondary bg-primary hover:text-white">
            Get started
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4