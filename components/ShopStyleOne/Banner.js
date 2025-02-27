import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="main-banner" style={{ backgroundImage: `url(/images/main-banner1.jpg)` }}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content">
                <span>New Inspiration 2020</span>
                <h1>CLOTHING MADE FOR YOU!</h1>
                <p>Trending from men and women style collection</p>

                <Link href="#" className="btn btn-primary">
                  Shop Women's
                </Link>
                <Link href="#" className="btn btn-light">
                  Shop Men's
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
