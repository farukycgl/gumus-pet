import React from "react";
import { FaCat, FaDog, FaCrow, FaFish, FaOtter } from "react-icons/fa";

const categories = [
  { id: "cat", label: "Kedi", icon: <FaCat /> },
  { id: "dog", label: "Köpek", icon: <FaDog /> },
  { id: "bird", label: "Kuş", icon: <FaCrow /> },
  { id: "fish", label: "Balık", icon: <FaFish /> },
  { id: "rodent", label: "Kemirgen", icon: <FaOtter /> },
];
const NavbarCategory = () => {
  return (
    <div className="flex justify-center gap-8 py-3 bg-white">
      {categories.map((c) => (
        <button
          key={c.id}
          className="
            flex justify-center items-center gap-2 
            text-gray-700 hover:text-rose-600 transition cursor-pointer
          "
        >
          {c.icon}
          <span className="text-sm font-medium">{c.label}</span>
        </button>
      ))}
    </div>
  );
};

export default NavbarCategory;
