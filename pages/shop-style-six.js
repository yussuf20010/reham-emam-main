import Banner from "@/components/ShopStyleOne/Banner";
import OfferArea from "@/components/ShopStyleOne/OfferArea";
import Products from '@/components/ShopStyleOne/Products';
import CategoryProducts from "@/components/ShopStyleOne/CategoryProducts";
import TrendingProducts from '@/components/ShopStyleOne/TrendingProducts';
import BestSeller from '@/components/ShopStyleOne/BestSellers';
import Facility from "@/components/ShopStyleOne/Facility";
import Testimonials from "@/components/Common/Testimonials";
import News from "@/components/Common/News";
import Subscribe from "@/components/Common/Subscribe";
import Partner from "@/components/Common/Partner";
import InstagramPhoto from "@/components/Common/InstagramPhoto";
import Brands from "@/components/ShopStyleSix/Brands";

const Index = () => {
  return (
    <>
      <Banner />

      <OfferArea />

      <Products />

      <CategoryProducts />

      <TrendingProducts />

      <Brands />

      <BestSeller />

      <Facility />

      <Testimonials />

      <News />

      <Subscribe />

      <Partner />

      <InstagramPhoto />
    </>
  );
};

export default Index;
