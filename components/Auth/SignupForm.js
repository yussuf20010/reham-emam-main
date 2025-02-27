"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const SignupForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Step 1: Fetch CSRF cookie
      await axios.get("https://e.asm-system.com/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      // Step 2: Retrieve CSRF token from cookies
      const xsrfToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("XSRF-TOKEN="))
        ?.split("=")[1];

      await axios.post(
        "https://e.asm-system.com/api/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "X-XSRF-TOKEN": decodeURIComponent(xsrfToken),
          },
        }
      );
      router.push("/login");
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <>
      <div className="signup-area ptb-60">
        <div className="container">
          <div className="signup-content">
            <div className="section-title">
              <h2>
                <span className="dot"></span> Create an Account
              </h2>
            </div>

            {/* Error Message */}
            {error && <p className="error-message text-red-500">{error}</p>}

            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-3 w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              <FcGoogle className="text-2xl" /> Sign up with Google
            </button>

            <p className="text-center my-4 text-gray-500">or</p>

            {/* Signup Form */}
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Signup"}
              </button>

              <Link href="/" className="return-store">
                or Return to Store
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
