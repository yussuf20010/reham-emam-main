import React from "react";
import Link from "next/link";

const ProductsCategoryStyleTwo = () => {
  return (
    <>
      <div className="category-products-area pb-60">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="category-box">
                <img
                  src="/images/category-image/category-new-img5.jpg"
                  alt="image"
                />

                <div className="category-content">
                  <h3>New Collections!</h3>

                  <Link href="#" className="btn btn-light">
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="category-box">
                    <img
                      src="/images/category-image/category-new-img6.jpg"
                      alt="image"
                    />

                    <div className="category-content">
                      <h3>Our Popular Products</h3>

                      <Link href="#" className="btn btn-light">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="category-box">
                    <img
                      src="/images/category-image/category-new-img7.jpg"
                      alt="image"
                    />

                    <div className="category-content">
                      <h3>Hot Trending Products</h3>

                      <Link href="#" className="btn btn-light">
                        View More
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="category-box">
                    <img
                      src="/images/category-image/category-new-img8.jpg"
                      alt="image"
                    />

                    <div className="category-content">
                      <h3>Winter Collections!</h3>

                      <Link href="#" className="btn btn-light">
                        View More
                      </Link>
                    </div>
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

export default ProductsCategoryStyleTwo;
