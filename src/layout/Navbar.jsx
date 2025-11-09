import React from "react";
import NavbarTop from "../components/navbar/NavbarTop";
import NavbarBottom from "../components/navbar/NavbarBottom";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <NavbarTop />
      <NavbarBottom />
    </div>
  );
};

export default Navbar;
