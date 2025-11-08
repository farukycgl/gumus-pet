import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1736586149588/ce6b05a7-5b45-419b-ad86-a146b1177da4.jpeg",
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1736586149588/ce6b05a7-5b45-419b-ad86-a146b1177da4.jpeg",
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1736586149588/ce6b05a7-5b45-419b-ad86-a146b1177da4.jpeg",
];

const SliderHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderHero;
