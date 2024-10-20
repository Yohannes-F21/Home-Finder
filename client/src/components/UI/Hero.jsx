import { Link } from "react-router-dom";

import image17 from "../../assets/hero/enterprise_art.png";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto">
      <div>
        <h2
          className="mb-4 text-3xl font-bold text-[#009688] sm:text-4xl md:text-[48px]"
          style={{ lineHeight: "1" }}
        >
          ለመኖሪያ ፣ ለንግድ ወይም ለቢሮ <br /> የሚሸጥ እና የሚከራይ ቤት ይፈልጋሉ?
        </h2>
        <p className="my-8 text-gray-600">
          Welcome to HomeFinder, your go-to platform for listing and finding
          homes for rent or purchase. Whether you're searching for the perfect
          home or managing property listings, HomeFinder makes the process easy
          and efficient. With user-friendly features, advanced search options,
          and detailed property descriptions, we simplify the journey to finding
          your next home or tenant.
        </p>

        <Link
          to="/search"
          className="self-center w-auto px-8 mr-4 border-0 text-white text-lg btn hover:bg-secondary bg-primary hover:text-white"
        >
          Get started
        </Link>
        <Link
          to="/about"
          className="self-center w-auto px-8 font-semibold tmr-16 text-primary hover:text-secondary"
        >
          About
        </Link>
      </div>
      <img src={image17} alt="" />
    </section>
  );
};

export default ShuffleHero;
