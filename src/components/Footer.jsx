function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left - About */}
        <div>
          <h2 className="text-xl font-bold mb-3">
            Sri Mookambika Catering Service
          </h2>

          <p className="text-gray-300 text-sm">
            We provide high-quality catering services for all types of events.
            Our goal is to deliver delicious food and unforgettable experiences.
          </p>
        </div>

        {/* Middle - Address */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Address
          </h3>

          <p className="text-gray-300 text-sm">
            Mookambika Catering Services,<br />
            917/1, 7th Main Rd,<br />
            Raghavendra Block, Srinagar,<br />
            Banashankari, Bengaluru,<br />
            Karnataka 560050
          </p>
        </div>

        {/* Right - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#menu" className="hover:text-yellow-400">Menu</a></li>
            <li><a href="#gallery" className="hover:text-yellow-400">Gallery</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center mt-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} Mookambika Catering Services. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;