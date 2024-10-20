import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
 import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

   const [isScrolled, setIsScrolled] = useState(false);
   const handleScroll = () => {
     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     setIsScrolled(scrollTop > 0);
   };

   useEffect(() => {
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
  
  return (
    <header
      aria-label="Site Header"
      className={`sticky top-0 z-50  ${
        isScrolled
          ? "bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-sm bg-[#F9FAFB]"
          : ""
      }`}
    >
      <div className="flex items-center justify-between h-20 max-w-screen-xl mx-16">
        <div className="flex items-center gap-16">
          

          <NavLink to="/" className="flex gap-2 items-center">
            <img className="h-10" src={logo} alt="" />
            <h1 className="text-primary font-bold text-3xl">HomeFinder</h1>
          </NavLink>
        
         

          <form className="mb-0 lg:flex" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                className="h-10 pl-4 pr-16 text-sm border rounded-lg border-neutral placeholder-neutral focus:z-10"
                placeholder="Search for homes"
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <button
                type="submit"
                className="absolute inset-y-0 right-0 p-2 text-gray-600 rounded-r-lg"
              >
                <span className="sr-only">Submit Search</span>
                <FaSearch className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        <nav
          aria-label="Site Nav"
          className="items-center justify-center hidden gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
        >
          {/* <NavLink
            exact
            to="/"
            className="text-gray-900 hover:text-primary"
            activeClassName="text-primary"
          >
            Home
          </NavLink> */}
          <NavLink
            to="/search"
            className="text-gray-900 hover:text-primary"
            activeClassName="text-primary"
          >
            Home Listings
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-900 hover:text-primary"
            activeClassName="text-primary"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-900 hover:text-primary"
            activeClassName="text-primary"
          >
            Contact
          </NavLink>
        </nav>

        <div className="items-center hidden gap-4 lg:flex">
          <NavLink to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <button className="px-5 py-2 text-sm font-medium rounded-lg text-white bg-primary hover:bg-gray-800">
                {" "}
                Sign in
              </button>
            )}
          </NavLink>
          {/* <NavLink
            to="/sign-in"
            className="px-5 py-2 text-sm font-medium rounded-lg text-white bg-primary hover:bg-gray-800"
          >
            {currentUser ? (
              <img src={currentUser.avatar} alt="profile" />
            )}
            Sign in
          </NavLink> */}
        </div>
      </div>

      <div className="border-t border-gray-100 lg:hidden">
        <nav className="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium gap-8">
          {/* <NavLink
            exact
            to="/"
            className="text-gray-900 hover:text-primary"
            activeClassName="text-primary"
          >
            Home
          </NavLink> */}
          <NavLink
            to="/search"
            className="text-gray-900 hover:text-primary"
            activeClassName="text-primary"
          >
            Homes
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-900 hover:text-primary"
            activeClassName="text-primary"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-900 hover:text-primary"
            activeClassName="text-primary"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
