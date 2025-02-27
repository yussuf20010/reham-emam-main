import React from "react";
import BannerSlider from "@/components/ShopStyleFive/BannerSlider";
import Facility from "@/components/ShopStyleFive/Facility";
import CategoryTypes from "@/components/ShopStyleFive/CategoryTypes";
import Products from "@/components/ShopStyleFive/Products";
import ProductsOffer from "@/components/ShopStyleFive/ProductsOffer";
import News from "@/components/Common/News";
import Partner from "@/components/Common/Partner";
import Subscribe from "@/components/Common/Subscribe";
import InstagramPhoto from "@/components/Common/InstagramPhoto";

const ShopStyleFive = () => {
  return (
    <>
      <BannerSlider />

      <Facility />

      <CategoryTypes />

      <Products />

      <ProductsOffer />

      <News />

      <Partner />

      <Subscribe />

      <InstagramPhoto />
    </>
  );
};

export default ShopStyleFive;
