import React from "react";

const PropertyTypes = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center  h-full w-auto p-20 bg-amber-100 ">
        <h1 className="text-5xl">Featured Property</h1>
        <h1 className="text-5xl mb-6">Types</h1>
        <h4 className="text-gray-600 text-xl mb-6">
          Find All Type of Property.
        </h4>
        <div className="flex items-center justify-center gap-x-8 gap-y-8 flex-wrap  ">
          <div
            className="h-60 w-auto border-gray-200 bg-white shadow-lg p-10 rounded-lg hover:shadow-lg 
       transition-transform duration-300 hover:scale-105"
          >
            <img src="./h1.png" alt="" className="h-12 w-12 mb-4" />
            <p>
              Family <br />
              House
            </p>
            <p>
              &nbsp;&nbsp;122 <br /> Property
            </p>
          </div>
          <div
            className="h-60 w-auto border-gray-200 bg-white shadow-lg p-10 rounded-lg hover:shadow-lg 
       transition-transform duration-300 hover:scale-105"
          >
            <img src="./h2.png" alt="" className="h-12 w-12 mb-4" />
            <p>
              Family <br />
              House
            </p>
            <p>
              &nbsp;&nbsp;122 <br /> Property
            </p>
          </div>
          <div
            className="h-60 w-auto border-gray-200 bg-white shadow-lg p-10 rounded-lg hover:shadow-lg 
       transition-transform duration-300 hover:scale-105"
          >
            <img src="./h3.png" alt="" className="h-12 w-12 mb-4" />
            <p>
              Family <br />
              House
            </p>
            <p>
              &nbsp;&nbsp;122 <br /> Property
            </p>
          </div>
          <div
            className="h-60 w-auto border-gray-200 bg-white shadow-lg p-10 rounded-lg hover:shadow-lg 
       transition-transform duration-300 hover:scale-105"
          >
            <img src="./h4.png" alt="" className="h-12 w-12 mb-4" />
            <p>
              Family <br />
              House
            </p>
            <p>
              &nbsp;&nbsp;122 <br /> Property
            </p>
          </div>
          <div
            className="h-60 w-auto border-gray-200 bg-white shadow-lg p-10 rounded-lg hover:shadow-lg 
       transition-transform duration-300 hover:scale-105"
          >
            <img src="./h5.png" alt="" className="h-12 w-12 mb-4" />
            <p>
              Family <br />
              House
            </p>
            <p>
              &nbsp;&nbsp;122 <br /> Property
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyTypes;
