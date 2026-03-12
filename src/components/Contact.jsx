import { useState } from "react"
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from "react-icons/fa"

function Contact() {

  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowPopup(true)
  }

  return (
    <section id="contact" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-red-700 mb-12">
          Book Our Catering
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Mookambika%20Catering%20Services&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div>

            <form onSubmit={handleSubmit} className="grid gap-4 mb-6">

              <input
                type="text"
                placeholder="Your Name"
                required
                className="p-3 border rounded-lg focus:outline-red-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="p-3 border rounded-lg focus:outline-red-500"
              />

              <input
                type="text"
                placeholder="Event Type"
                className="p-3 border rounded-lg focus:outline-red-500"
              />

              <input
                type="number"
                placeholder="Number of Guests"
                className="p-3 border rounded-lg focus:outline-red-500"
              />

              <input
                type="date"
                className="p-3 border rounded-lg focus:outline-red-500"
              />

              <textarea
                placeholder="Message"
                className="p-3 border rounded-lg focus:outline-red-500"
              ></textarea>

              <button
                type="submit"
                className="bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
              >
                Send Booking Request
              </button>

            </form>

            {/* Contact Icons */}
            <div className="flex gap-6 text-2xl">

              <a
                href="tel:+919876543210"
                className="text-red-600 hover:scale-110 transition"
              >
                <FaPhoneAlt />
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="text-green-500 hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

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

      </div>

      {/* Popup Confirmation */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">

          <div className="bg-white p-8 rounded-xl text-center shadow-lg">

            <h3 className="text-2xl font-bold text-green-600 mb-4">
              ✔ Booking Request Sent
            </h3>

            <p className="mb-4">
              Thank you! We will contact you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </section>
  )
}

export default Contact