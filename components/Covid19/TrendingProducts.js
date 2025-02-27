'use client'

import React, { useState } from "react";
import Link from "next/link";

const TrendingProducts = () => {

  const [isActiveQuickViewModal, setActiveQuickViewModal] = useState("false");
  const handleToggleQuickViewModal = () => {
    setActiveQuickViewModal(!isActiveQuickViewModal);
  };

  return (
    <>
      <div className="products-area pt-60 pb-30">
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> Trending Products
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box single-product-two">
                <div className="product-image">
                  <Link href="/products/product-details/">
                    <img
                      src="/images/covid-19/hand-sanitizer.jpg"
                      alt="image"
                    />
                    <img
                      src="/images/covid-19/hand-sanitizer.jpg"
                      alt="image"
                    />
                  </Link>

                  <ul>
                    <li>
                      <button type="button" title="Quick View" onClick={handleToggleQuickViewModal}>
                        <i className="far fa-eye"></i>
                      </button>
                    </li>
                    <li>
                      <button type="button" title="Add to Wishlist">
                        <i className="far fa-heart"></i>
                      </button>
                    </li>
                    <li>
                      <button title="Add to Compare">
                        <i className="fas fa-sync"></i>
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/products/product-details/">Hand Sanitizer</Link>
                  </h3>

                  <div className="product-price">
                    <span className="new-price">$20</span>
                  </div>

                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <button type="button" className="btn btn-light">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box single-product-two">
                <div className="product-image">
                  <Link href="/products/product-details/">
                    <img
                      src="/images/covid-19/heartland-alabama.jpg"
                      alt="image"
                    />
                    <img
                      src="/images/covid-19/heartland-alabama.jpg"
                      alt="image"
                    />
                  </Link>

                  <ul>
                    <li>
                      <button type="button" title="Quick View" onClick={handleToggleQuickViewModal}>
                        <i className="far fa-eye"></i>
                      </button>
                    </li>
                    <li>
                      <button type="button" title="Add to Wishlist">
                        <i className="far fa-heart"></i>
                      </button>
                    </li>
                    <li>
                      <button title="Add to Compare">
                        <i className="fas fa-sync"></i>
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/products/product-details/">Heartland Alabama</Link>
                  </h3>

                  <div className="product-price">
                    <span className="new-price">$18</span>
                  </div>

                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <button type="button" className="btn btn-light">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box single-product-two">
                <div className="product-image">
                  <Link href="/products/product-details/">
                    <img
                      src="/images/covid-19/medical-gloves.jpg"
                      alt="image"
                    />
                    <img
                      src="/images/covid-19/medical-gloves.jpg"
                      alt="image"
                    />
                  </Link>

                  <ul>
                    <li>
                      <button type="button" title="Quick View" onClick={handleToggleQuickViewModal}>
                        <i className="far fa-eye"></i>
                      </button>
                    </li>
                    <li>
                      <button type="button" title="Add to Wishlist">
                        <i className="far fa-heart"></i>
                      </button>
                    </li>
                    <li>
                      <button title="Add to Compare">
                        <i className="fas fa-sync"></i>
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/products/product-details/">Medical Gloves</Link>
                  </h3>

                  <div className="product-price">
                    <span className="new-price">$25</span>
                  </div>

                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <button type="button" className="btn btn-light">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box single-product-two">
                <div className="product-image">
                  <Link href="/products/product-details/">
                    <img
                      src="/images/covid-19/drugs.jpg"
                      alt="image"
                    />
                    <img
                      src="/images/covid-19/drugs.jpg"
                      alt="image"
                    />
                  </Link>

                  <ul>
                    <li>
                      <button type="button" title="Quick View" onClick={handleToggleQuickViewModal}>
                        <i className="far fa-eye"></i>
                      </button>
                    </li>
                    <li>
                      <button type="button" title="Add to Wishlist">
                        <i className="far fa-heart"></i>
                      </button>
                    </li>
                    <li>
                      <button title="Add to Compare">
                        <i className="fas fa-sync"></i>
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/products/product-details/">Drugs</Link>
                  </h3>

                  <div className="product-price">
                    <span className="new-price">$30</span>
                  </div>

                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <button type="button" className="btn btn-light">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box single-product-two">
                <div className="product-image">
                  <Link href="/products/product-details/">
                    <img
                      src="/images/covid-19/safety-goggles.jpg"
                      alt="image"
                    />
                    <img
                      src="/images/covid-19/safety-goggles.jpg"
                      alt="image"
                    />
                  </Link>

                  <ul>
                    <li>
                      <button type="button" title="Quick View" onClick={handleToggleQuickViewModal}>
                        <i className="far fa-eye"></i>
                      </button>
                    </li>
                    <li>
                      <button type="button" title="Add to Wishlist">
                        <i className="far fa-heart"></i>
                      </button>
                    </li>
                    <li>
                      <button title="Add to Compare">
                        <i className="fas fa-sync"></i>
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/products/product-details/">Safety Goggles</Link>
                  </h3>

                  <div className="product-price">
                    <span className="new-price">$30</span>
                  </div>

                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <button type="button" className="btn btn-light">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box single-product-two">
                <div className="product-image">
                  <Link href="/products/product-details/">
                    <img
                      src="/images/covid-19/vaccine.jpg"
                      alt="image"
                    />
                    <img
                      src="/images/covid-19/vaccine.jpg"
                      alt="image"
                    />
                  </Link>

                  <ul>
                    <li>
                      <button type="button" title="Quick View" onClick={handleToggleQuickViewModal}>
                        <i className="far fa-eye"></i>
                      </button>
                    </li>
                    <li>
                      <button type="button" title="Add to Wishlist">
                        <i className="far fa-heart"></i>
                      </button>
                    </li>
                    <li>
                      <button title="Add to Compare">
                        <i className="fas fa-sync"></i>
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/products/product-details/">Vaccine</Link>
                  </h3>

                  <div className="product-price">
                    <span className="new-price">$49</span>
                  </div>

                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>

                  <button type="button" className="btn btn-light">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Quick View Modal */}
      <div
        className={`modal fade productQuickView ${
          isActiveQuickViewModal ? "" : "show"
        }`}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleToggleQuickViewModal}
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="productQuickView-image">
                  <img src="/images/covid-19/hand-sanitizer.jpg" alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="product-content">
                  <h3>
                    <Link href="/products/product-details/">Hand Sanitizer</Link>
                  </h3>

                  <div className="price">
                    <span className="new-price">$230</span>
                  </div>

                  <div className="product-review">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <Link className="rating-count" href="#">
                      3 reviews
                    </Link>
                  </div>

                  <ul className="product-info">
                    <li>
                      <span>Vendor:</span> <Link href="#">Lereve</Link>
                    </li>
                    <li>
                      <span>Availability:</span>{" "}
                      <Link href="#">In stock (7 items)</Link>
                    </li>
                    <li>
                      <span>Product Type:</span> <Link href="#">Sanitizer</Link>
                    </li>
                  </ul>
   
                  <div className="product-add-to-cart mt-3">
                    <div className="input-counter">
                      <span className="minus-btn">
                        <i className="fas fa-minus"></i>
                      </span>
                      <input type="text" min="1" max="10" defaultValue="1" />
                      <span className="plus-btn">
                        <i className="fas fa-plus"></i>
                      </span>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      <i className="fas fa-cart-plus"></i> Add to Cart
                    </button>
                  </div>

                  <Link className="view-full-info" href="#">
                    View full info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="close-modal" onClick={handleToggleQuickViewModal}></span>
      </div>
      {/* End Product Quick View Modal */}
    </>
  );
};

export default TrendingProducts;
