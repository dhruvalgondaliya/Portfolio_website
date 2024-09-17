import React from "react";

function Contact() {
  return (
    <>
      <div id="contact">
        <div className="container" id="Contact">
          <div className="row">
            <div className=" col-md-12">
              <h2>Contact</h2>
              <div className="map-box ">
                <iframe
                  title="contact-form"
                  style={{ filter: "invert(90%) grayscale(1)" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.748423387!2d72.41492502397058!3d23.02047410476304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1717402079057!5m2!1sen!2sin"
                  width="935"
                  height="450"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <br />
            <h3 className="ContactForm mt-3 mb-4">Contact Form</h3>
            <form action="#">
              <div class="input-wrapper">
                <div class="input-container">
                  <input
                    type="text"
                    id="full-name"
                    class="form-input"
                    placeholder=" "
                    required
                  />
                  <label for="full-name" class="input-label">
                    Full Name
                  </label>
                </div>
                <div class="input-container">
                  <input
                    type="email"
                    id="email"
                    class="form-input"
                    placeholder=" "
                    required
                  />
                  <label for="email" class="input-label">
                    Enter Your Email
                  </label>
                </div>
              </div>
              <div class="message-container">
                <textarea
                  name="message"
                  id="message"
                  class="form-input"
                  placeholder=" "
                  required
                ></textarea>
                <label for="message" class="input-label">
                  Your Message
                </label>
              </div>
              <button className="form-button">
                <i class="fa-regular fa-paper-plane me-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
