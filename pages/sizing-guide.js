import React from "react";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import SizingGuideContent from "@/components/SizingGuide/SizingGuideContent";

const SizingGuide = () => {
  return (
    <>
      <Breadcrumb title="Sizing Guide" />

      <SizingGuideContent />

      <Facility />
    </>
  );
};

export default SizingGuide;
