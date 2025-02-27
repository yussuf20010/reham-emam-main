import React from "react";

const Brands = () => {
  return (
    <div className="brand-display-area pb-60"> {/* Adjust pt-12 and pb-12 based on your design */}
      <div className="container">
        <div className="section-title">
          <h2>
            <span className="dot"></span> Shop by Brand
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="brand-box flex flex-col h-64"> {/* Set a fixed height using h-64, adjust as needed */}
              <img
                src="/images/brands/LC Waikiki.jpg"
                alt="LC Waikiki"
                className="object-cover h-full w-full"
              />
              <h3 className="text-center mt-2">
                <a href="/lc-waikiki">LC Waikiki</a>
              </h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="brand-box flex flex-col h-64"> {/* Set a fixed height using h-64, adjust as needed */}
              <img
                src="/images/brands/DeFacto Yeni 2021.png"
                alt="DeFacto Yeni 2021"
                className="object-cover h-full w-full"
              />
              <h3 className="text-center mt-2">
                <a href="/defacto">DeFacto</a>
              </h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="brand-box flex flex-col h-64"> {/* Set a fixed height using h-64, adjust as needed */}
              <img
                src="/images/brands/lacoste.png"
                alt="LaCoste"
                className="object-cover h-full w-full"
              />
              <h3 className="text-center mt-2">
                <a href="/lacoste">LaCoste</a>
              </h3>
            </div>
          </div>

          {/* Add more brand boxes as needed */}
        </div>
      </div>
    </div>
  );
};

export default Brands;
