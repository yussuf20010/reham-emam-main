import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <aside className="widget-area" id="secondary">
        <section className="widget widget_novine_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <article className="item">
            <Link href="#" className="thumb">
              <span className="fullimage cover bg1" role="img"></span>
            </Link>

            <div className="info">
              <time>June 30, 2019</time>
              <h4 className="title usmall">
                <Link href="#">How to change yourself for the better.</Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="#" className="thumb">
              <span className="fullimage cover bg2" role="img"></span>
            </Link>

            <div className="info">
              <time>June 30, 2019</time>
              <h4 className="title usmall">
                <Link href="#">10 Tactics for marketing your company.</Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="#" className="thumb">
              <span className="fullimage cover bg3" role="img"></span>
            </Link>

            <div className="info">
              <time>June 30, 2019</time>
              <h4 className="title usmall">
                <Link href="#">Google web ranking changing much.</Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
        </section>

        <section className="widget widget_recent_comments">
          <h3 className="widget-title">Recent Comments</h3>

          <ul>
            <li>
              <span className="comment-author-link">
                <Link href="#">A WordPress Commenter</Link>
              </span>{" "}
              on <Link href="#">Hello world!</Link>
            </li>
            <li>
              <span className="comment-author-link">
                <Link href="#">Novine</Link>
              </span>{" "}
              on <Link href="#">Hello world!</Link>
            </li>
            <li>
              <span className="comment-author-link">
                <Link href="#">Wordpress</Link>
              </span>{" "}
              on <Link href="#">Hello world!</Link>
            </li>
            <li>
              <span className="comment-author-link">
                <Link href="#">A WordPress Commenter</Link>
              </span>{" "}
              on <Link href="#">Hello world!</Link>
            </li>
            <li>
              <span className="comment-author-link">
                <Link href="#">Novine</Link>
              </span>{" "}
              on <Link href="#">Hello world!</Link>
            </li>
          </ul>
        </section>

        <section className="widget widget_recent_entries">
          <h3 className="widget-title">Recent Posts</h3>

          <ul>
            <li>
              <Link href="#">
                How to Become a Successful Entry Level UX Designer
              </Link>
            </li>
            <li>
              <Link href="#">
                How to start your business as an entrepreneur
              </Link>
            </li>
            <li>
              <Link href="#">How to be a successful entrepreneur</Link>
            </li>
            <li>
              <Link href="#">
                How to Become a Successful Entry Level UX Designer
              </Link>
            </li>
            <li>
              <Link href="#">Protect your workplace from cyber attacks</Link>
            </li>
          </ul>
        </section>

        <section className="widget widget_archive">
          <h3 className="widget-title">Archives</h3>

          <ul>
            <li>
              <Link href="#">May 2019</Link>
            </li>
            <li>
              <Link href="#">April 2019</Link>
            </li>
            <li>
              <Link href="#">June 2019</Link>
            </li>
          </ul>
        </section>

        <section className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="#">Business</Link>
            </li>
            <li>
              <Link href="#">Privacy</Link>
            </li>
            <li>
              <Link href="#">Shop</Link>
            </li>
            <li>
              <Link href="#">Tips</Link>
            </li>
            <li>
              <Link href="#">Uncategorized</Link>
            </li>
          </ul>
        </section>

        <section className="widget widget_meta">
          <h3 className="widget-title">Meta</h3>

          <ul>
            <li>
              <Link href="#">Log in</Link>
            </li>
            <li>
              <Link href="#">
                Entries <abbr title="Really Simple Syndication">RSS</abbr>
              </Link>
            </li>
            <li>
              <Link href="#">
                Comments <abbr title="Really Simple Syndication">RSS</abbr>
              </Link>
            </li>
            <li>
              <Link href="#">WordPress.org</Link>
            </li>
          </ul>
        </section>

        <section className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <Link href="#">
              Business <span className="tag-link-count">(3)</span>
            </Link>

            <Link href="#">
              Design <span className="tag-link-count">(3)</span>
            </Link>

            <Link href="#">
              IT <span className="tag-link-count">(2)</span>
            </Link>

            <Link href="#">
              Marketing <span className="tag-link-count">(2)</span>
            </Link>

            <Link href="#">
              Mobile <span className="tag-link-count">(1)</span>
            </Link>

            <Link href="#">
              Protect <span className="tag-link-count">(1)</span>
            </Link>

            <Link href="#">
              Startup <span className="tag-link-count">(1)</span>
            </Link>

            <Link href="#">
              Tips <span className="tag-link-count">(2)</span>
            </Link>
          </div>
        </section>
      </aside>
    </>
  );
};

export default BlogSidebar;
