import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import AboutUs from "../../components/Aboutus";
import Products from "../../components/Products";
import Process from "../../components/Process";
import Services from "../../components/Services";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Products />
      <Process />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
