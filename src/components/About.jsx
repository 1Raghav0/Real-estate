

const About = () => {
  return (
    <div className="w-full bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your trusted real estate partner – helping you find, buy, or rent your dream property with ease.
        </p>
      </div>

      {/* Section - Who We Are */}
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Who We Are</h2>
        <p className="text-gray-600 text-lg mt-4 text-center">
          Welcome to <span className="text-green-600 font-semibold">RentUP</span>, your go-to destination for finding the perfect property.
          Whether you are looking to <strong>buy, sell, or rent</strong>, we provide a seamless and hassle-free experience tailored to your needs.
        </p>
      </div>

      {/* Section - Why Choose Us */}
      <div className="max-w-6xl mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">🏡 Extensive Listings</h3>
          <p className="text-gray-600 mt-2">Find a variety of properties, from cozy apartments to luxurious villas.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">🤝 Expert Agents</h3>
          <p className="text-gray-600 mt-2">Our professionals guide you at every step for a smooth transaction.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">✅ Verified Properties</h3>
          <p className="text-gray-600 mt-2">We ensure only legally approved and high-quality listings.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">📍 Smart Search</h3>
          <p className="text-gray-600 mt-2">Filter by location, budget, and amenities to find your perfect home.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">🔒 Secure Transactions</h3>
          <p className="text-gray-600 mt-2">A safe and trustworthy platform for buying, selling, and renting.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-800">💼 Commercial Spaces</h3>
          <p className="text-gray-600 mt-2">Find offices, retail spaces, and commercial properties effortlessly.</p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="max-w-5xl mx-auto text-center mt-16 bg-green-600 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold">Join Us Today!</h2>
        <p className="text-lg mt-2">
          Discover your dream property with <span className="font-semibold">RentUP</span> – where finding a home is easier than ever!
        </p>
        <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Explore Listings
        </button>
      </div>
    </div>
  );
};

export default About;
