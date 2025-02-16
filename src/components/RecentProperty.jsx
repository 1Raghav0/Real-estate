import React from "react";

const RecentProperty = () => {
  const properties = [
    { id: 1, image: "./p-1.png" },
    { id: 2, image: "./p-2.png" },
    { id: 3, image: "./p-3.png" },
    { id: 4, image: "./p-4.png" },
    { id: 5, image: "./p-5.png" },
    { id: 6, image: "./p-6.png" },
  ];

  return (
    <div className="w-full bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6 text-gray-800">
          Recent Property Listed
        </h1>
        <p className="text-center max-w-2xl mx-auto text-gray-600">
          Explore our recently listed properties in various locations, offering modern amenities and excellent locations.
        </p>

        {/* Responsive Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <img src={property.image} alt="Property" className="object-cover w-full h-60 rounded-t-lg" />

              {/* Status & Favorite Icon */}
              <div className="flex items-center justify-between px-6 py-3">
                <p className="px-3 py-1 bg-amber-100 text-amber-600 text-sm rounded-md">For Rent</p>
                <i className="ri-heart-fill text-2xl text-gray-400 cursor-pointer"></i>
              </div>

              {/* Property Info */}
              <div className="px-6 pb-4">
                <p className="text-lg font-medium">Red Carpet Real Estate</p>
                <p className="text-gray-500">
                  <i className="ri-map-pin-line"></i> 210 Zirak Road, Canada
                </p>
              </div>

              {/* Divider */}
              <hr className="bg-gray-300 h-[1px] border-none" />

              {/* Price & Type */}
              <div className="px-6 py-4 flex items-center justify-between">
                <button className="bg-green-500 text-white h-10 w-24 rounded-full"> $3,700 </button>
                <span className="text-gray-700">Apartment</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProperty;
