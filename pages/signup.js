import React from "react";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import SignupForm from "@/components/Auth/SignupForm";

const Signup = () => {
  return (
    <>
      <Breadcrumb title="Signup" />

      <SignupForm />

      <Facility />
    </>
  );
};

export default Signup;
