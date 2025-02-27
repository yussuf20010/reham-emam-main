import React from "react";
import Link from "next/link";

const CompareTable = () => {
  return (
    <>
      <div className="compare-area ptb-60">
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> Compare Products
            </h2>
          </div>

          <div className="products-compare-table table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Products</td>
                  <td>
                    <div className="remove-btn">
                      <button type="button" className="remove">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>

                    <div className="single-product-box">
                      <div className="product-image">
                        <Link href="#">
                          <img src="/images/img2.jpg" alt="image" />
                          <img src="/images/img-hover2.jpg" alt="image" />
                        </Link>
                      </div>

                      <div className="product-content">
                        <h3>
                          <Link href="#">Belted chino trousers polo</Link>
                        </h3>

                        <div className="product-price">
                          <span className="new-price">$191.00</span>
                        </div>

                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>

                        <button type="button" className="btn btn-light">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="remove-btn">
                      <button type="button" className="remove">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>

                    <div className="single-product-box">
                      <div className="product-image">
                        <Link href="#">
                          <img src="/images/img3.jpg" alt="image" />
                          <img src="/images/img-hover3.jpg" alt="image" />
                        </Link>
                      </div>

                      <div className="product-content">
                        <h3>
                          <Link href="#">Belted chino trousers polo</Link>
                        </h3>

                        <div className="product-price">
                          <span className="new-price">$191.00</span>
                        </div>

                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>

                        <button type="button" className="btn btn-light">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="remove-btn">
                      <button type="button" className="remove">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>

                    <div className="single-product-box">
                      <div className="product-image">
                        <Link href="#">
                          <img src="/images/img4.jpg" alt="image" />
                          <img src="/images/img-hover4.jpg" alt="image" />
                        </Link>
                      </div>

                      <div className="product-content">
                        <h3>
                          <Link href="#">Belted chino trousers polo</Link>
                        </h3>

                        <div className="product-price">
                          <span className="new-price">$191.00</span>
                        </div>

                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>

                        <button type="button" className="btn btn-light">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="remove-btn">
                      <button type="button" className="remove">
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>

                    <div className="single-product-box">
                      <div className="product-image">
                        <Link href="#">
                          <img src="/images/img5.jpg" alt="image" />
                          <img src="/images/img-hover5.jpg" alt="image" />
                        </Link>
                      </div>

                      <div className="product-content">
                        <h3>
                          <Link href="#">Belted chino trousers polo</Link>
                        </h3>

                        <div className="product-price">
                          <span className="new-price">$191.00</span>
                        </div>

                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>

                        <button type="button" className="btn btn-light">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Collection</td>
                  <td>
                    <p>
                      <Link href="#">Shirt,</Link>{" "}
                      <Link href="#">New Products,</Link>{" "}
                      <Link href="#">T-Shirt</Link>
                    </p>
                  </td>
                  <td>
                    <p>
                      <Link href="#">Shirt,</Link>{" "}
                      <Link href="#">New Products,</Link>{" "}
                      <Link href="#">T-Shirt</Link>
                    </p>
                  </td>
                  <td>
                    <p>
                      <Link href="#">Shirt,</Link>{" "}
                      <Link href="#">New Products,</Link>{" "}
                      <Link href="#">T-Shirt</Link>
                    </p>
                  </td>
                  <td>
                    <p>
                      <Link href="#">Shirt,</Link>{" "}
                      <Link href="#">New Products,</Link>{" "}
                      <Link href="#">T-Shirt</Link>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>Availability</td>
                  <td>
                    <p>In Stock</p>
                  </td>
                  <td>
                    <p>In Stock</p>
                  </td>
                  <td>
                    <p>In Stock</p>
                  </td>
                  <td>
                    <p>In Stock</p>
                  </td>
                </tr>

                <tr>
                  <td>Material</td>
                  <td>
                    <p>100% Polyester</p>
                  </td>
                  <td>
                    <p>100% Polyester</p>
                  </td>
                  <td>
                    <p>100% Polyester</p>
                  </td>
                  <td>
                    <p>100% Polyester</p>
                  </td>
                </tr>

                <tr>
                  <td>Vendor</td>
                  <td>
                    <p>Lacoste</p>
                  </td>
                  <td>
                    <p>Lacoste</p>
                  </td>
                  <td>
                    <p>Lacoste</p>
                  </td>
                  <td>
                    <p>Lacoste</p>
                  </td>
                </tr>

                <tr>
                  <td>SKU</td>
                  <td>
                    <p>00105сd-1</p>
                  </td>
                  <td>
                    <p>00105сd-1</p>
                  </td>
                  <td>
                    <p>00105сd-1</p>
                  </td>
                  <td>
                    <p>00105сd-1</p>
                  </td>
                </tr>

                <tr>
                  <td>Color</td>
                  <td>
                    <p>White</p>
                  </td>
                  <td>
                    <p>Black</p>
                  </td>
                  <td>
                    <p>Blue</p>
                  </td>
                  <td>
                    <p>Pink</p>
                  </td>
                </tr>

                <tr>
                  <td>Size</td>
                  <td>
                    <p>20</p>
                  </td>
                  <td>
                    <p>22</p>
                  </td>
                  <td>
                    <p>XXL</p>
                  </td>
                  <td>
                    <p>XL</p>
                  </td>
                </tr>

                <tr>
                  <td>Barcode</td>
                  <td>
                    <p>1234567890</p>
                  </td>
                  <td>
                    <p>1234567890</p>
                  </td>
                  <td>
                    <p>1234567890</p>
                  </td>
                  <td>
                    <p>1234567890</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareTable;
