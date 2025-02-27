import React from "react";
import Banner from "@/components/Grocery/Banner";
import RecentProducts from "@/components/Grocery/RecentProducts";
import ProductOffer from "@/components/Grocery/ProductOffer";
import TrendingProducts from "@/components/Grocery/TrendingProducts";
import Facility from "@/components/Grocery/Facility";
import BestSeller from "@/components/Grocery/BestSellers";
import Partner from "@/components/Common/Partner";
import News from "@/components/Grocery/News";
import Subscribe from "@/components/Common/Subscribe";
import InstagramPhoto from "@/components/Common/InstagramPhoto";

const Grocery = () => {
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

export default Grocery;
