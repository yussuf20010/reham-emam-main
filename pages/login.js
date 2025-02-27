import React from "react";
import Facility from "@/components/Common/Facility";
import Breadcrumb from "@/components/Common/Breadcrumb";
import LoginForm from "@/components/Auth/LoginForm";

const Login = () => {
  return (
    <>
      <Breadcrumb title="Login" />

      <LoginForm />

      <Facility />
    </>
  );
};

export default Login;
