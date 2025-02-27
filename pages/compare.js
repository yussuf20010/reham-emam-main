import React from "react";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import CompareTable from "../components/Compare/CompareTable";

const Compare = () => {
  return (
    <>
      <Breadcrumb title="Compare" />

      <CompareTable />

      <Facility />
    </>
  );
};

export default Compare;
