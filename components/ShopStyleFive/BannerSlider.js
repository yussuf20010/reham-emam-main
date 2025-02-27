import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const BannerSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Navigation]}
        className="home-slides-two"
      >
        <SwiperSlide>
          <div
            className="banner-section"
            style={{ backgroundImage: `url(/images/main-banner5.jpg)` }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-content">
                    <span>Limited Time Offer!</span>

                    <h1>Clothing Made for You!</h1>

                    <p>Take 20% Off ‘Sale Must-Haves'</p>

                    <Link href="#" className="btn btn-primary">
                      Shop Women's
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="banner-section"
            style={{ backgroundImage: `url(/images/main-banner6.jpg)` }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-content">
                    <span>Limited Time Offer!</span>

                    <h1>Clothing Made for You!</h1>

                    <p>Take 20% Off ‘Sale Must-Haves'</p>

                    <Link href="#" className="btn btn-primary">
                      Shop Men's
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

export default BannerSlider;
