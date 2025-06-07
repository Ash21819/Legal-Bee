import React from "react";

export default function Contactus() {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Have questions or need assistance? Fill out the form or reach us directly through the following.
            </p>

            <ul className="space-y-4 text-gray-700 text-sm">
              <li>
                <strong>Address:</strong> 123 Business Street, Aligarh, India
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@legalbee.com" className="text-blue-500 hover:underline">
                  info@legalbee.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919876543210" className="text-blue-500 hover:underline">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <strong>Hours:</strong> Mon - Sat, 10:00 AM - 6:00 PM
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Optional: Map Section */}
        <div className="mt-12">
          <iframe
            className="w-full h-64 rounded-lg shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.0756217653217!2d78.08812021481232!3d27.897394782713337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUzJzUyLjYiTiA3OMKwMDUnMTcuMyJF!5e0!3m2!1sen!2sin!4v1622116933604!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
