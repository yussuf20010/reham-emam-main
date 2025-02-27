import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const NewsThree = () => {
  return (
    <>
      <div className="news-area ptb-60">
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> Novine News
            </h2>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
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
              <div className="single-blog-post-box">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/news-image/news-img1.jpg" alt="image" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      By: <Link href="#">Admin</Link>
                    </li>
                    <li>20 February, 2020</li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      Evolving Ecommerce: 14 Trends Driving Online Retail In
                      2020
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post-box">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/news-image/news-img2.jpg" alt="image" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      By: <Link href="#">Admin</Link>
                    </li>
                    <li>21 February, 2020</li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      The Best Ecommerce Platform for Growing Sales
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post-box">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/news-image/news-img3.jpg" alt="image" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      By: <Link href="#">Admin</Link>
                    </li>
                    <li>22 February, 2020</li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      A Green Brand Finding Roots in Sustainability
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post-box">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/news-image/news-img4.jpg" alt="image" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      By: <Link href="#">Admin</Link>
                    </li>
                    <li>23 February, 2020</li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      Don’t Miss These Top Ecommerce Conferences in 2020
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post-box">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/news-image/news-img5.jpg" alt="image" />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      By: <Link href="#">Admin</Link>
                    </li>
                    <li>24 February, 2020</li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      The Most Popular New top Business eCommerce Apps
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default NewsThree;
