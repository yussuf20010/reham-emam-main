import React from "react";
import Facility from "@/components/Common/Facility";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Testimonials from "@/components/Common/Testimonials";
import AboutContent from "@/components/About/AboutContent";

const About = () => {
  return (
    <>
      <Breadcrumb title="About Us" />

      <AboutContent />

      <Testimonials />

      <Facility />
    </>
  );
};

export default About;
