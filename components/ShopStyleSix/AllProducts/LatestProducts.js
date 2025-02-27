"use client";

import Link from "next/link";
import axios from "@/lib/axios";
import { useCart } from "@/context/CartContext";
import React, { useEffect, useState } from "react";
import { FiShoppingCart, FiHeart, FiShare2, FiCheck, FiCopy } from "react-icons/fi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FiWhatsapp, FiTwitter, FiFacebook } from "react-icons/fi";


const MySwal = withReactContent(Swal);

const LatestProducts = ({searchTerms}) => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [copiedProductId, setCopiedProductId] = useState(null);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // Share function using Swal2
  const handleShare = async (product) => {
    const productUrl = `${window.location.origin}/products/${product.id}`;

    MySwal.fire({
      title: "Share this Product",
      html: `
        <div class="flex flex-col gap-4 items-center">
          <button id="copy-link" class="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition">
            <i class="text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"> <path d="M10 1.5A1.5 1.5 0 0 1 11.5 3v1h-7V3A1.5 1.5 0 0 1 6 1.5h4Zm0-1H6a2.5 2.5 0 0 0-2.5 2.5V4H2a1 1 0 0 0-1 1v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-1.5V2.5A2.5 2.5 0 0 0 10 .5Z"/> </svg></i>
            Copy Link
          </button>
          <div class="flex gap-4 text-lg">
          <a href="https://wa.me/?text=${encodeURIComponent(productUrl)}" target="_blank" class="text-green-500 hover:text-green-600 text-2xl">
            Whatsapp
          </a>
          <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(productUrl)}&text=${encodeURIComponent(product.name)}" target="_blank" class="text-blue-400 hover:text-blue-500 text-2xl">
           Tweitter
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}" target="_blank" class="text-blue-700 hover:text-blue-800 text-2xl">
            Facebook
          </a>
        </div>
        </div>
      `,
      showConfirmButton: false,
      didOpen: () => {
        document.getElementById("copy-link").addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(productUrl);
            setCopiedProductId(product.id);
            document.getElementById("copy-link").innerHTML = `<i class="text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"> <path d="M13.485 1.93a.75.75 0 0 1 1.06 1.06l-7.072 7.072a.75.75 0 0 1-1.06 0L2.454 7.06a.75.75 0 0 1 1.06-1.06l3.07 3.07 6.9-6.9Z"/> </svg></i> Copied!`;
          } catch (error) {
            console.error("Failed to copy:", error);
          }
        });
      },
    });
  };
  const filteredProducts =
    searchTerms?.trim() === ""
      ? products
      : products.filter((product) =>
          product.name.toLowerCase().includes(searchTerms?.toLowerCase())
        );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-12">
      
      {products &&
        filteredProducts.map((product, index) => {
          const firstImage =
            product.images && product.images.length > 0
              ? product.images[0].image_path
              : product.image_path;

          return (
            <div
              key={index}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 h-[550px] group"
            >
              {/* Product Image */}
              <Link href={`products/${product.id}`} className="relative w-full h-full overflow-hidden cursor-pointer">
                <img
                  src={`https://e.asm-system.com/storage/${firstImage}`}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Product Info Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 text-white transition-opacity duration-500">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="text-xl font-bold">{product.price} EP</div>

                  {/* Icons & Buttons */}
                  <div className="flex justify-between items-center mt-3">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product.id, product.name, product.price, firstImage);
                      }}
                      className="flex items-center bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
                    >
                      <FiShoppingCart className="mr-2" /> Add to Cart
                    </button>

                    <div className="flex gap-4 text-gray-300 text-2xl">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleShare(product);
                        }}
                        className="hover:text-blue-500 cursor-pointer transition duration-300"
                      >
                        {copiedProductId === product.id ? <FiCheck className="text-green-500" /> : <FiShare2 />}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default LatestProducts;
