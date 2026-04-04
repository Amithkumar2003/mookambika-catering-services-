import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-red-600/90 backdrop-blur-md text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">

<div className="flex items-center gap-1">
        {/* Logo */}
        <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full grid grid-cols-3 grid-rows-3 place-items-center text-red-700 font-bold shadow-lg border border-white">
  {/* Top */}
  <span className="col-start-2 row-start-1 text-[14px]">M</span>

  {/* Left */}
  <span className="col-start-1 row-start-2 text-[15px]">M</span>

  {/* Center */}
  <span className="col-start-2 row-start-2 text-base font-bold">C</span>

  {/* Right */}
  <span className="col-start-3 row-start-2 text-[15px]">S</span>

  {/* Bottom */}
  <span className="col-start-2 row-start-3 text-[15px]">S</span>

</div>

 <div className="leading-tight ml-1">
    <h1 className="text-sm md:text-lg font-semibold">
      Sri. Mookambika Catering Services
    </h1>
    <p className="text-[10px] md:text-xs text-yellow-200">
      Where Every Bite Is Delight...
    </p>
  </div>

 </div>
   
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
          <li><a href="#menu" className="hover:text-yellow-300">Menu</a></li>
          <li><a href="#gallery" className="hover:text-yellow-300">Gallery</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
  <div className="md:hidden bg-red-700 px-6 py-4 flex flex-col items-center space-y-4 text-center">

    <a href="#home" onClick={() => setMenuOpen(false)} className="block w-full">
      Home
    </a>

    <a href="#services" onClick={() => setMenuOpen(false)} className="block w-full">
      Services
    </a>

    <a href="#menu" onClick={() => setMenuOpen(false)} className="block w-full">
      Menu
    </a>

    <a href="#gallery" onClick={() => setMenuOpen(false)} className="block w-full">
      Gallery
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)} className="block w-full">
      About
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)} className="block w-full">
      Contact
    </a>

  </div>
)}
    </nav>
  );
}

export default Navbar;