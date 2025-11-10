import React from "react";
import SliderHero from "../components/home/SliderHero";
import ProductList from "../components/home/ProductList";
import Brands from "../components/home/Brands";

const Home = () => {
  return (
    <div className="bg-white flex flex-col gap-15">
      <SliderHero />
      <Brands/>
      <ProductList/>
    </div>
  );
};

export default Home;
