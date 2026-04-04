import { useState, useEffect } from "react";

const images = [
  "public/WhatsApp Image 2026-04-02 at 9.52.49 PM.jpeg",
  "public/WhatsApp Image 2026-04-02 at 9.51.58 PM.jpeg",
  "public/WhatsApp Image 2026-04-02 at 9.51.37 PM.jpeg",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen">

      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="food"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
  Celebrate Every Occasion with Authentic Flavours
</h1>

<p className="text-lg md:text-xl mb-6 max-w-2xl">
  Traditional South & North Indian Catering Crafted with Love
</p>

<p className="text-sm md:text-base max-w-xl">
  From weddings to corporate events, we serve rich, delicious meals that create unforgettable experiences.
</p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-2">

          <a
            href="tel:+9194802 09088"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/9194802 09088"
            target="_blank"
            className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-400"
          >
           Chat on WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;