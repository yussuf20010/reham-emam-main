import React from "react";
import Link from "next/link";

const ProductOffer = () => {
  return (
    <>
      <div className="categories-banner-area pt-60 pb-30 bg-fcfbfb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="offer-categories-box hover-active">
                <img src="/images/furniture-category1.jpg" alt="image" />

                <div className="content text-white">
                  <span>Don’t Miss Today</span>
                  <h3>50% OFF</h3>

                  <Link href="#" className="btn btn-primary">
                    Shop Now
                  </Link>
                </div>

                <Link href="#" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="offer-categories-box hover-active">
                <img src="/images/furniture-category2.jpg" alt="image" />

                <div className="content">
                  <span>New Collection</span>
                  <h3>40% OFF</h3>

                  <Link href="#" className="btn btn-primary">
                    Shop Now
                  </Link>
                </div>

                <Link href="#" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="offer-categories-box hover-active">
                <img src="/images/furniture-category3.jpg" alt="image" />

                <div className="content">
                  <span>Your Looks</span>
                  <h3>30% OFF</h3>

                  <Link href="#" className="btn btn-primary">
                    Shop Now
                  </Link>
                </div>

                <Link href="#" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="offer-categories-box hover-active">
                <img src="/images/furniture-category4.jpg" alt="image" />

                <div className="content text-white">
                  <span>Winter Spring!</span>
                  <h3>20% OFF</h3>

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
