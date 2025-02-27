import React from "react";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import BlogGridTwoColumn from "../components/Blog/BlogGridTwoColumn";

const Blog2 = () => {
  return (
    <>
      <Breadcrumb title="Blog Two" />

      <BlogGridTwoColumn />

      <Facility />
    </>
  );
};

export default Blog2;
