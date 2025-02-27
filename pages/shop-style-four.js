import React from "react";
import Banner from "@/components/ShopStyleFour/Banner";
import Facility from "@/components/ShopStyleFour/Facility";
import TrendingProducts from "@/components/ShopStyleFour/TrendingProducts";
import OfferArea from "@/components/ShopStyleFour/OfferArea";
import BestSeller from "@/components/ShopStyleFour/BestSellers";
import News from "@/components/Common/News";
import Subscribe from "@/components/Common/Subscribe";
import Partner from "@/components/Common/Partner";
import InstagramPhoto from "@/components/Common/InstagramPhoto";

const ShopStyleFour = () => {
  return (
    <>
      <Banner />

      <Facility />

      <TrendingProducts />

      <BestSeller />

      <OfferArea />

      <News />

      <Subscribe />

      <Partner />

      <InstagramPhoto />
    </>
  );
};

export default ShopStyleFour;
