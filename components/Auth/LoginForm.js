"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import AuthContext from "@/context/AuthContext";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const { login } = useContext(AuthContext);
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Fetch CSRF cookie first
      await axios.get("https://e.asm-system.com/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      // Step 2: Retrieve CSRF token from cookies
      const xsrfToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("XSRF-TOKEN="))
        ?.split("=")[1];

      const res = await axios.post(
        "https://e.asm-system.com/api/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "X-XSRF-TOKEN": decodeURIComponent(xsrfToken),
          },
        }
      );
      // localStorage.setItem("token", res.data.token);
      login(res.data.user.id, res.data.token);
      router.push("/");
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <>
      <div className="login-area ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="login-content">
                <div className="section-title">
                  <h2>
                    <span className="dot"></span> Login
                  </h2>
                </div>

                <form className="login-form" onSubmit={handleLogin}>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="new-customer-content">
                <div className="section-title">
                  <h2>
                    <span className="dot"></span> New Customer
                  </h2>
                </div>

                <span>Create a Account</span>
                <p>
                  Sign up for a free account at our store. Registration is quick
                  and easy. It allows you to be able to order from our shop. To
                  start shopping click register.
                </p>
                <Link href="/signup" className="btn btn-light">
                  Create A Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
