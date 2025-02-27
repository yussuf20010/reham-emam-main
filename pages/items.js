"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AllProducts from "@/components/ShopStyleSix/AllProducts";

const ShopStyleSix = () => {
  const router = useRouter();
  const { query } = router;
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (query.search) {
      setSearchTerm(query.search);
    }
    if(query.search === ""){
      setSearchTerm(undefined)
    }
  }, [query.search]);

  return (
    <>
      <header className="relative py-16 text-white text-center shadow-md overflow-hidden">
        {/* Background Image with Blur Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center blur-lg brightness-75"
          style={{ backgroundImage: "url('/images/lobna.jpg')" }}
        ></div>

        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Title with Backdrop Blur */}
        <h1 className="relative text-5xl font-extrabold tracking-wide backdrop-blur-md">
          Items
        </h1>

        {/* Search Input */}
        <div className="relative mt-6">
          <input
            type="text"
            placeholder="Search products..."
            className="relative w-3/4 p-3 text-black rounded-lg shadow-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                router.push(`/items?search=${e.target.value}`);
              }
            }}
          />
        </div>
      </header>

      <AllProducts searchTerms={searchTerm} />
    </>
  );
};

export default ShopStyleSix;
