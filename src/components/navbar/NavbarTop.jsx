import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const NavbarTop = () => {
  return (
    <div className="flex justify-start gap-5 bg-amber-200 px-10 py-3">
      <div className="flex justify-center items-center gap-2">
        <MdOutlinePhoneInTalk className="text-xl text-black" />
        <p>+9071238781923</p>
      </div>
      <div className="flex justify-center items-center gap-2 text-green-600">
        <BsWhatsapp className="text-xl" />
        <p>0326718731990</p>
      </div>
    </div>
  );
};

export default NavbarTop;
