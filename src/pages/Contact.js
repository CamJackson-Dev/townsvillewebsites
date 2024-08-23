import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success(
            "Email successfully sent! Our team will be in touch shortly."
          );
          setFormData({
            name: "",
            subject: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact section-title mt-5">
      <div className="container text-white">
        <div className="row align-items-center">
          <div className="col-md-7 mx-auto">
            <div className="contact-title mb-5 mt-5">
              <h1 className="title-font title-font-size">Contact</h1>
              <p className="mt-4 mb-4 title-font-2">
                Say Hello. If you want to extend some info, do not hesitate to
                fill this form, we love to say ‘Hello Mate’.
              </p>
            </div>
          </div>

          <div className="col-lg-8 mx-auto text-white">
            <div className="contact-form mb-5 mt-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn mt-5">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
