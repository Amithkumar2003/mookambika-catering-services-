function Menu() {
  return (
    <section id="menu" className="relative py-20">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')"
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-90"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-red-700 mb-16">
          Our Catering Menu
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {/* Welcome Drinks */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Welcome Drinks
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>Pine Apple Juice</li>
              <li>Apple Juice</li>
              <li>Mango Juice</li>
              <li>Grape Juice</li>
              <li>Watermelon Juice</li>
              <li>Moosambi Juice</li>
              <li>Musk Melon Juice</li>
              <li>Lime Juice</li>
              <li>Pudina Juice</li>
              <li>Fruit Punch</li>
              <li>Badam Milk</li>
              <li>Sweet Lassi</li>
              <li>Jaljeera</li>
            </ul>
          </div>

          {/* Soups */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Soups
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>Tomato Soup</li>
              <li>Cream of Tomato Soup</li>
              <li>Roasted Tomato Soup</li>
              <li>Carrot Soup</li>
              <li>French Onion Soup</li>
              <li>Minestrone Soup</li>
              <li>Mushroom Soup</li>
              <li>Spinach Soup</li>
              <li>Sweet Corn Soup</li>
              <li>Hot and Sour Soup</li>
              <li>Manchow Soup</li>
              <li>Veg Clear Soup</li>
            </ul>
          </div>

          {/* Breads */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Breads / Roti
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>Kulcha</li>
              <li>Garlic Kulcha</li>
              <li>Butter Roti</li>
              <li>Rumali Roti</li>
              <li>Naan</li>
              <li>Butter Naan</li>
              <li>Parota</li>
              <li>Aloo Parota</li>
              <li>Lacha Parota</li>
              <li>Paneer Parota</li>
            </ul>
          </div>

          {/* Assorted Rice */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Assorted Rice
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>Veg Palav</li>
              <li>Tomato Rice</li>
              <li>Lemon Rice</li>
              <li>Coconut Rice</li>
              <li>Curd Rice</li>
              <li>Veg Dum Biryani</li>
              <li>Hyderabadi Dum Biryani</li>
              <li>Veg Fried Rice</li>
              <li>Jeera Rice</li>
            </ul>
          </div>

          {/* Gravy */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Gravy & Curry
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>Veg Kolhapuri</li>
              <li>Veg Kadai</li>
              <li>Veg Malai Kurma</li>
              <li>Paneer Butter Masala</li>
              <li>Paneer Kadai</li>
              <li>Palak Paneer</li>
              <li>Channa Masala</li>
              <li>Rajma Masala</li>
              <li>Dal Fry</li>
              <li>Punjabi Dal</li>
            </ul>
          </div>

          {/* Sweets */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Sweets
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>Rasmalai</li>
              <li>Angoor Malai</li>
              <li>Basundi</li>
              <li>Mango Malai</li>
              <li>Angoor Rabadi</li>
              <li>Jalebi Rabadi</li>
              <li>Rasgulla</li>
              <li>Gulab Jamun</li>
              <li>Kaju Katli</li>
              <li>Badam Burfi</li>
              <li>Pista Roll</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Menu