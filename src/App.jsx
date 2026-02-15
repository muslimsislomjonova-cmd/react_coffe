import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Collection from "./pages/Collection";
import WhyChooseUs from "./pages/WhyChooseUs";
// import HowItWork from "./pages/HowItWork";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import About from "./pages_2/About";

import "./App.css";


const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Collection />
      <WhyChooseUs />
      {/* <HowItWork />
       */}
      <Footer />
  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;