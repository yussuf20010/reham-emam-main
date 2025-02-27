import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/" className="text-3xl">
                    {/* <img src={theme === 'light' ? `/images/LB4ALL LOGO-04 (1).png` : `/images/white-logo.png`} alt="logo" /> */}
                    Reham Emam
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Quick Links</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/faq">Faq's</Link>
                  </li>
                  <li>
                    <Link href="/customer-service">Customer Services</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Information</h3>

                <ul className="information-links">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/sizing-guide">Sizing Guide</Link>
                  </li>
                  <li>
                    <Link href="/customer-service">Customer Services</Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Contact Us</h3>

                <ul className="footer-contact-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Location: 2750 Quadra Street <br /> Victoria, Canada
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    Call Us: <a href="tel:+123456-7898">(+123) 456-7898</a>
                  </li>
                  <li>
                    <i className="far fa-envelope"></i>
                    Email Us:{" "}
                    <a href="mailto:support@novine.com">support@novine.com</a>
                  </li>
                  <li>
                    <i className="fas fa-fax"></i>
                    Fax: <a href="tel:+123456">+123456</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>2025 &copy; Reham Emam</p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul className="payment-card">
                  <li>
                    <img src="/images/visa.png" alt="image" />
                  </li>
                  <li>
                    <img src="/images/mastercard.png" alt="image" />
                  </li>
                  <li>
                    <img src="/images/mastercard2.png" alt="image" />
                  </li>
                  <li>
                    <img src="/images/visa2.png" alt="image" />
                  </li>
                  <li>
                    <img src="/images/expresscard.png" alt="image" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
