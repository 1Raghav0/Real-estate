import React from "react";

const Packages = () => {
  const plans = [
    { id: 1, title: "Basic", price: "$29", type: "Per user, per month" },
    { id: 2, title: "Standard", price: "$49", type: "Best for growing businesses" },
    { id: 3, title: "Platinum", price: "$69", type: "Premium plan with all features" },
  ];

  return (
    <div className="w-full bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Select Your <br /> Package
        </h1>
        <p className="text-lg text-gray-600">
          Move In with Ease – Fully Furnished & Budget-Friendly Rentals
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-gray-800">{plan.title}</h2>
            <span className="text-4xl font-bold text-green-600 mt-2">{plan.price}</span>
            <span className="text-gray-500 mt-1">{plan.type}</span>

            {/* Features Section */}
            <div className="mt-4 space-y-3 w-full text-center">
              <div className="flex items-center gap-6">
                <i className="ri-check-double-line text-green-500 text-xl"></i>
                <span className="text-gray-700">99.5% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-6">
                <i className="ri-check-double-line text-green-500 text-xl"></i>
                <span className="text-gray-700">120GB CDN Bandwidth</span>
              </div>
              <div className="flex items-center gap-6">
                <i className="ri-check-double-line text-green-500 text-xl"></i>
                <span className="text-gray-700">5GB Cloud Storage</span>
              </div>
              <div className="flex items-center gap-6">
                <i className="ri-close-fill text-red-500 text-xl"></i>
                <span className="text-gray-700">Personal Help Support</span>
              </div>
              <div className="flex items-center gap-6">
                <i className="ri-close-fill text-red-500 text-xl"></i>
                <span className="text-gray-700">Enterprise SLA</span>
              </div>
            </div>

            {/* Button */}
            <button className="mt-6 bg-green-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-green-600">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
