import React from "react";
import Breadcrumb from "../components/Common/Breadcrumb";
import ProductsCollections from "../components/CollectionsStyles/ProductsCollections";
import Facility from "../components/Common/Facility";

const CollectionsStyleOne = () => {
  return (
    <>
      <Breadcrumb title="Collections Type 1" />

      <ProductsCollections />
      
      <Facility />
    </>
  );
};

export default CollectionsStyleOne;
