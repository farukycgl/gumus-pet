import React from 'react'
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Kahve",
    price: 45,
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    name: "Çikolata",
    price: 60,
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    name: "Kek",
    price: 35,
    image: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 4,
    name: "Tatlı",
    price: 50,
    image: "httpsum.photos/300/200?random=4",
  },
  {
    id: 5,
    name: "Kurabiye",
    price: 25,
    image: "https://picsum.photos/300/200?random=5",
  },
  {
    id: 6,
    name: "Meyve Suyu",
    price: 30,
    image: "https://picsum.photos/300/200?random=6",
  },
  {
    id: 7,
    name: "Soda",
    price: 15,
    image: "https://picsum.photos/300/200?random=7",
  },
  {
    id: 8,
    name: "Pasta",
    price: 120,
    image: "https://picsum.photos/300/200?random=8",
  },
  {
    id: 9,
    name: "Dondurma",
    price: 40,
    image: "https://picsum.photos/300/200?random=9",
  },
  {
    id: 10,
    name: "Sandviç",
    price: 55,
    image: "https://picsum.photos/300/200?random=10",
  },
];


const ProductList = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4'>
      {products.map((item)=> (
        <ProductCard key={item.id} image={item.image} price={item.price} name={item.name}/>
      ))}
    </div>
  )
}

export default ProductList
