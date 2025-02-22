const HeroSection = () => {
  return (
    <>
        <div className="relative w-full h-screen flex items-center justify-center  bg-gradient-to-tr from-slate-900 to-zinc-500 bg-cover"> 
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-opacity-10"></div>

      <div className="relative text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold">Search Your <br /> Next Home</h1>
        <p className="text-lg mt-4">Find new & featured property located in your local city.</p>

        {/* Search Box */}
        <div className="mt-8 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-2 w-full max-w-3xl mx-auto flex-wrap">
          <div className="flex-1">
            <label className="text-gray-700 text-sm">City/Street</label>
            <input type="text" placeholder="Location" className="w-full p-2 border rounded text-gray-500 placeholder:text-gray-500" />
          </div>

          <div className="flex-1">
            <label className="text-gray-700 text-sm">Property Type</label>
            <select className="w-full p-2 border rounded text-gray-500">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Villa</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="text-gray-500 text-sm">Price Range</label>
            <select className="w-full p-2 border rounded text-gray-500">
              <option>Price Range</option>
              <option>$500 - $1000</option>
              <option>$1000 - $5000</option>
              <option>$5000+</option>
            </select>
          </div>

          <button className="bg-green-500 p-3 mt-6 rounded text-white flex items-center justify-center">Search
          </button>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default HeroSection;
