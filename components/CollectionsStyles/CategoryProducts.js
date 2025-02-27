import React from "react";
import Link from "next/link";

const CategoryProducts = () => {
  return (
    <>
      <div className="category-products-area pt-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="single-category-box">
                <img src="/images/category-products-img1.jpg" alt="image" />

                <div className="category-content">
                  <h3>Our Popular Products</h3>
                  <Link href="#" className="btn btn-light">
                    View More
                  </Link>
                </div>

                <Link href="#" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-category-box">
                    <img src="/images/category-products-img2.jpg" alt="image" />

                    <div className="category-content">
                      <h3>Winter Collections</h3>
                    </div>

                    <Link href="#">
                      <a className="link-btn"></a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-category-box">
                    <img src="/images/category-products-img3.jpg" alt="image" />

                    <div className="category-content">
                      <h3>Summer Collections</h3>
                    </div>

                    <Link href="#" className="link-btn"></Link>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="single-category-box">
                    <img src="/images/category-products-img4.jpg" alt="image" />

                    <div className="category-content">
                      <h3>Up to 75% OFF Spring Sale!</h3>
                    </div>

                    <Link href="#" className="link-btn"></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
