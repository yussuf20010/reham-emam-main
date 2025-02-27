import React from "react";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import CartContent from "../components/Cart/CartContent";

const Cart = () => {
  return (
    <>
      <Breadcrumb title="Cart" />

      <CartContent />

      <Facility />
    </>
  );
};

export default Cart;
