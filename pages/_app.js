import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import lottie from "../public/images/xkhVswT6SX.json";

import "swiper/css";
import "swiper/css/bundle";
import "../styles/animate.min.css";
import "../styles/bootstrap.min.css";
import "../styles/fontawesome.min.css";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import "react-accessible-accordion/dist/fancy-example.css";

// Global CSS
import "../styles/style.scss";
// Responsive CSS
import "../styles/responsive.css";
// RTL CSS
import "../styles/rtl.css";

import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import GoTop from "@/components/Layout/GoTop";
import SEO from "@/components/Common/Seo";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {
    let timeout;
    const handleStart = () => {
      setLoading(true);
      setMinTimePassed(false);
      
      timeout = setTimeout(() => {
        setMinTimePassed(true);
      }, 1000); // Ensure animation lasts at least 1 sec
    };

    const handleComplete = () => {
      clearTimeout(timeout);
      setTimeout(() => setLoading(false), minTimePassed ? 0 : 1000); 
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      clearTimeout(timeout);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router, minTimePassed]);

  return (
    <>
      <SEO />
      <AuthProvider>
        <CartProvider>
          

          <Navbar />
          {loading && (
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
              <Lottie animationData={lottie} loop={true} className="w-50 h-50" />
            </div>
          )}
          <Component {...pageProps} />
          <Footer />
        </CartProvider>
      </AuthProvider>
      <GoTop />
    </>
  );
}
