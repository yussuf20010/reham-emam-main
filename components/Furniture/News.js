import React from "react";
import Link from "next/link";

const News = () => {
  return (
    <>
      <div className="news-area pt-60 pb-30">
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> Latest News
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-news-post">
                <div className="news-image">
                  <Link href="/blog-details">
                    <img src="/images/blog-img7.jpg" alt="image" />
                  </Link>
                </div>

                <div className="news-content">
                  <h3>
                    <Link href="/blog-details">
                      Over 80 million Americans under virtual lockdown
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
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news-post">
                <div className="news-image">
                  <Link href="/blog-details">
                    <img src="/images/blog-img8.jpg" alt="image" />
                  </Link>
                </div>

                <div className="news-content">
                  <h3>
                    <Link href="/blog-details">
                      People worldwide adjust to new life amid COVID-19
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
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news-post">
                <div className="news-image">
                  <Link href="/blog-details">
                    <img src="/images/blog-img9.jpg" alt="image" />
                  </Link>
                </div>

                <div className="news-content">
                  <h3>
                    <Link href="/blog-details">
                      Coronavirus stimulus checks what you know
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
