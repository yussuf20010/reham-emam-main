"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const TopPanel = () => {
  const [isActiveOffer, setActiveOffer] = useState("false");
  const handleToggleOffer = () => {
    setActiveOffer(!isActiveOffer);
  };

  return (
    <>
      <div
        className={`top-panel ${
          isActiveOffer ? "" : "hide"
        }`}
      >
        <div className="container">
          <div className="panel-content">
            <Swiper
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="top-panel-slides"
            >
              <SwiperSlide>
                <div className="single-item-box">
                  <p>
                    <strong>Enjoy an extra 20% off</strong> select sales styles{" "}
                    <Link href="#">Read More</Link>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-item-box">
                  <p>
                    <strong>Enjoy an extra 30% off</strong> select sales styles{" "}
                    <Link href="#">Read More</Link>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-item-box">
                  <p>
                    <strong>Enjoy an extra 40% off</strong> select sales styles{" "}
                    <Link href="#">Read More</Link>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>

            <i
              className="fas fa-times panel-close-btn"
              onClick={handleToggleOffer}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPanel;
