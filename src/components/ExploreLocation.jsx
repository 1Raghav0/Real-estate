import React from "react";

const PropertyGrid = () => {
  const properties = [
    { id: 1, location: "New Orleans, Louisiana", villas: "10 Villas", offices: "07 Houses", apartments: "10 Apartments", image: "./city-2.png" },
    { id: 2, location: "Los Angeles, California", villas: "4 Luxury Villas", offices: "05 Houses", apartments: "12 Apartments", image: "./city-3.png" },
    { id: 3, location: "Miami, Florida", villas: "5 Beach Villas", offices: "03 Houses", apartments: "07 Apartments", image: "./city-4.png" },
    { id: 4, location: "Montreal, Canada", villas: "8 Villas", offices: "10 Houses", apartments: "03 Apartments", image: "./city-5.png" },
    { id: 5, location: "NewYork, United States", villas: " 10 Villas", offices: "07 Houses", apartments: "04 Apartments", image: "./city-6.png" },
    { id: 6, location: "California, USA", villas: "6   Villas", offices: "09 Houses", apartments: "08 Apartments", image: "./city-1.png" },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-300 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Discover Your Dream Property
        </h2>

        {/* Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {properties.map((property) => (
            <div key={property.id} className="relative h-auto w-full md:w-80 rounded-lg shadow-2xl overflow-hidden hover:shadow-lg 
       transition-transform duration-300 hover:scale-105 cursor-pointer">
              {/* Image */}
              <img src={property.image} alt="Property" className="object-cover w-full h-60 rounded-lg" />

              {/* Overlay */}
              <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-center bg-gray-800 opacity-60 h-40 w-[80%] p-4 rounded-lg shadow-lg text-white">
                <p className="mt-4 text-lg font-semibold">{property.location}</p>
                <div className="flex flex-wrap justify-center gap-2 font-medium mt-3">
                  <span className="">{property.villas}</span>
                  <span className="rounded-md">{property.offices}</span>
                  <span className="">{property.apartments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyGrid;

