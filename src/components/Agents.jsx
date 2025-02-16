import React from "react";

const Agents = () => {
  const agents = [
    { id: 1, listings: "50 Listings", image: "./team-1.jpg", location: "Liverpool, Canada", name: "Sargam S. Singh" },
    { id: 2, listings: "70 Listings", image: "./team-2.jpg", location: "Montreal, Canada", name: "Harijeet M. Siller" },
    { id: 3, listings: "80 Listings", image: "./team-3.jpg", location: "Denver, USA", name: "Anna K. Young" },
    { id: 4, listings: "51 Listings", image: "./team-4.jpg", location: "Briarwood Drive, USA", name: "Michael P. Grimaldo" },
    { id: 5, listings: "42 Listings", image: "./team-2.jpg", location: "Briarwood Drive, USA", name: "Michael P. Grimaldo" },
    { id: 6, listings: "38 Listings", image: "./team-5.jpg", location: "Montreal, USA", name: "Adam K. Jollio" },
  ];

  return (
    <div className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <h1 className="text-center text-4xl font-semibold text-gray-800 mb-6">
          Our Featured Agents
        </h1>
        <p className="text-center max-w-2xl mx-auto text-gray-600">
          Finding the perfect home is easier with our expert real estate agents. They are dedicated to helping you buy, sell, or rent properties with ease.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 place-items-cente md:w-[100]">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="flex flex-col items-center text-center gap-y-4 p-10 shadow-lg bg-white rounded-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              {/* Listings Badge */}
              <span className="bg-gray-700 text-white px-5 py-2 rounded-3xl text-sm font-semibold">
                {agent.listings}
              </span>

              {/* Profile Image */}
              <div className="h-32 w-32 bg-white rounded-full shadow-xl overflow-hidden">
                <img src={agent.image} alt={agent.name} className="object-cover h-full w-full rounded-full" />
              </div>

              {/* Agent Info */}
              <span className="text-gray-500">{agent.location}</span>
              <h2 className="text-xl font-medium text-gray-800">{agent.name}</h2>

              {/* Social Media Icons */}
              <div className="flex items-center justify-center gap-3 mt-2">
                <i className="ri-facebook-fill text-gray-600 text-2xl bg-gray-400 h-10 w-10 p-1 rounded-4xl hover:text-blue-600 cursor-pointer"></i>
                <i className="ri-linkedin-fill text-gray-600 text-2xl bg-gray-400 h-10 w-10 p-1 rounded-4xl hover:text-blue-700 cursor-pointer"></i>
                <i className="ri-instagram-fill text-gray-600 text-2xl bg-gray-400 h-10 w-10 p-1 rounded-4xl hover:text-pink-500 cursor-pointer"></i>
                <i className="ri-twitter-fill text-gray-600 text-2xl bg-gray-400 h-10 w-10 p-1 rounded-4xl hover:text-blue-400 cursor-pointer"></i>
              </div>

              {/* Contact Buttons */}
              <div className="mt-5 flex gap-10">
                <button className="bg-green-500 text-white px-5 py-2 rounded-lg flex items-center gap-2  hover:bg-green-600">
                  <i className="ri-message-2-fill"></i> Message
                </button>
                <button className="bg-black text-white h-10 w-10 rounded-full hover:bg-gray-800">
                  <i className="ri-phone-fill text-lg"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
