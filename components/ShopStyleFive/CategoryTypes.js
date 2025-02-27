import React from "react";
import Link from "next/link";

const CategoryTypes = () => {
  return (
    <>
      <div className="category-boxes-area pt-60">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-category-boxes">
                <img src="/images/category-products-img5.jpg" alt="image" />

                <h3>Bags</h3>

                <Link href="#" className="shop-now-btn">
                  Shop Now
                </Link>
                <Link
                  href="#"
                  className="link-btn"
                ></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-category-boxes">
                <img src="/images/category-products-img6.jpg" alt="image" />

                <h3>Shoes</h3>

                <Link href="/collections-style-one" className="shop-now-btn">
                  Shop Now
                </Link>

                <Link href="/collections-style-one" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-category-boxes">
                <img src="/images/category-products-img7.jpg" alt="image" />

                <h3>Watches</h3>

                <Link
                  href="/products"
                  className="shop-now-btn"
                >
                  Shop Now
                </Link>

                <Link
                  href="/products"
                  className="link-btn"
                ></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-category-boxes">
                <img src="/images/category-products-img8.jpg" alt="image" />

                <h3>Glasses</h3>

                <Link
                  href="#"
                  className="shop-now-btn"
                >
                  Shop Now
                </Link>

                <Link
                  href="#"
                  className="link-btn"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryTypes;
