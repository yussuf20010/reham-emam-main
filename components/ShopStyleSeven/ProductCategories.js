import React from "react";
import Link from "next/link";

const ProductCategories = () => {
  return (
    <>
      <div className="category-boxes-area pt-60">
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> Alow your style to match your
              ambition!
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="category-boxes">
                <img
                  src="/images/category-product-image/cp-img4.jpg"
                  alt="image"
                />
                <div className="content black-text">
                  <h3>Shop for Woman</h3>
                  <span>165 Products</span>

                  <Link href="#" className="shop-now-btn">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="category-boxes">
                <img
                  src="/images/category-product-image/cp-img5.jpg"
                  alt="image"
                />
                <div className="content black-text">
                  <h3>Shop for Man</h3>
                  <span>165 Products</span>

                  <Link href="#" className="shop-now-btn">
                    Shop Now
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
