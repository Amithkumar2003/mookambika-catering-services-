function Footer() {
  return (
    <footer className="bg-red-700 text-white py-10">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Business Name */}
        <h2 className="text-2xl font-bold mb-2">
          Sri.Mookambika Catering Services
        </h2>

        <p className="mb-6 text-gray-200">
          Where Every Bite is a Delight
        </p>

        {/* Footer Navigation */}
        <div className="flex justify-center flex-wrap gap-6 mb-6 text-lg">

          <a href="#home" className="hover:text-yellow-300">Home</a>
          <a href="#services" className="hover:text-yellow-300">Services</a>
          <a href="#menu" className="hover:text-yellow-300">Menu</a>
          <a href="#gallery" className="hover:text-yellow-300">Gallery</a>
          <a href="#about" className="hover:text-yellow-300">About</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>

        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Mookambika Catering Services. All Rights Reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer