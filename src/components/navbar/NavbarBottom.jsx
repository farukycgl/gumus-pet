import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const NavbarBottom = () => {
  return (
    <div className="px-10 py-3 bg-gray-200">
      <div className="flex justify-between">
        <div>
          <h2 className="text-4xl">GÜMÜŞ PetShop</h2>
        </div>
        <div className="flex justify-center items-center gap-1">
          <input type="text" className="border-amber-400 bg-white rounded-2xl" />
          <button className="cursor-pointer">
            <CiSearch className="text-xl"/>
          </button>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Link to="/" className="flex justify-center items-center gap-2">
            {" "}
            <IoHomeOutline className="text-xl"/> Anasayfa
          </Link>
          <Link to="/iletisim">İletişim</Link>
          <Link to="/hakkimizda">Hakkımızda</Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
