import React from "react";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import BlogGrid from "../components/Blog/BlogGrid";

const Blog = () => {
  return (
    <>
      <Breadcrumb title="Blog" />

      <BlogGrid />

      <Facility />
    </>
  );
};

export default Blog;
