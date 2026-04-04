import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-red-700 mb-3">
            Book Our Catering
          </h2>
          <p className="text-gray-600">
            Let us make your event delicious and memorable
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Mookambika%20Catering%20Services&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-5 rounded-xl shadow-md space-y-4">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-600" />
                <a href="tel:+919876543210" className="text-gray-700">
                  +919480209088
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-600" />
                <a
                  href="https://wa.me/919480209088"
                  target="_blank"
                  className="text-gray-700"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-600 mt-1" />
                <p className="text-gray-700 text-sm">
                  Banashankari, Bengaluru, Karnataka
                </p>
              </div>

              {/* Social */}
              <div className="flex gap-5 pt-2 text-xl">
                <a
                  href="https://instagram.com/mookambika_catering_services"
                  target="_blank"
                  className="text-pink-500 hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white p-6 rounded-xl shadow-md">

            <form onSubmit={handleSubmit} className="grid gap-4">

              <input
                type="text"
                placeholder="Your Name"
                required
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="text"
                placeholder="Event Type (Wedding, Birthday...)"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="number"
                placeholder="Number of Guests"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="date"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>

              <button
                type="submit"
                className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Send Booking Request
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">

          <div className="bg-white p-8 rounded-xl text-center shadow-lg max-w-sm">

            <h3 className="text-2xl font-bold text-green-600 mb-3">
              ✔ Booking Request Sent
            </h3>

            <p className="text-gray-600 mb-5">
              Thank you! We will contact you shortly.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </section>
  );
}

export default Contact;