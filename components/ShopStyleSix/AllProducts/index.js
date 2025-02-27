import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LatestProducts from "./LatestProducts";
// import SpecialProducts from "./SpecialProducts";
// import FeaturedProducts from "./FeaturedProducts";

const AllProducts = ({searchTerms}) => {
  return (
    <>
      <div className="all-products-area py-12">
        <div className="container">
          <div className="products-category-tab">
            <Tabs className="without-bg">
              {/* <TabList>
                <Tab>
                  <span className="tabs-nav-text">
                    <span className="dot"></span> Latest Products
                  </span>
                </Tab>
                <Tab>
                  <span className="tabs-nav-text">
                    <span className="dot"></span> Special Products
                  </span>
                </Tab>
                <Tab>
                  <span className="tabs-nav-text">
                    <span className="dot"></span> Featured Products
                  </span>
                </Tab>
              </TabList> */}

              {/* <TabPanel> */}
              <div className="relative rounded-lg mb-3 bg-purple-600 text-white py-2 text-center text-xl font-semibold overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-purple-600 to-transparent"></div>
                <marquee behavior="scroll" direction="left" scrollamount="15">New Collection</marquee>
                <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-purple-600 to-transparent"></div>
              </div>

              <LatestProducts searchTerms={searchTerms}/>
              {/* </TabPanel> */}
              {/* 
              <TabPanel>
                <SpecialProducts />
              </TabPanel>

              <TabPanel>
                <FeaturedProducts />
              </TabPanel> */}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
