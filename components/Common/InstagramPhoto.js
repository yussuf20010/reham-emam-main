import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const InstagramPhoto = () => {
  return (
    <>
      <div className="instagram-area">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            },
            1200: {
              slidesPerView: 9,
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
              <img src="/images/instagram1.jpg" alt="image" className="w-100" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram2.jpg" alt="image" className="w-100" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram3.jpg" alt="image" className="w-100" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram4.jpg" alt="image" className="w-100" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram5.jpg" alt="image" className="w-100" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram6.jpg" alt="image" className="w-100" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram7.jpg" alt="image" className="w-100" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram8.jpg" alt="image" className="w-100" />

              <div className="icon">
                <i className="fab fa-instagram"></i>
              </div>

              <a target="_blank" href="https://www.instagram.com/"></a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="instagram-box">
              <img src="/images/instagram9.jpg" alt="image" className="w-100" />

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
