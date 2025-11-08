import React from "react";
import SliderHero from "../components/home/SliderHero";
import ProductList from "../components/home/ProductList";

const Home = () => {
  return (
    <div className="bg-gray-300 flex flex-col gap-3">
      <SliderHero />
      <ProductList/>
    </div>
  );
};

export default Home;
