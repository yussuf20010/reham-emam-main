import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h3>Here to Help</h3>
        <p>
          Have a question? You may find an answer in our FAQs. But you can also
          contact us.
        </p>

        <ul className="contact-list">
          <li>
            <i className="fas fa-map-marker-alt"></i> Location: 2750 Quadra
            Street Victoria, Canada
          </li>
          <li>
            <i className="fas fa-phone"></i> Call Us:{" "}
            <a href="tel:+123456-7898">(+123) 456-7898</a>
          </li>
          <li>
            <i className="far fa-envelope"></i> Email Us:{" "}
            <a href="mailto:support@novine.com">support@novine.com</a>
          </li>
          <li>
            <i className="fas fa-fax"></i> Fax:{" "}
            <a href="tel:+123456">+123456</a>
          </li>
        </ul>

        <h3>Opening Hours:</h3>
        <ul className="opening-hours">
          <li>
            <span>Monday:</span> 8AM - 6AM
          </li>
          <li>
            <span>Tuesday:</span> 8AM - 6AM
          </li>
          <li>
            <span>Wednesday:</span> 8AM - 6AM
          </li>
          <li>
            <span>Thursday - Friday:</span> 8AM - 6AM
          </li>
          <li>
            <span>Sunday:</span> Closed
          </li>
        </ul>

        <h3>Follow Us:</h3>
        <ul className="social">
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.behance.com/" target="_blank">
              <i className="fab fa-behance"></i>
            </a>
          </li>
          <li>
            <a href="https://www.skype.com/" target="_blank">
              <i className="fab fa-skype"></i>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/" target="_blank">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
