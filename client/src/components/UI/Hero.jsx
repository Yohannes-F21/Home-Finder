import { Link } from "react-router-dom";

import image17 from "../../assets/hero/enterprise_art.png";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto">
     <div>
     <h2 className="mb-4 text-3xl font-bold text-[#009688] sm:text-4xl md:text-[48px]" style={{ lineHeight: '1' }}>
  ለመኖሪያ ፣ ለንግድ ወይም ለቢሮ <br /> የሚሸጥ እና የሚከራይ ቤት ይፈልጋሉ?
</h2>
          <p className="my-8 text-gray-600">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>

          <Link to='/search' className="self-center w-auto px-8 mr-4 border-0 text-white text-lg btn hover:bg-secondary bg-primary hover:text-white">
            Get started
          </Link>
          <Link to='/about' className="self-center w-auto px-8 font-semibold tmr-16 text-primary hover:text-secondary">
           About
          </Link>
        </div>
        <img src={image17} alt=""/>
     
    </section>
  );
};


export default ShuffleHero;