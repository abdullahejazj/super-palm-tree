import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/img/logo.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-60 flex justify-between items-center py-4">
      <div>
        <Image src={logo} width={200} height={200} alt="Logo" />
      </div>
      <div className="md:hidden">
        {/* Menu icon for small screens */}
        <button onClick={handleToggleMenu}>
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div
        className={`md:flex gap-5 items-center ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="cursor-pointer">YouTube Downloader</div>
        <div className="cursor-pointer">YouTube to MP3</div>
      </div>
    </div>
  );
};

export default Header;
