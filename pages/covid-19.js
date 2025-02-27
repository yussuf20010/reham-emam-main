import React from "react";
import Banner from "@/components/Covid19/Banner";
import RecentProducts from "@/components/Covid19/RecentProducts";
import ProductOffer from "@/components/Covid19/ProductOffer";
import TrendingProducts from "@/components/Covid19/TrendingProducts";
import Facility from "@/components/Covid19/Facility";
import BestSeller from "@/components/Covid19/BestSellers";
import Partner from "@/components/Common/Partner";
import News from "@/components/Covid19/News";
import Subscribe from "@/components/Common/Subscribe";
import InstagramPhoto from "@/components/Covid19/InstagramPhoto";

const Covid19 = () => {
  return (
    <>
      <Banner />

      <RecentProducts />

      <ProductOffer />

      <TrendingProducts />

      <Facility />

      <BestSeller />

      <Partner />

      <News />

      <Subscribe />

      <InstagramPhoto />
    </>
  );
};

export default Covid19;
