import React from "react";
import ProductCard from "./ProductCard";

const products = [
    {
    id: 1,
    name: "Köpek Maması",
    price: 290,
    oldPrice: 350,
    image: "https://picsum.photos/300/200?random=1",
    description: "Yüksek proteinli premium mama.",
  },
  {
    id: 2,
    name: "Kedi Kumu",
    price: 140,
    oldPrice: 180,
    image: "https://picsum.photos/300/200?random=2",
    description: "Topaklanan koku önleyici kum.",
  },
  {
    id: 3,
    name: "Kuş Yemi",
    price: 65,
    oldPrice: 80,
    image: "https://picsum.photos/300/200?random=3",
    description: "Vitamin destekli yem karışımı.",
  },   {
    id: 4,
    name: "Köpek Maması",
    price: 290,
    oldPrice: 350,
    image: "https://picsum.photos/300/200?random=1",
    description: "Yüksek proteinli premium mama.",
  },
  {
    id: 5,
    name: "Kedi Kumu",
    price: 140,
    oldPrice: 180,
    image: "https://picsum.photos/300/200?random=2",
    description: "Topaklanan koku önleyici kum.",
  },
  {
    id: 6,
    name: "Kuş Yemi",
    price: 65,
    oldPrice: 80,
    image: "https://picsum.photos/300/200?random=3",
    description: "Vitamin destekli yem karışımı.",
  },   {
    id: 7,
    name: "Köpek Maması",
    price: 290,
    oldPrice: 350,
    image: "https://picsum.photos/300/200?random=1",
    description: "Yüksek proteinli premium mama.",
  },
  {
    id: 8,
    name: "Kedi Kumu",
    price: 140,
    oldPrice: 180,
    image: "https://picsum.photos/300/200?random=2",
    description: "Topaklanan koku önleyici kum.",
  },
  {
    id: 9,
    name: "Kuş Yemi",
    price: 65,
    oldPrice: 80,
    image: "https://picsum.photos/300/200?random=3",
    description: "Vitamin destekli yem karışımı.",
  },   {
    id: 10,
    name: "Köpek Maması",
    price: 290,
    oldPrice: 350,
    image: "https://picsum.photos/300/200?random=1",
    description: "Yüksek proteinli premium mama.",
  },
  {
    id: 11,
    name: "Kedi Kumu",
    price: 140,
    oldPrice: 180,
    image: "https://picsum.photos/300/200?random=2",
    description: "Topaklanan koku önleyici kum.",
  },
  {
    id: 12,
    name: "Kuş Yemi",
    price: 65,
    oldPrice: 80,
    image: "https://picsum.photos/300/200?random=3",
    description: "Vitamin destekli yem karışımı.",
  },
];

const ProductList = () => {
  return (
    <div>
      <div>
        <h2 className="pl-5 text-3xl font-bold">Ürünler</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            price={item.price}
            name={item.name}
            oldPrice={item.oldPrice}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
