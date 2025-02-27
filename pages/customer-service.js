import React from "react";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import CustomerServiceContent from "@/components/CustomerService/CustomerServiceContent";

const CustomerService = () => {
  return (
    <>
      <Breadcrumb title="Customer Service" />

      <CustomerServiceContent />

      <Facility />
    </>
  );
};

export default CustomerService;
