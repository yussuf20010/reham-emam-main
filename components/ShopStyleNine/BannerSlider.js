import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const BannerSlider = () => {
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
        className="home-slides-three black-color-text"
      >
        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/main-banner-image/banner-new-bg7.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <span>Limited Time Offer!</span>
                    <h1>Winter-spring 2020!</h1>
                    <p>Take 20% Off ‘Sale Must-Haves'</p>

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
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/main-banner-image/banner-new-bg8.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <span>New Inspiration 2020!</span>
                    <h1>Summer-spring 2020!</h1>
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
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/main-banner-image/banner-new-bg9.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <span>New Inspiration 2020</span>
                    <h1>Travel-spring 2020!</h1>
                    <p>Up To 30% OFF Select Styles</p>

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
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
