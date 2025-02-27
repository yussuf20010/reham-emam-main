"use client";

import axios from "@/lib/axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Facility from "../../components/Common/Facility";
import Breadcrumb from "../../components/Common/Breadcrumb";
import ProductImage from "@/components/ProductDetails/ProductImage";
import ProductContent from "@/components/ProductDetails/ProductContent";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  return (
    <>

      <Breadcrumb title="Product Details" />
      <header className="page-header py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center shadow-md">
        <h1 className="text-4xl font-extrabold tracking-wide">{product?.name}</h1>
      </header>
      <div className="products-details-area pt-20">
        <div className="container pb-16">
        <div className="row bg-white rounded-lg p-8 flex items-stretch">

            <div className="col-lg-6 col-md-6 flex justify-center">
              {product && <ProductImage images={product.images} />}
            </div>
            <div className="col-lg-6 col-md-6 p-6">
              {product && <ProductContent product={product} />}
            </div>
          </div>
        </div>
        <Facility />
      </div>
    </>
  );
};

export default ProductDetails;
