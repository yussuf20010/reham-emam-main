import React from "react";
import Link from "next/link";
import Facility from "@/components/Common/Facility";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Custom404 = () => {
  return (
    <>
      <Breadcrumb title="404 Not Found" />

      <div className="error-area ptb-60">
        <div className="container">
          <div className="error-content">
            <img src="/images/404.png" alt="error" />

            <h3>404 Page Not Found</h3>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>

            <Link href="/" className="btn btn-light">
              Go to Home
            </Link>
          </div>
        </div>
      </div>

      <Facility />
    </>
  );
};

export default Custom404;
