import React from "react";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import FaqContent from "@/components/FAQ/FaqContent";

const FAQ = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />

      <FaqContent />

      <Facility />
    </>
  );
};

export default FAQ;
