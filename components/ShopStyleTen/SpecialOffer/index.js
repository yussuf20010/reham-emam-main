import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AllProducts from "./AllProducts";
import MenProducts from "./MenProducts";
import WomenProducts from "./WomenProducts";

const SpecialOffer = () => {
  return (
    <>
      <div className="popular-products-area pb-60">
        <div className="container">
          <div className="products-category-tab-style-2">
            <div className="title">
              <h2>
                <span className="dot"></span> Special Offer</h2>
            </div>

            <Tabs>
              <TabList>
                <Tab>
                  <span>All</span>
                </Tab>
                <Tab>
                  <span>Men</span>
                </Tab>
                <Tab>
                  <span>Women</span>
                </Tab>
              </TabList>

              <TabPanel>
                <AllProducts />
              </TabPanel>

              <TabPanel>
                <MenProducts />
              </TabPanel>

              <TabPanel>
                <WomenProducts />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialOffer;
