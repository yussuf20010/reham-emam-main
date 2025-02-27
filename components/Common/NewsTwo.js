import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const NewsTwo = () => {
  return (
    <>
      <div className="news-area ptb-60">
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> LB4ALL News
            </h2>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="news-slides"
          >
            <SwiperSlide>
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/blog1.jpg" alt="image" />
                  </Link>

                  <div className="post-tag">
                    <Link href="#">Shop</Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">20 Jan, 2020</span>

                  <h3>
                    <Link href="/blog-details">
                      The Most Popular New top Business Apps
                    </Link>
                  </h3>

                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/blog2.jpg" alt="image" />
                  </Link>

                  <div className="post-tag">
                    <Link href="#">Inspiration</Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">21 Jan, 2020</span>

                  <h3>
                    <Link href="/blog-details">
                      The Best Marketing top use Management Tools
                    </Link>
                  </h3>

                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/blog3.jpg" alt="image" />
                  </Link>

                  <div className="post-tag">
                    <Link href="#">Sell</Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">22 Jan, 2020</span>

                  <h3>
                    <Link href="/blog-details">
                      3 WooCommerce Plugins to Boost Sales
                    </Link>
                  </h3>

                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/blog4.jpg" alt="image" />
                  </Link>

                  <div className="post-tag">
                    <Link href="#">Marketing</Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">23 Jan, 2020</span>

                  <h3>
                    <Link href="/blog-details">
                      Top 21 Must-Read Blogs For Creative Agencies
                    </Link>
                  </h3>

                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default NewsTwo;
