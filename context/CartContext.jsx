"use client";

import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  // ✅ Initialize cart from sessionStorage directly
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = JSON.parse(sessionStorage.getItem("cart"));
      return savedCart ? savedCart : [];
    } catch (error) {
      console.error("Error loading cart from session storage:", error);
      return [];
    }
  });

  // ✅ Update sessionStorage whenever cart changes
  useEffect(() => {
    try {
      sessionStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to session storage:", error);
    }
  }, [cart]);

  // Updated addToCart function now accepts a 'description' parameter
  const addToCart = (id, name, price, image, description, quantity = 1) => {
    if (!user.isLogin) {
      router.push("/login");
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { id, name, price, image, description, quantity }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for using the cart easily
export const useCart = () => {
  return useContext(CartContext);
};
