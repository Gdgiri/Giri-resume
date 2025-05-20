import React from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Message sent!");
  };

  return (
    <div
      className="bg-cover bg-center py-10"
      style={{ backgroundImage: 'url("/path/to/your/background.jpg")' }} // Add your background image URL here
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-6 drop-shadow-lg">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-2xl transform transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 drop-shadow-lg">
              <span className="text-red-600 font-bold">Get</span>{" "}
              <span className="text-red-600 font-bold">in Touch</span>
            </h3>
            <p className="mb-6 text-gray-700">
              Feel free to reach out to me through any of the following methods:
            </p>
            <ContactInfo />
          </div>

          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-2xl transform transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 drop-shadow-lg">
              <span className="text-blue-600 font-bold">Send</span>{" "}
              <span className="text-blue-600 font-bold">a Message</span>
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-blue-500 transition"
                  rows="4"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = () => (
  <>
    <ContactDetail
      icon={<SiGmail className="text-red-600 mr-2" />}
      label="Gmail"
      link="https://mail.google.com/mail/?view=cm&fs=1&to=giridharan831@gmail.com"
      text="giridharan831@gmail.com"
    />
    <ContactDetail
      icon={<FaPhone className="text-blue-500 mr-2" />}
      label="Phone"
      link="tel:+91 9715424895"
      text="9715424895"
    />
    <ContactDetail
      icon={<FaWhatsapp className="text-green-500 mr-2" />}
      label="WhatsApp"
      link="https://wa.me/9715424895"
      text="9715424895"
    />
    <ContactDetail
      icon={<FaLinkedin className="text-blue-700 mr-2" />}
      label="LinkedIn"
      link="https://www.linkedin.com/in/giridharan-sivaramakrishnan-91353b333"
      text="giridharansivaramakrishnan"
    />
    <ContactDetail
      icon={<FaGithub className="mr-2" />}
      label="GitHub"
      link="https://github.com/Gdgiri"
      text="GDgiri"
    />
    <div className="flex items-center">
      <FaMapMarkerAlt className="text-blue-500 mr-2" />
      <span>Location: Devakottai, Tamil Nadu, India</span>
    </div>
  </>
);

const ContactDetail = ({ icon, label, link, text }) => (
  <div className="flex items-center mb-4">
    {icon}
    <span>
      {label}:{" "}
      <a
        href={link}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </span>
  </div>
);

export default Contact;
