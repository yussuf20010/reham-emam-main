import React from "react";
import Link from "next/link";

const ProductCategories = () => {
  return (
    <>
      <div className="category-boxes-area pt-60">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="category-boxes">
                <img
                  src="/images/category-product-image/cp-img8.jpg"
                  alt="image"
                />

                <div className="content black-text">
                  <p>Don’t Miss Today’s Featured Deals</p>
                  <h3>50% OFF</h3>

                  <Link href="#" className="shop-now-btn">
                    Discover Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
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

            <div className="col-lg-4 col-sm-6">
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
