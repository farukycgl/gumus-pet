import React from "react";
import NavbarTop from "../components/navbar/NavbarTop";
import NavbarBottom from "../components/navbar/NavbarBottom";
import NavbarCategory from "../components/navbar/NavbarCategory";

const Navbar = () => {
  return (
    <div className="flex flex-col fixed top-0 left-0 w-full z-50 bg-white shadow">
      <NavbarTop />
      <NavbarBottom />
      <NavbarCategory/>
    </div>
  );
};

export default Navbar;
