import React from "react";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import BlogGridOneColumn from "../components/Blog/BlogGridOneColumn";

const Blog3 = () => {
  return (
    <>
      <Breadcrumb title="Blog Three" />

      <BlogGridOneColumn />

      <Facility />
    </>
  );
};

export default Blog3;
