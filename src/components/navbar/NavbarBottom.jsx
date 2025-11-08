import React from "react";
import { CiSearch } from "react-icons/ci";


const NavbarBottom = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2>Gumus Petshop</h2>
        </div>
        <div>
          <input type="text" className="border-amber-400 rounded-2xl" />
          <button>
            <CiSearch />
          </button>
        </div>
        <div>en sag</div>
      </div>
    </div>
  );
};

export default NavbarBottom;

