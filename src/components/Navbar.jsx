function Navbar() {
  return (
    <nav className="bg-red-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="bg-red-800 rounded-full p-3">
          <div className="grid grid-cols-3 grid-rows-3 gap-1 w-16 h-16 place-items-center font-bold">

            <div></div>
            <div className="text-lg">M</div>
            <div></div>

            <div className="text-lg">M</div>
            <div className="text-2xl text-yellow-400">C</div>
            <div className="text-lg">S</div>

            <div></div>
            <div className="text-lg">S</div>
            <div></div>

          </div>
        </div>

        {/* Navigation */}
        <ul className="flex space-x-8 text-lg">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-300">Services</a></li>
          <li><a href="#menu" className="hover:text-yellow-300">Menu</a></li>
          <li><a href="#gallery" className="hover:text-yellow-300">Gallery</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar