import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe-area ptb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="newsletter-content">
                <h3>Subscribe to our newsletter</h3>
                <p>
                  A short sentence describing what someone will receive by
                  subscribing
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <form className="newsletter-form">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  name="EMAIL"
                  required={true}
                  autoComplete="off"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
