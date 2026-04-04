function About() {
  return (
  <section id="about" className="py-16 md:py-20 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipO4jzuIdCamDTOpK4ge75qcQQ8I9Kx6vD_Of1LZ=s1360-w1360-h1020-rw"
            alt="about"
            className="rounded-xl shadow-md w-full h-80 object-cover hover:scale-105 transition"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Us
          </h2>

          <p className="text-gray-600 mb-4">
            Sri Mookambika Catering Services is a trusted name in delivering
            authentic South Indian and North Indian vegetarian cuisine for all
            types of events. We combine traditional recipes with quality ingredients
            to serve delicious and memorable meals.
          </p>

          <p className="text-gray-600 mb-4">
            With years of experience, we specialize in weddings, corporate events,
            birthday parties, and special occasions. Our team is committed to
            providing excellent service, hygienic preparation, and a seamless
            catering experience.
          </p>

          <p className="text-gray-600 mb-4">
            Every dish is prepared with care, maintaining high standards of taste,
            hygiene, and presentation. We ensure that your guests enjoy every bite
            and leave with a lasting impression.
          </p>

          <p className="text-gray-600 mb-6">
            Whether it’s a small gathering or a grand celebration, we offer
            customized menu options to match your needs and make your event
            truly special.
          </p>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-red-600">
              Why Choose Us?
            </h3>

            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> 100% Pure Vegetarian & Hygienic Food
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Authentic South & North Indian Taste
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Customized Menu for Every Event
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Experienced & Professional Team
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Affordable Pricing with Quality Service
              </li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;