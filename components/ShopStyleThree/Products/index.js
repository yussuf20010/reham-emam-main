import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LatestProducts from "./LatestProducts";
import SpecialProducts from "./SpecialProducts";
import FeaturedProducts from "./FeaturedProducts";

const Products = () => {
  return (
    <>
      <div className="all-products-area ptb-60">
        <div className="container">
          <div className="products-category-tab">
            <Tabs>
              <TabList>
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
              </TabList>

              <TabPanel>
                <LatestProducts />
              </TabPanel>

              <TabPanel>
                <SpecialProducts />
              </TabPanel>

              <TabPanel>
                <FeaturedProducts />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
