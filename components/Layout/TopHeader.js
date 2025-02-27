"use client";

import React, { useState } from "react";
import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from "next-themes";

const TopHeader = () => {
  // Wishlist Modal
  const [isActiveWishlistModal, setActiveWishlistModal] = useState("false");
  const handleToggleWishlistModal = () => {
    setActiveWishlistModal(!isActiveWishlistModal);
  };
 
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className="dark:bg-dark py-6 top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <ul className="top-header-nav">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/">Our Stores</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ's</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-5 col-md-6">
              <ul className="top-header-right-nav">
                <li>
                  <Link href="#" onClick={handleToggleWishlistModal}>
                    Wishlist <i className="far fa-heart"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/compare">
                    Compare <i className="fas fa-balance-scale"></i>
                  </Link>
                </li>
                <li className="lang-dropdown">
                  <div onClick={toggleDropdown} className="dropdown-header">Options</div>
                  {isDropdownOpen && (
                    <ul className="dropdown-list p-10">
                      <li className="py-1">
                        <LanguageDropdown />
                      </li>
                      <li className="py-1">
                        <button onClick={toggleTheme}>
                          {theme === "light" ? <FaMoon /> : <FaSun />}
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Modal */}
      <div
        className={`modal shoppingWishlistModal fade ${isActiveWishlistModal ? "" : "show"
          }`}
        style={{}}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleToggleWishlistModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <div className="modal-body">
              <h3>My Wish List (3)</h3>

              <div className="product-cart-content">
                <div className="product-cart">
                  <div className="product-image">
                    <img src="/images/img2.jpg" alt="image" />
                  </div>

                  <div className="product-content">
                    <h3>
                      <Link href="#">Belted chino trousers polo</Link>
                    </h3>
                    <span>Blue / XS</span>
                    <div className="product-price">
                      <span>1</span>
                      <span>x</span>
                      <span className="price">$191.00</span>
                    </div>
                  </div>
                </div>

                <div className="product-cart">
                  <div className="product-image">
                    <img src="/images/img3.jpg" alt="image" />
                  </div>

                  <div className="product-content">
                    <h3>
                      <Link href="#">Belted chino trousers polo</Link>
                    </h3>
                    <span>Blue / XS</span>
                    <div className="product-price">
                      <span>1</span>
                      <span>x</span>
                      <span className="price">$191.00</span>
                    </div>
                  </div>
                </div>

                <div className="product-cart">
                  <div className="product-image">
                    <img src="/images/img4.jpg" alt="image" />
                  </div>

                  <div className="product-content">
                    <h3>
                      <Link href="#">Belted chino trousers polo</Link>
                    </h3>
                    <span>Blue / XS</span>
                    <div className="product-price">
                      <span>1</span>
                      <span>x</span>
                      <span className="price">$191.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-cart-btn">
                <Link href="#" className="btn btn-light">
                  View Shopping Cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        <span className="close-modal" onClick={handleToggleWishlistModal}>clone</span>
      </div>
      {/* End Wishlist Modal */}
    </>
  );
};

export default TopHeader;
