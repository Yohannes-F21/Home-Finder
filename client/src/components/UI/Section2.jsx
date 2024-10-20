import React from 'react'
import temp from '../../assets/section1.jpg'
import { Link } from 'react-router-dom';
const Section2 = () => {
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
            <h2 className="text-3xl font-bold text-[#009688] md:text-4xl ">
            For Sellers or Landlords:
            </h2>
            <p className="my-8 text-gray-600">
            Our company is dedicated to helping landlords and property developers to rent and sell out their properties. If you want to save time and money, while expanding, you might want to be interested in our professional services.
 
 Our company could be your ideal partner for renting or selling your property. We are committed to our customers and promoters and our main objective is to be transparent while achieving results.
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

export default Section2