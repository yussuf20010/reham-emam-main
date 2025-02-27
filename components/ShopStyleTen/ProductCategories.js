import React from "react";
import Link from "next/link";

const ProductCategories = () => {
  return (
    <>
      <div className="category-boxes-area pt-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="category-boxes">
                <img
                  src="/images/category-product-image/cp-img7.jpg"
                  alt="image"
                />

                <div className="content black-text">
                  <p>New Personalizable Collection</p>
                  <h3>Need It Now</h3>

                  <Link href="#" className="shop-now-btn">
                    Discover Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="category-boxes">
                <img
                  src="/images/category-product-image/cp-img6.jpg"
                  alt="image"
                />

                <div className="content black-text">
                  <p>Complete Your Looks</p>
                  <h3>Must Haves</h3>

                  <Link href="#" className="shop-now-btn">
                    Discover Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
