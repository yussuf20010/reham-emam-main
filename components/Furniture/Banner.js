import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div
        className="main-banner grocery-banner furniture-banner"
        style={{ backgroundImage: `url(/images/furniture-banner-bg.jpg)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content">
                <span>Summer Collections</span>
                <h1>New Arrivals!</h1>
                <p>Take 20% Off ‘Sale Must-Haves'</p>

                <Link href="#" className="btn btn-primary">
                  Shop Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
