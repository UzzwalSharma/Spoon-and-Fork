import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const ContactUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form Validation
  const validateForm = () => {
    if (!name || !email || !message) {
      alert('Please fill out all fields');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const response = await fetch('https://formspree.io/f/mldedaoq', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    setLoading(false);
    if (response.ok) {
      setSubmitted(true);
    } else {
      console.error('Form submission failed.');
    }
  };

  return (
    <div className="contact-us-section p-10 bg-gray-100">
      {submitted ? (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-600">Thank You for Contacting Us, {name}!</h3>
          <p className="text-gray-700 mt-4">
            We appreciate you reaching out. Our team will get back to you as soon as possible.
          </p>
          <p className="text-gray-700 mt-2">
            If you have any urgent issues, feel free to contact us at <strong>uzzwal7505@gmail.com</strong>.
          </p>
          <p className="text-blue-500 font-semibold mt-4">
            We look forward to assisting you!
          </p>
        </div>
      ) : loading ? (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Image Section */}
          <div className="mb-10 lg:mb-0 lg:w-1/2">
            <img src="/rb_2148893542.png" alt="Contact Us Illustration" className="w-full h-auto" />
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="lg:w-1/2 space-y-4 lg:ml-8">
            <h2 className="text-2xl font-bold mb-4">We'd Love to Hear from You!</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border p-2 w-full h-32"
            ></textarea>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
              Submit Message
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactUsForm;
