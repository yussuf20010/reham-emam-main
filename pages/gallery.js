import React from "react";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import GalleryContent from "@/components/Gallery/GalleryContent";

const Gallery = () => {
  return (
    <>
      <Breadcrumb title="Gallery" />

      <GalleryContent />

      <Facility />
    </>
  );
};

export default Gallery;
