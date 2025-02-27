import React from "react";
import Link from "next/link";

const BlogGridOneColumn = () => {
  return (
    <>
      <div className="news-area ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12 offset-md-0">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/blog1.jpg" alt="image" />
                  </Link>

                  <div className="post-tag">
                    <Link href="#">Technology</Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">25 Feb, 2019</span>
                  <h3>
                    <Link href="/blog-details">
                      The Most Popular New top Business Apps
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>

              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/blog2.jpg" alt="image" />
                  </Link>

                  <div className="post-tag">
                    <Link href="#">Agency</Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">27 Feb, 2019</span>
                  <h3>
                    <Link href="/blog-details">
                      The Best Marketing top use Management Tools
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>

              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/blog3.jpg" alt="image" />
                  </Link>

                  <div className="post-tag">
                    <Link href="#">IT</Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">28 Feb, 2019</span>
                  <h3>
                    <Link href="/blog-details">
                      3 WooCommerce Plugins to Boost Sales
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>

              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/blog4.jpg" alt="image" />
                  </Link>

                  <div className="post-tag">
                    <Link href="#">Creative</Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">29 Feb, 2019</span>
                  <h3>
                    <Link href="/blog-details">
                      Top 21 Must-Read Blogs For Creative Agencies
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>

              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/blog5.jpg" alt="image" />
                  </Link>

                  <div className="post-tag">
                    <Link href="#">Technology</Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">25 Feb, 2019</span>
                  <h3>
                    <Link href="/blog-details">
                      The Most Popular New top Business Apps
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>

              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/blog6.jpg" alt="image" />
                  </Link>

                  <div className="post-tag">
                    <Link href="#">Agency</Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">27 Feb, 2019</span>
                  <h3>
                    <Link href="/blog-details">
                      The Best Marketing top use Management Tools
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>

              {/* Pagination */}
              <div className="pagination-area">
                <Link href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </Link>

                <Link href="#" className="page-numbers">
                  1
                </Link>

                <span className="page-numbers current" aria-current="page">
                  2
                </span>

                <Link href="#" className="page-numbers">
                  3
                </Link>

                <Link href="#" className="page-numbers">
                  4
                </Link>

                <Link href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGridOneColumn;
