import React from "react";
import BannerSlider from "../components/ShopStyleEleven/BannerSlider";
import ProductCategories from "../components/ShopStyleEleven/ProductCategories";
import SpecialOffer from "../components/ShopStyleEleven/SpecialOffer";
import Facility from "../components/Common/Facility";
import BestSellersProducts from "../components/ShopStyleEleven/BestSellersProducts";
import Subscribe from "../components/Common/Subscribe";
import Partner from "../components/Common/Partner";
import InstagramPhoto from "../components/Common/InstagramPhoto";

const ShopStyleEleven = () => {
  return (
    <>
      <BannerSlider />

      <ProductCategories />

      <SpecialOffer />

      <Facility />

      <BestSellersProducts />

      <Subscribe />

      <Partner />

      <InstagramPhoto />
    </>
  );
};

export default ShopStyleEleven;
