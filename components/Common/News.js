import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";

const News = () => {
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
              <div className="single-news-post">
                <div className="news-image">
                  <Link href="/blog-details">
                    <img src="/images/blog-img1.jpg" alt="image" />
                  </Link>
                </div>

                <div className="news-content">
                  <h3>
                    <Link href="/blog-details">
                      Styling White Jeans after Labor Day
                    </Link>
                  </h3>
                  <span className="author">
                    By <Link href="#">Admin</Link>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link href="/blog-details" className="btn btn-light">
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-news-post">
                <div className="news-image">
                  <Link href="/blog-details">
                    <img src="/images/blog-img2.jpg" alt="image" />
                  </Link>
                </div>

                <div className="news-content">
                  <h3>
                    <Link href="/blog-details">
                      Styling White Jeans after Labor Day
                    </Link>
                  </h3>
                  <span className="author">
                    By <Link href="#">Admin</Link>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link href="/blog-details" className="btn btn-light">
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-news-post">
                <div className="news-image">
                  <Link href="/blog-details">
                    <img src="/images/blog-img3.jpg" alt="image" />
                  </Link>
                </div>

                <div className="news-content">
                  <h3>
                    <Link href="/blog-details">
                      Styling White Jeans after Labor Day
                    </Link>
                  </h3>
                  <span className="author">
                    By <Link href="#">Admin</Link>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link href="/blog-details" className="btn btn-light">
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-news-post">
                <div className="news-image">
                  <Link href="/blog-details">
                    <img src="/images/blog-img4.jpg" alt="image" />
                  </Link>
                </div>

                <div className="news-content">
                  <h3>
                    <Link href="/blog-details">
                      Styling White Jeans after Labor Day
                    </Link>
                  </h3>
                  <span className="author">
                    By <Link href="#">Admin</Link>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <Link href="/blog-details" className="btn btn-light">
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-news-post">
                <div className="news-image">
                  <Link href="/blog-details">
                    <img src="/images/blog-img5.jpg" alt="image" />
                  </Link>
                </div>

                <div className="news-content">
                  <h3>
                    <Link href="/blog-details">
                      Styling White Jeans after Labor Day
                    </Link>
                  </h3>
                  <span className="author">
                    By <Link href="#">Admin</Link>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <Link href="/blog-details" className="btn btn-light">
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

export default News;
