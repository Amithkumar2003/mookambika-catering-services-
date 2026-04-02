import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white fixed w-full z-50 shadow-md">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">

  {/* Logo Circle */}
  <div className="relative w-12 h-12 md:w-14 md:h-14 bg-red-700 rounded-full flex items-center justify-center shadow-lg">

    {/* Top M */}
    <span className="absolute top-1 text-white text-xs md:text-sm font-bold">
      M
    </span>

    {/* Left M */}
    <span className="absolute left-1 top-1/2 -translate-y-1/2 text-white text-xs md:text-sm font-bold">
      M
    </span>

    {/* Right S */}
    <span className="absolute right-1 top-1/2 -translate-y-1/2 text-white text-xs md:text-sm font-bold">
      S
    </span>

    {/* Bottom S */}
    <span className="absolute bottom-1 text-white text-xs md:text-sm font-bold">
      S
    </span>

    {/* Center C */}
    <span className="text-yellow-400 text-sm md:text-lg font-bold">
      C
    </span>

  </div>

</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-lg">
            <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
            <li><a href="#menu" className="hover:text-yellow-300">Menu</a></li>
            <li><a href="#gallery" className="hover:text-yellow-300">Gallery</a></li>
            <li><a href="#about" className="hover:text-yellow-300">About</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-600 text-white shadow-lg">

          <div className="flex flex-col items-center space-y-4 py-4 text-lg">

            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
            <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;