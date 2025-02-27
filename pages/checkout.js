import React from "react";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import CheckoutForm from "../components/Checkout/CheckoutForm";

const Checkout = () => {
  return (
    <>
      <Breadcrumb title="Checkout" />

      <CheckoutForm />

      <Facility />
    </>
  );
};

export default Checkout;
