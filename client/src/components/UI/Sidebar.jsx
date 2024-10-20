import React from 'react'

const Sidebar = ({ handleSubmit, sidebardata, handleChange }) => {
  return (
      <div className="p-7 bg-gray-50 border-b-2 md:border-r-2 md:w-1/4 h-screen overflow-y-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg p-3 w-full"
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />
          </div>
          <label className="font-semibold">Type:</label>
          <div className="flex-col">
            <div className="flex gap-2 p-2 bg-gray-100 rounded-lg my-1">
              <input
                type="checkbox"
                id="all"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.type === "all"}
              />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2 p-2 bg-gray-100 rounded-lg my-1">
              <input
                type="checkbox"
                id="rent"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.type === "rent"}
              />
              <span>Rent</span>
            </div>
            <div className="flex gap-2 p-2 bg-gray-100 rounded-lg my-1">
              <input
                type="checkbox"
                id="sale"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.type === "sale"}
              />
              <span>Sale</span>
            </div>
            <div className="flex gap-2 p-2 bg-gray-100 rounded-lg my-1">
              <input
                type="checkbox"
                id="offer"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.offer}
              />
              <span>Offer</span>
            </div>
          </div>
          <label className="font-semibold">Amenities:</label>
          <div className="flex-col gap-2 items-center">
            <div className="flex gap-2 p-2 bg-gray-100 rounded-lg my-1">
              <input
                type="checkbox"
                id="parking"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.parking}
              />
              <span>Parking</span>
            </div>
            <div className="flex gap-2 p-2 bg-gray-100 rounded-lg my-1">
              <input
                type="checkbox"
                id="furnished"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.furnished}
              />
              <span>Furnished</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort</label>
            <select
              onChange={handleChange}
              defaultValue={"created_at_desc"}
              id="sort_order"
              className="border w-80 rounded-lg p-3"
            >
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to hight</option>
              <option value="createdAt_desc">Latest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>
          </div>
          <button className="bg-primary text-white p-3 rounded-lg uppercase hover:opacity-95">
            Search
          </button>
        </form>
        </div>
      )

};

export default Sidebar