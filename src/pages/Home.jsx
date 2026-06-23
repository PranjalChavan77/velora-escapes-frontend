import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import Offers from "../components/Offers";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <Offers />
      <Testimonial />
      <Newsletter />
    </>
  );
};

export default Home;
