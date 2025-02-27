import React from "react";
import Link from "next/link";

const OfferArea = () => {
  return (
    <>
      <div className="products-offer-area ptb-60">
        <div className="container">
          <div className="products-offer-content">
            <span>Limited Time Offer</span>
            <h1>-40% Off</h1>
            <p>Get The Best Deals Now</p>
            <Link href="#" className="btn btn-primary">
              Discover Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferArea;
