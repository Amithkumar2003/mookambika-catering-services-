import { useState, useEffect } from "react"

function Hero() {

  const images = [
    "https://images.unsplash.com/photo-1555244162-803834f70033",
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center text-center">

      {/* Background Images */}
      <div className="absolute inset-0">

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Catering"
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-40" : "opacity-0"
            }`}
          />
        ))}

      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6">

        <h1 className="text-5xl font-bold text-red-700 mb-6">
          Sri.Mookambika Catering Services
        </h1>

        <p className="text-xl text-gray-800 mb-8">
          Where Every Bite is a Delight
        </p>

        <div className="flex justify-center gap-6">

          <a
            href="#menu"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
          >
            View Menu
          </a>

          <a
            href="#contact"
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600"
          >
            Book Catering
          </a>

        </div>

      </div>

    </section>
  )
}

export default Hero