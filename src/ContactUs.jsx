import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    privacyPolicy: false,
  });

  const handleInputChange = (e) => {
    const { id, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
      privacyPolicy: false,
    });
  };

  return (
    <section className="contact-section container" style={{ padding: "50px 15px", backgroundColor: "#f9f9f9" }}>
      <div className="text-center mb-4">
        <h2 className="fw-bold">Contact Us</h2>
        <p>We'd love to hear from you! Reach out to us via the form below or using the contact details provided.</p>
      </div>

      <div className="row align-items-center g-5">
        <div className="col-md-6">
          {/* Contact Form */}
          <div className="card contact-card p-4" style={{ border: "none", backgroundColor: "#ffffff", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <h5 className="fw-bold mb-3">Send Us a Message</h5>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="privacyPolicy">
                  I agree to the{" "}
                  <a href="#" className="text-decoration-none" style={{ color: "#000000" }}>
                    Privacy Policy
                  </a>{" "}
                  and acknowledge that my information will be securely stored.
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-50">Send Message</button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          {/* Contact Information */}
          <div className="container">
            <div className="card p-3" style={{ backgroundColor: "transparent", border: "none" }}>
              <h5 className="fw-bold mb-3">Contact Information</h5>
              <p><i className="bi bi-envelope"></i> Email: <a href="mailto:info@foodiesdelight.com" className="text-decoration-none">info@foodiesdelight.com</a></p>
              <p><i className="bi bi-telephone"></i> Phone: <a href="tel:+1234567890" className="text-decoration-none">+1 234 567 890</a></p>
              <p><i className="bi bi-geo-alt"></i> Address: Ghaziabad, Uttar Pradesh</p>
              <div className="share-mode" style={{ display: "flex", gap: "8.25px" }}>
                <i className="fa-brands fa-facebook" style={{ color: "#FFFFFF", backgroundColor: "#0866FF", borderRadius: "12px", padding: "5px" }}></i>
                <i className="fa-brands fa-whatsapp" style={{ color: "#FFFFFF", backgroundColor: "#25D366", borderRadius: "12px", padding: "5px" }}></i>
                <i className="fa-brands fa-linkedin-in" style={{ backgroundColor: "#0077B5", color: "#FFFFFF", borderRadius: "12px", padding: "5px" }}></i>
                <i className="fa-regular fa-copy" style={{ backgroundColor: "#E0E0E0", color: "#313131", borderRadius: "12px", padding: "5px" }}></i>
              </div>
              <img
                src="https://www.wasserstrom.com/blog/wp-content/uploads/2022/03/food-photography-header.jpg"
                alt="focd"
                className="w-100 mt-4"
                style={{ borderRadius: "0 50px 0 50px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
