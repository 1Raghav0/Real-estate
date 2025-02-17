import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import PropertyTypes from "./components/PropertyTypes";
import RecentProperty from "./components/RecentProperty";
import Awards from "./components/Awards";
import ExploreLocation from "./components/ExploreLocation";
import Agents from "./components/Agents";
import Packages from "./components/Packages";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <About />
              <PropertyTypes />
              <RecentProperty />
              <Awards />
              <ExploreLocation />
              <Agents />
              <Packages />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/services"
          element={
            <>
              <PropertyTypes />
              <RecentProperty />
            </>
          }
        />
        <Route path="/blog" element={<ExploreLocation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
