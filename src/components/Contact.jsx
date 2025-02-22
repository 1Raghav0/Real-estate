import  { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_720gg34"; 
    const templateID = "template_d4d785f"; 
    const publicKey = "jqsjBfTjjL8tFcx5a"; 

    const emailParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, emailParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" }); // Clear form after submission
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="w-full bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Get In Touch 📩
        </h1>
        <p className="text-center max-w-2xl mx-auto text-gray-600">
          Have any questions? Fill out the form below and our team will get back to you soon!
        </p>

        {/* Contact Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message 📝</h2>

            {isSent && <p className="text-green-600 font-bold text-center">✅ Message Sent Successfully!</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 h-32 transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information <i className="ri-phone-fill text-2xl"></i></h2>
            <p className="text-gray-600">Reach out to us via phone, email, or visit our office.</p>

            <div className="mt-4 space-y-4">
              <p className="flex items-center text-gray-700">
                <i className="ri-map-pin-line text-green-500 text-2xl mr-2"></i>
                123 Real Estate St, New York, USA
              </p>
              <p className="flex items-center text-gray-700">
                <i className="ri-mail-line text-green-500 text-2xl mr-2"></i>
                raghav514422@gmail.com
              </p>
              <p className="flex items-center text-gray-700">
                <i className="ri-phone-line text-green-500 text-2xl mr-2"></i>
                +91 6397258224
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="mt-6 flex space-x-4 text-gray-600">
              <i className="ri-facebook-circle-fill text-3xl hover:text-blue-600 cursor-pointer transition"></i>
              <i className="ri-instagram-line text-3xl hover:text-pink-600 cursor-pointer transition"></i>
              <i className="ri-twitter-fill text-3xl hover:text-blue-400 cursor-pointer transition"></i>
              <i className="ri-linkedin-box-fill text-3xl hover:text-blue-700 cursor-pointer transition"></i>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10">
          <iframe
            className="w-full h-80 rounded-lg shadow-lg border border-gray-300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160996803!2d-74.25987426899218!3d40.69714940275786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f7c53c7ebdf7%3A0x3bc0955b7b67c953!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1646679046404!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

