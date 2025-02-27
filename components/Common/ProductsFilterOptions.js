"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const ProductsFilterOptions = () => {
  const currentRoute = usePathname();

  return (
    <>
      <div className="products-filter-options">
        <div className="row align-items-center">
          <div className="col d-flex">
            <span>View:</span>

            <div className="view-list-row">
              <div className="view-column">
                <Link 
                  href="/products/"  
                  className={`icon-view-two ${
                    currentRoute === "/products/"
                      ? "active"
                      : "non-active"
                  }`}
                >
                  <span></span>
                  <span></span>
                </Link>

                <Link 
                  href="/products/three-grid/" 
                  className={`icon-view-two ${
                    currentRoute === "/products/three-grid/"
                      ? "active"
                      : "non-active"
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </Link>

                <Link 
                  href="/products/four-grid/" 
                  className={`icon-view-two ${
                    currentRoute === "/products/four-grid/"
                      ? "active"
                      : "non-active"
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </Link>

                <Link 
                  href="/products/list-view/" 
                  className={`icon-view-two ${
                    currentRoute === "/products/list-view/"
                      ? "active"
                      : "non-active"
                  }`}
                >
                  <span></span>
                  <span></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col d-flex justify-content-center">
            <p>Showing 22 of 102 results</p>
          </div>

          <div className="col d-flex">
            <span>Show:</span>

            <div className="show-products-number">
              <select>
                <option value="1">22</option>
                <option value="2">32</option>
                <option value="3">42</option>
                <option value="4">52</option>
                <option value="5">62</option>
              </select>
            </div>

            <span>Sort:</span>

            <div className="products-ordering-list">
              <select>
                <option value="1">Featured</option>
                <option value="2">Best Selling</option>
                <option value="3">Price Ascending</option>
                <option value="4">Price Descending</option>
                <option value="5">Date Ascending</option>
                <option value="6">Date Descending</option>
                <option value="7">Name Ascending</option>
                <option value="8">Name Descending</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsFilterOptions;
