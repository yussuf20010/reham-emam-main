import React from "react";
import Link from "next/link";

const ProductOffer = () => {
  return (
    <>
      <div className="categories-banner-area pt-60 pb-30 bg-fcfbfb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="offer-categories-box left-categories">
                <img src="/images/grocery-category1.jpg" alt="image" />

                <div className="content">
                  <span>50% OFF</span>
                  <h3>Vegetables</h3>

                  <Link href="#" className="btn btn-primary">
                    Shop Now
                  </Link>
                </div>

                <Link href="#" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="offer-categories-box left-categories">
                <img src="/images/grocery-category2.jpg" alt="image" />

                <div className="content">
                  <span>40% OFF</span>
                  <h3>Meats</h3>

                  <Link href="#" className="btn btn-primary">
                    Shop Now
                  </Link>
                </div>

                <Link href="#" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="offer-categories-box left-categories">
                <img src="/images/grocery-category3.jpg" alt="image" />

                <div className="content">
                  <span>30% OFF</span>
                  <h3>Fruits</h3>

                  <Link href="#" className="btn btn-primary">
                    Shop Now
                  </Link>
                </div>

                <Link href="#" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="offer-categories-box left-categories">
                <img src="/images/grocery-category4.jpg" alt="image" />

                <div className="content">
                  <span>20% OFF</span>
                  <h3>Eggs</h3>

                  <Link href="#" className="btn btn-primary">
                    Shop Now
                  </Link>
                </div>

                <Link href="#" className="link-btn"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOffer;
