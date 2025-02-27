import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Banner = () => {
  return (
      <>
        <Swiper
          slidesPerView={1} 
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="home-slides"
        >
          <SwiperSlide>
          <div className="main-banner" style={{ backgroundImage: `url(/images/main-banner2.jpg)` }}>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
          <div className="main-banner" style={{ backgroundImage: `url(/images/main-banner3.jpg)` }}>
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
    )
}

export default Banner;
