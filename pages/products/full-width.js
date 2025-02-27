import React from "react";
import Breadcrumb from "../../components/Common/Breadcrumb";
import Facility from "../../components/Common/Facility";
import LeftSidebar from "../../components/Products/LeftSidebar";
import ProductsFilterOptions from "../../components/Common/ProductsFilterOptions";
import OfferArea from "../../components/ShopStyleOne/OfferArea";
import ProductsFourGrid from "@/components/Products/ProductsFourGrid";

const FullWidth = () => {
  return (
    <>
      <Breadcrumb title="Products" />
 
      <div className="products-collections-area ptb-60">
        <div className="container-fluid">
          <div className="section-title">
            <h2>
              <span className="dot"></span> Products
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-12">
              <LeftSidebar />
            </div>

            <div className="col-lg-9 col-md-12">
              <ProductsFilterOptions />

              <ProductsFourGrid />
            </div>
          </div>
        </div>
      </div>

      <OfferArea />

      <Facility />
    </>
  );
};

export default FullWidth;
