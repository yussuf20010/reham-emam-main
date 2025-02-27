"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Swal from "sweetalert2";
import SizeSelector from "./sizes";

const ProductContent = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const availableColors = ["black", "white", "red", "blue", "green"];

  const handleAddToCart = () => {
    addToCart(
      product.id,
      product.name,
      product.price,
      product.images[0].image_path,
      `color: ${selectedColor}, size: ${selectedSize}`
    );

    // Show Swal2 success message
    Swal.fire({
      title: "Added to Cart!",
      text: `${product.name} has been added to your cart.`,
      icon: "success",
      confirmButtonText: "Continue Shopping",
      timer: 2000,
      showConfirmButton: false,
      toast: true,
      position: "top-end",
    });
  };

  return (
    <div className="product-details-content flex flex-col justify-between h-full p-6">
      {/* Product Name & Price */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
        <p className="text-xl font-semibold text-red-500 mt-2">${product.price}</p>
        <p className="text-sm text-gray-600 mt-2">{product.details}</p>

        <p
          className={`
            text-sm font-medium mt-2
            ${product.quantity > 10 ? "text-green-600" :
              product.quantity > 5 ? "text-yellow-500" :
                product.quantity > 0 ? "text-red-500" : "text-gray-400"}
          `}
        >
          Availability: {product.quantity > 0 ? `${product.quantity} in stock` : "Out of stock"}
        </p>
      </div>

      <SizeSelector
        availableSizes={availableSizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />;

      {/* Color Selector */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-700">Select Color:</h4>
        <ul className="flex gap-3 mt-2">
          {availableColors.map((color) => (
            <li
              key={color}
              className={`w-10 h-10 border rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center
                ${selectedColor === color ? "ring-2 ring-black" : "hover:opacity-75"}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            >
              {selectedColor === color && <i className="fas fa-check text-white"></i>}
            </li>
          ))}
        </ul>
      </div>

      {/* Add to Cart Button */}
      <div className="mt-8">
        <button
          type="button"
          className={`w-full py-3 text-lg font-semibold text-white rounded-xl transition-all duration-300 ${selectedSize && selectedColor ? "bg-black hover:bg-gray-900" : "bg-purple-300 cursor-not-allowed"
            }`}
          onClick={handleAddToCart}
          disabled={!selectedSize || !selectedColor}
        >
          <i className="fas fa-shopping-bag mr-2"></i> Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductContent;
