import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import AboutPage from "./AboutPage";
import Products from "./ProductPage";
import ImpactPage from "./ImpactPage";
import ContactForm from "./ContactForm";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutPage />
      <Products />
      <ImpactPage />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default HomePage;
