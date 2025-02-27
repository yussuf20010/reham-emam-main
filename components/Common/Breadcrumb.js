import React from 'react';
import Link from 'next/link';

const Breadcrumb = ({ title }) => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Breadcrumb;
