import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination]}
        className="home-slides"
      >
        <SwiperSlide>
          <div
            className="main-banner covid-19-banner"
            style={{
              backgroundImage: `url(/images/main-banner-image/banner-new-bg17.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content position-relative">
                    <span>Best Seller</span>
                    <h1>Medical Mask</h1>
                    <p>
                      Be Clean & Keep Clean, Maintain Social Distance, Avoid All
                      Kinds of Crowds including Social Gathering, Protect
                      Yourself and Others, Save Humankind!
                    </p>

                    <Link href="#" className="btn btn-primary">
                      Shop Now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="main-banner covid-19-banner"
            style={{
              backgroundImage: `url(/images/main-banner-image/banner-new-bg18.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content position-relative">
                    <span>Trading Collection</span>
                    <h1>Hand Sanitizer</h1>
                    <p>
                      Be Clean & Keep Clean, Maintain Social Distance, Avoid All
                      Kinds of Crowds including Social Gathering, Protect
                      Yourself and Others, Save Humankind!
                    </p>

                    <Link href="#" className="btn btn-primary">
                      Shop Now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
