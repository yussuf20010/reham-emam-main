import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div
        className="main-banner grocery-banner"
        style={{ backgroundImage: `url(/images/grocery-banner-bg.jpg)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content">
                <h1>Groceries Delivered in 1 Hour</h1>
                <p>Natural Health Care Ingredients</p>
                <h2>50% OFF</h2>

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
