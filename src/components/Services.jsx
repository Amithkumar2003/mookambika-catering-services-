function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-red-700 mb-12">
          Our Catering Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {/* Wedding Catering */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
              alt="Wedding Catering"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Wedding Catering</h3>
              <p className="text-gray-600">
                Elegant catering services for unforgettable wedding celebrations.
              </p>
            </div>
          </div>

          {/* Birthday Catering */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img
              src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3"
              alt="Birthday Party"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Birthday Parties</h3>
              <p className="text-gray-600">
                Delicious food and professional service for birthday parties.
              </p>
            </div>
          </div>

          {/* Corporate Events */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Corporate Catering"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Corporate Events</h3>
              <p className="text-gray-600">
                High-quality catering for corporate meetings and events.
              </p>
            </div>
          </div>

          {/* Outdoor Catering */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0"
              alt="Outdoor Catering"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Outdoor Catering</h3>
              <p className="text-gray-600">
                Professional outdoor catering for all types of events.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Services