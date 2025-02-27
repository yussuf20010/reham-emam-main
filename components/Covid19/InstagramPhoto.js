import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const InstagramPhoto = () => {
  return (
    <>
      <div className="instagram-area">
        <div className="instagram-title">
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fab fa-instagram"></i> Follow us on @novine
          </a>
        </div>

        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="instagram-slides"
        >
          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram/insta1.jpg" alt="image" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram/insta2.jpg" alt="image" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram/insta3.jpg" alt="image" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram/insta4.jpg" alt="image" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram/insta5.jpg" alt="image" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram/insta6.jpg" alt="image" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram/insta7.jpg" alt="image" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram/insta8.jpg" alt="image" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram/insta9.jpg" alt="image" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>
              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default InstagramPhoto;
