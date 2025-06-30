import React, { useState } from "react";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/gtbschool794@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            _subject: "New Contact Form Submission - GTB ",
          }),
        }
      );

      const data = await response.json();
      if (data.success === "true") {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Our School
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to answer your questions and welcome your feedback
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 -mb-8"></div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              How to <span className="text-yellow-600">Reach Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team is available to assist you with admissions, general
              inquiries, and more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Card - Address */}
            <div className="bg-gray-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition duration-300">
              <div className="text-yellow-500 text-4xl mb-4 flex justify-center">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                Our Location
              </h3>
              <address className="text-gray-700 text-center not-italic">
                GTB Road, Guruharsahai
                <br />
                Ferozepur, Punjab 152022
                <br />
                India
              </address>
            </div>

            {/* Contact Card - Phone/Email */}
            <div className="bg-gray-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition duration-300">
              <div className="text-yellow-500 text-4xl mb-4 flex justify-center">
                <FaPhone />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                Contact Details
              </h3>
              <div className="text-gray-700 text-center space-y-2">
                <p>
                  <strong>Admissions:</strong> +91 9855430984
                </p>
                <p>
                  <strong>Administration:</strong> +91 9855430984
                </p>
                <p>
                  <strong>Email:</strong> gtbschool794@gmail.com
                </p>
              </div>
            </div>

            {/* Contact Card - Hours */}
            <div className="bg-gray-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition duration-300">
              <div className="text-yellow-500 text-4xl mb-4 flex justify-center">
                <FaClock />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                Office Hours
              </h3>
              <div className="text-gray-700 text-center space-y-2">
                <p>
                  <strong>Monday - Friday:</strong> 8:00 AM - 4:00 PM
                </p>
                <p>
                  <strong>Saturday:</strong> 9:00 AM - 1:00 PM
                </p>
                <p>
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-blue-900 text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <p className="mb-6">
                  Have questions about admissions, programs, or anything else?
                  Fill out the form and we'll respond as soon as possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-yellow-400">
                      <FaEnvelope />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-bold">Email Us</h4>
                      <p>gtbschool794@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-yellow-400">
                      <FaPhone />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-bold">Call Us</h4>
                      <p>+91 98886 30984 (Admissions Office)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                {submitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                    <strong className="font-bold">Thank you!</strong>
                    <span className="block sm:inline">
                      {" "}
                      Your message has been sent successfully. We'll get back to
                      you soon.
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_next"
                      value="https://yourwebsite.com/thank-you"
                    />

                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Admissions Inquiry">
                          Admissions Inquiry
                        </option>
                        <option value="Academic Programs">
                          Academic Programs
                        </option>
                        <option value="School Facilities">
                          School Facilities
                        </option>
                        <option value="Feedback/Suggestions">
                          Feedback/Suggestions
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your message"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-yellow-500 text-blue-900 font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition duration-300 ${
                        isLoading ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Transportation <span className="text-yellow-600">Options</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Convenient ways to reach our campus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-3">By Road</h3>
              <p className="text-gray-700">
                Located on GTB Road, Guruharsahai with easy access from
                Ferozepur (15km) and nearby cities.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                School Buses
              </h3>
              <p className="text-gray-700">
                We operate a fleet of buses covering major routes in Ferozepur
                district.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Parking</h3>
              <p className="text-gray-700">
                Ample parking space available for visitors and parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-gray-100">
        <div className="container mx-auto px-0">
          <div className="text-center py-8 bg-blue-900 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Our Location
            </h2>
            <p>Find us easily using the map below</p>
          </div>
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3658.134265238878!2d74.40381219999999!3d30.708886900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQyJzMyLjAiTiA3NMKwMjQnMTMuNyJF!5e1!3m2!1sen!2sin!4v1750846445020!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="GTB Cambridge World School Location"
            ></iframe>
          </div>
          <div className="bg-blue-900 text-white py-4 text-center">
            <p>GTB Road, Guruharsahai, Ferozepur, Punjab 152022, India</p>
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="py-8 bg-yellow-500 text-blue-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Need immediate assistance?</h3>
              <p>Our admissions team is ready to help you</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="tel:+919888630984"
                className="flex items-center px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition duration-300"
              >
                <FaPhone className="mr-2" /> Call Now
              </a>
              <a
                href="mailto:gtbschool794@gmail.com"
                className="flex items-center px-6 py-2 border-2 border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition duration-300"
              >
                <FaEnvelope className="mr-2" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
