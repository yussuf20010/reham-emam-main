import React from "react";
import Link from "next/link";

const CartContent = () => {
  return (
    <>
      <div className="cart-area ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <form>
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="#">
                            <img src="/images/img2.jpg" alt="item" />
                          </Link>
                        </td>

                        <td className="product-name">
                          <Link href="#">Wood Pencil</Link>
                          <ul>
                            <li>
                              Color: <strong>Light Blue</strong>
                            </li>
                            <li>
                              Size: <strong>XL</strong>
                            </li>
                            <li>
                              Material: <strong>Cotton</strong>
                            </li>
                          </ul>
                        </td>

                        <td className="product-price">
                          <span className="unit-amount">$191.00</span>
                        </td>

                        <td className="product-quantity">
                          <div className="input-counter">
                            <input type="number" defaultValue="1" />
                          </div>
                        </td>

                        <td className="product-subtotal">
                          <span className="subtotal-amount">$191.00</span>

                          <Link href="#" className="remove">
                            <i className="far fa-trash-alt"></i>
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <td className="product-thumbnail">
                          <Link href="#">
                            <img src="/images/img3.jpg" alt="item" />
                          </Link>
                        </td>

                        <td className="product-name">
                          <Link href="#">T-Shirt</Link>
                          <ul>
                            <li>
                              Color: <strong>Light Blue</strong>
                            </li>
                            <li>
                              Size: <strong>XL</strong>
                            </li>
                            <li>
                              Material: <strong>Cotton</strong>
                            </li>
                          </ul>
                        </td>

                        <td className="product-price">
                          <span className="unit-amount">$111.00</span>
                        </td>

                        <td className="product-quantity">
                          <div className="input-counter">
                            <input type="number" defaultValue="1" />
                          </div>
                        </td>

                        <td className="product-subtotal">
                          <span className="subtotal-amount">$111.00</span>

                          <Link href="#" className="remove">
                            <i className="far fa-trash-alt"></i>
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <td className="product-thumbnail">
                          <Link href="#">
                            <img src="/images/img4.jpg" alt="item" />
                          </Link>
                        </td>

                        <td className="product-name">
                          <Link href="#">Casual Shoe</Link>
                          <ul>
                            <li>
                              Color: <strong>Light Blue</strong>
                            </li>
                            <li>
                              Size: <strong>XL</strong>
                            </li>
                            <li>
                              Material: <strong>Cotton</strong>
                            </li>
                          </ul>
                        </td>

                        <td className="product-price">
                          <span className="unit-amount">$100.00</span>
                        </td>

                        <td className="product-quantity">
                          <div className="input-counter">
                            <input type="number" defaultValue="1" />
                          </div>
                        </td>

                        <td className="product-subtotal">
                          <span className="subtotal-amount">$100.00</span>

                          <Link href="#" className="remove">
                            <i className="far fa-trash-alt"></i>
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <td className="product-thumbnail">
                          <Link href="#">
                            <img src="/images/img5.jpg" alt="item" />
                          </Link>
                        </td>

                        <td className="product-name">
                          <Link href="#">Coffee Bag</Link>
                          <ul>
                            <li>
                              Color: <strong>Light Blue</strong>
                            </li>
                            <li>
                              Size: <strong>XL</strong>
                            </li>
                            <li>
                              Material: <strong>Cotton</strong>
                            </li>
                          </ul>
                        </td>

                        <td className="product-price">
                          <span className="unit-amount">$414.00</span>
                        </td>

                        <td className="product-quantity">
                          <div className="input-counter">
                            <input type="number" defaultValue="1" />
                          </div>
                        </td>

                        <td className="product-subtotal">
                          <span className="subtotal-amount">$414.00</span>

                          <Link href="#" className="remove">
                            <i className="far fa-trash-alt"></i>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="cart-buttons">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-7">
                      <div className="continue-shopping-box">
                        <Link href="#" className="btn btn-light">
                          Continue Shopping
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-5 text-right">
                      <Link href="#" className="btn btn-primary">
                        Update Cart
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="cart-totals">
                  <h3>Cart Totals</h3>

                  <ul>
                    <li>
                      Subtotal <span>$2250.00</span>
                    </li>
                    <li>
                      Shipping <span>$00.00</span>
                    </li>
                    <li>
                      Total{" "}
                      <span>
                        <b>$2250.00</b>
                      </span>
                    </li>
                  </ul>
                  <Link href="#" className="btn btn-light">
                    Proceed to Checkout
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartContent;
