import React from "react";
import SliderHero from "../components/home/SliderHero";
import ProductList from "../components/home/ProductList";

const Home = () => {
  return (
    <div className="bg-white flex flex-col gap-15">
      <SliderHero />
      <ProductList/>
    </div>
  );
};

export default Home;
