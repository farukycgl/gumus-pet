import React from "react";

const ProductCard = ({name, image, price}) => {
  return <div>
    <img src={image} alt="" />
    <h2>{name}</h2>
    <p>{price}</p>
  </div>;
};

export default ProductCard;
