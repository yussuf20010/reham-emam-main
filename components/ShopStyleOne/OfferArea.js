import React from "react";
import Link from "next/link";

const OfferArea = () => {
  return (
    <>
      <div className="offer-area ptb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="offer-box">
                <img src="/images/offer-women.jpg" alt="image" className="w-100" />

                <div className="category">
                  <h4>Women's</h4>
                </div>

                <div className="box-inner">
                  <h3>Women's</h3>

                  <ul>
                    <li>
                      <Link href="#">Woman Accessories</Link>
                    </li>
                    <li>
                      <Link href="#">Man Accessories</Link>
                    </li>
                    <li>
                      <Link href="#">Sunglasses</Link>
                    </li>
                    <li>
                      <Link href="#">Belts</Link>
                    </li>
                    <li>
                      <Link href="#">Hats</Link>
                    </li>
                    <li>
                      <Link href="#">Scrafs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="offer-box">
                <img src="/images/1.jpg" alt="image" className="w-100" />

                <div className="category">
                  <h4>Accessories</h4>
                </div>

                <div className="box-inner">
                  <h3>Accessories</h3>

                  <ul>
                    <li>
                      <Link href="#">Woman Accessories</Link>
                    </li>
                    <li>
                      <Link href="#">Man Accessories</Link>
                    </li>
                    <li>
                      <Link href="#">Sunglasses</Link>
                    </li>
                    <li>
                      <Link href="#">Belts</Link>
                    </li>
                    <li>
                      <Link href="#">Hats</Link>
                    </li>
                    <li>
                      <Link href="#">Scrafs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="offer-box">
                <img src="/images/offer-men.jpg" alt="image" className="w-100" />

                <div className="category">
                  <h4>Men's</h4>
                </div>

                <div className="box-inner">
                  <h3>Men's</h3>

                  <ul>
                    <li>
                      <Link href="#">Woman Accessories</Link>
                    </li>
                    <li>
                      <Link href="#">Man Accessories</Link>
                    </li>
                    <li>
                      <Link href="#">Sunglasses</Link>
                    </li>
                    <li>
                      <Link href="#">Belts</Link>
                    </li>
                    <li>
                      <Link href="#">Hats</Link>
                    </li>
                    <li>
                      <Link href="#">Scrafs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferArea;
