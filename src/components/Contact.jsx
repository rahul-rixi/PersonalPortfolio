import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import EmailJS SDK

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('All fields are required.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    emailjs
      .send(
        'service_569uase', // Replace with your service ID
        'template_tr9hijd', // Replace with your template ID
        formData,
        'XAgbg7uGftTxufGTw' // Replace with your user ID (Public Key)
      )
      .then(
        () => {
          setIsLoading(false);
          setIsPopupVisible(true);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error(error.text);
          setIsLoading(false);
          setErrorMessage('Failed to send the message. Please try again.');
        }
      );
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div id="contact" className="min-h-screen bg-black text-white p-5 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-10 text-[#109FE7]">Contact Me</h1>
      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-8 cursor-default">
          <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mb-6"></div>
          <p className="mb-6">We'd love to hear from you. Reach out to us via any of the contact methods below.</p>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-xl text-blue-500 mr-3" />
            <div>
              <p>Phone</p>
              <p><a href="tel:+916204920113" className="hover:underline">+91 6204920113</a></p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <a href="mailto:rahulkumar.chouhan007@gmail.com" className="hover:underline">
              <FaEnvelope className="text-xl text-blue-500 mr-3" />
            </a>
            <div>
              <p>Email</p>
              <p><a href="mailto:rahulkumar.chouhan007@gmail.com" className="hover:underline">rahulkumar.chouhan007@gmail.com</a></p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-xl text-blue-500 mr-3" />
            <div>
              <p>Location</p>
              <p>Nawada, Bihar</p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8 mt-8 md:mt-16">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              aria-label="Your Name"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              aria-label="Email"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Describe project..."
              aria-label="Your Message"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mt-6"
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Message Sent Successfully!</h3>
            <p>Thank you for contacting us. We'll get back to you soon.</p>
            <button
              onClick={closePopup}
              className="mt-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactMe;
