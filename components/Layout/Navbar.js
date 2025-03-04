"use client";

import Link from "next/link";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useState, useEffect, useCallback, useContext } from "react";

const Navbar = () => {
  const router = useRouter();
  const { user, logout } = useContext(AuthContext);
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();
  const [isActiveCartModal, setActiveCartModal] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        // Assuming the response contains an array of featured products
        setFeaturedProducts(res.data);
      })
      .catch((error) => {
        console.log("Error fetching products:", error.message);
      });
  }, []);
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
      navbar?.classList.toggle("is-sticky", window.scrollY > 10);
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const createOrder = useCallback(async () => {
    if (!user.isLogin) {
      router.push("/login");
      return;
    }

    try {
      await axios.get("https://e.asm-system.com/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      const xsrfToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("XSRF-TOKEN="))
        ?.split("=")[1];

      await axios.post(
        "https://e.asm-system.com/api/orders",
        { products: cart },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${user.token}`,
            "X-XSRF-TOKEN": decodeURIComponent(xsrfToken),
            "Content-Type": "application/json",
          },
        }
      );

      clearCart();
      setActiveCartModal(false);
    } catch (error) {
      console.error(
        "Error creating order:",
        error.response?.data || error.message
      );
    }
  }, [cart, user.token]);
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      router.push(`/items?search=${searchTerm}`);
    }
  };
  return (
    <>
      <div id="navbar" className="navbar-area bg-white shadow-md py-3">
        <div className="novine-nav">
          <div className="container flex justify-between items-center">
            {/* Brand Name */}
            <div className="flex flex-row items-center gap-6">
              <Link href="/" className="font-bold text-xl">
                Reiham Emam
              </Link>

              {/* Featured Products Links (Side by Side) */}
              {featuredProducts.length > 0 && (
                <div className="hidden md:flex gap-6">
                  {featuredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      className="font-bold hover:text-purple-500"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {product.name}
                    </Link>
                  ))}
                  <Link
                    href="/items"
                    className="font-semibold hover:text-purple-500"
                  >
                    See More
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-row items-center gap-3">
              <input
                type="text"
                placeholder="Search products..."
                className="p-2 rounded-md w-60 bg-gray-100"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
              />

              {/* Cart & Auth Section */}
              <div className="flex gap-3 items-center">
                {user.isLogin ? (
                  <>
                    <button
                      onClick={logout}
                      className="w-28 h-10 text-white bg-red-600 rounded"
                    >
                      Logout
                    </button>
                    <button
                      onClick={() => setActiveCartModal(!isActiveCartModal)}
                      className="flex items-center"
                    >
                      <i className="fas fa-shopping-bag mr-1"></i> Cart
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login">Login</Link>
                    <Link href="/signup">Signup</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {isActiveCartModal && (
        <div className="modal shoppingCartModal show">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                className="close"
                onClick={() => setActiveCartModal(false)}
              >
                &times;
              </button>
              <div className="modal-body">
                <h3>MY CART</h3>
                <div className="product-cart-content">
                  {cart.map((item) => (
                    <div key={item.id} className="product-cart">
                      <div className="product-content">
                        <h3>{item.name}</h3>
                        <div className="flex flex-col">
                          <div className="flex justify-around">
                            <button
                              className="text-2xl"
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              -
                            </button>
                            <span className="w-8 py-1 border rounded text-center">
                              {item.quantity}
                            </span>
                            <button
                              className="text-2xl"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              +
                            </button>
                          </div>
                          <span className="price">{item.price} EP</span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="product-cart-subtotal">
                  <span>Subtotal</span>
                  <span className="subtotal">
                    ${" "}
                    {cart.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )}{" "}
                    EP
                  </span>
                </div>
                <div className="product-cart-btn">
                  <button onClick={createOrder} className="btn btn-primary">
                    Ask Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <span
            className="close-modal"
            onClick={() => setActiveCartModal(false)}
          >
            X
          </span>
        </div>
      )}
    </>
  );
};

export default Navbar;
