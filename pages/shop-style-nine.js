import React from "react";
import BannerSlider from "@/components/ShopStyleNine/BannerSlider";
import ProductCategories from '@/components/ShopStyleNine/ProductCategories';
import SpecialOffer from '@/components/ShopStyleNine/SpecialOffer';
import BestSellersProducts from '@/components/ShopStyleNine/BestSellersProducts';
import Facility from '@/components/Common/Facility';
import Subscribe from '@/components/Common/Subscribe';
import Partner from '@/components/Common/Partner';
import InstagramPhoto from '@/components/Common/InstagramPhoto';

const ShopStyleNine = () => {
  return (
    <div className="boxed-layout-wrapper">
      <div className="boxed-layout-content">
        <BannerSlider />

        <ProductCategories />

        <SpecialOffer />

        <Facility />

        <BestSellersProducts />

        <Subscribe />

        <Partner />

        <InstagramPhoto />
      </div>
    </div>
  );
};

export default ShopStyleNine;
