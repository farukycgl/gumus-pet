import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between bg-amber-100 h-full py-5 px-50 gap-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold mb-1">Adres Bilgileri</h2>
        <p className="text-lg">Meltem Mah. 899 sok. İzmir Apartmanı No:13 </p>
        <p className="text-lg">Muratpaşa/ANTALYA</p>
      </div>
      <div className="flex justify-between items-center gap-3 pl-20 pr-20">
        <Link>
          <FaInstagram className="text-3xl text-red-700" />
        </Link>
        <Link>
          <FaSquareWhatsapp className="text-3xl text-green-600" />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-600">© 2025 <strong>gumuspetshopantalya.com</strong> - Tüm hakları saklıdır.</p>
      </div>
    </div>
  );
};

export default Footer;
