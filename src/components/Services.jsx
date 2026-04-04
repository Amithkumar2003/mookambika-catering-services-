import { FaUtensils, FaGlassCheers, FaLeaf } from "react-icons/fa";

function Services() {
  const services = [
  {
    icon: <FaGlassCheers size={30} />,
    title: "Wedding Catering",
    desc: "Grand traditional catering services for weddings with authentic flavors.",
  },
  {
    icon: <FaUtensils size={30} />,
    title: "Corporate Catering",
    desc: "Professional catering solutions for meetings, offices, and corporate events.",
  },
  {
    icon: <FaGlassCheers size={30} />,
    title: "Birthday Parties",
    desc: "Delicious food arrangements to make your celebrations joyful and memorable.",
  },
  {
    icon: <FaLeaf size={30} />,
    title: "South Indian Cuisine",
    desc: "Authentic South Indian meals prepared with traditional recipes.",
  },
  {
    icon: <FaUtensils size={30} />,
    title: "Andhra Style",
    desc: "Spicy and flavorful Andhra-style dishes loved for their rich taste.",
  },
  {
    icon: <FaLeaf size={30} />,
    title: "Tamil Style",
    desc: "Traditional Tamil Nadu dishes with homely taste and quality.",
  },
];

  return (
   <section id="services" className="py-16 md:py-20 bg-gray-100">

      {/* Heading */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We provide high-quality catering services tailored for every occasion.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">

        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
          >
            <div className="text-red-600 mb-4 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;