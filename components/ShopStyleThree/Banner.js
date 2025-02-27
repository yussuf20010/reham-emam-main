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
          delay: 5500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination]}
        className="home-slides"
      >
        <SwiperSlide>
          <div className="main-banner-two">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner-image">
                        <div className="circle"></div>
                        <img src="/images/women.png" alt="image" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="main-banner-content">
                        <span className="circle">New Inspiration 2020</span>
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
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="main-banner-two">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner-image">
                        <div className="circle"></div>
                        <img src="/images/women2.png" alt="image" />
                      </div>
                    </div>

                    <div className="col-lg-6">
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
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="main-banner-two">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner-image">
                        <div className="circle"></div>
                        <img src="/images/women.png" alt="image" />
                      </div>
                    </div>

                    <div className="col-lg-6">
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
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
