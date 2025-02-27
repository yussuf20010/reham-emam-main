import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const LeftSidebar = () => {
  return (
    <>
      <div className="woocommerce-sidebar-area">
        <Accordion allowMultipleExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Current Selection</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="selected-filters-wrap-list">
                <ul>
                  <li>
                    <Link href="#">44</Link>
                  </li>
                  <li>
                    <Link href="#">XI</Link>
                  </li>
                  <li>
                    <Link href="#">Clothing</Link>
                  </li>
                  <li>
                    <Link href="#">Shoes</Link>
                  </li>
                  <li>
                    <Link href="#">Accessories</Link>
                  </li>
                </ul>

                <div className="delete-selected-filters">
                  <Link href="#">
                    <i className="far fa-trash-alt"></i> <span>Clear All</span>
                  </Link>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Collections</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="collections-list-row">
                <li className="active">
                  <Link href="#">Women’s</Link>
                </li>
                <li>
                  <Link href="#">Men</Link>
                </li>
                <li>
                  <Link href="#">Clothing</Link>
                </li>
                <li>
                  <Link href="#">Shoes</Link>
                </li>
                <li>
                  <Link href="#">Accessories</Link>
                </li>
                <li>
                  <Link href="#">Uncategorized</Link>
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Brands</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="brands-list-row">
                <li className="active">
                  <Link href="#">Adidas</Link>
                </li>
                <li>
                  <Link href="#">Nike</Link>
                </li>
                <li>
                  <Link href="#">Reebok</Link>
                </li>
                <li>
                  <Link href="#">Shoes</Link>
                </li>
                <li>
                  <Link href="#">Ralph Lauren</Link>
                </li>
                <li>
                  <Link href="#">Delpozo</Link>
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Size</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="size-list-row">
                <li>
                  <Link href="#">20</Link>
                </li>
                <li>
                  <Link href="#">24</Link>
                </li>
                <li>
                  <Link href="#">36</Link>
                </li>
                <li>
                  <Link href="#">30</Link>
                </li>
                <li className="active">
                  <Link href="#">XS</Link>
                </li>
                <li>
                  <Link href="#">S</Link>
                </li>
                <li>
                  <Link href="#">M</Link>
                </li>
                <li>
                  <Link href="#">L</Link>
                </li>
                <li>
                  <Link href="#">L</Link>
                </li>
                <li>
                  <Link href="#">XL</Link>
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Price</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="price-list-row">
                <li>
                  <Link href="#">$10 - $100</Link>
                </li>
                <li className="active">
                  <Link href="#">$100 - $200</Link>
                </li>
                <li>
                  <Link href="#">$200 - $300</Link>
                </li>
                <li>
                  <Link href="#">$300 - $400</Link>
                </li>
                <li>
                  <Link href="#">$400 - $500</Link>
                </li>
                <li>
                  <Link href="#">$500 - $600</Link>
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Color</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="color-list-row">
                <li>
                  <Link href="#" title="Black" className="color-black"></Link>
                </li>
                <li>
                  <Link href="#" title="Red" className="color-red"></Link>
                </li>
                <li>
                  <Link href="#" title="Yellow" className="color-yellow"></Link>
                </li>
                <li>
                  <Link href="#" title="White" className="color-white"></Link>
                </li>
                <li>
                  <Link href="#" title="Blue" className="color-blue"></Link>
                </li>
                <li>
                  <Link href="#" title="Green" className="color-green"></Link>
                </li>
                <li>
                  <Link
                    href="#"
                    title="Yellow Green"
                    className="color-yellowgreen"
                  ></Link>
                </li>
                <li>
                  <Link href="#" title="Pink" className="color-pink"></Link>
                </li>
                <li>
                  <Link href="#" title="Violet" className="color-violet"></Link>
                </li>
                <li>
                  <Link
                    href="#"
                    title="Blue Violet"
                    className="color-blueviolet"
                  ></Link>
                </li>
                <li>
                  <Link href="#" title="Lime" className="color-lime"></Link>
                </li>
                <li>
                  <Link href="#" title="Plum" className="color-plum"></Link>
                </li>
                <li>
                  <Link href="#" title="Teal" className="color-teal"></Link>
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Popular Tags</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="tags-list-row">
                <li>
                  <Link href="#">Vintage</Link>
                </li>
                <li>
                  <Link href="#">Black</Link>
                </li>
                <li className="active">
                  <Link href="#">Discount</Link>
                </li>
                <li>
                  <Link href="#">Good</Link>
                </li>
                <li>
                  <Link href="#">Jeans</Link>
                </li>
                <li>
                  <Link href="#">Summer</Link>
                </li>
                <li>
                  <Link href="#">Winter</Link>
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

        {/* Popular Products */}
        <div className="collapse-widget aside-products-widget">
          <h3 className="aside-widget-title">Popular Products</h3>

          <div className="aside-single-products">
            <div className="products-image">
              <Link href="#">
                <img src="/images/img2.jpg" alt="image" />
              </Link>
            </div>

            <div className="products-content">
              <span>
                <Link href="#">Men's</Link>
              </span>
              <h3>
                <Link href="#">Belted chino trousers polo</Link>
              </h3>

              <div className="product-price">
              <span className="old-price">$291.00</span>
                <span className="new-price">$191.00</span>
              </div>
            </div>
          </div>

          <div className="aside-single-products">
            <div className="products-image">
              <Link href="#">
                <img src="/images/img3.jpg" alt="image" />
              </Link>
            </div>

            <div className="products-content">
              <span>
                <Link href="#">Men's</Link>
              </span>
              <h3>
                <Link href="#">Belted chino trousers polo</Link>
              </h3>

              <div className="product-price">
                <span className="old-price">$291.00</span>
                <span className="new-price">$191.00</span>
              </div>
            </div>
          </div>

          <div className="aside-single-products">
            <div className="products-image">
              <Link href="#">
                <img src="/images/img4.jpg" alt="image" />
              </Link>
            </div>

            <div className="products-content">
              <span>
                <Link href="#">Men's</Link>
              </span>
              <h3>
                <Link href="#">Belted chino trousers polo</Link>
              </h3>

              <div className="product-price">
                <span className="old-price">$291.00</span>
                <span className="new-price">$191.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Trending */}
        <div className="collapse-widget aside-trending-widget">
          <div className="aside-trending-products">
            <img src="/images/bestseller-hover-img1.jpg" alt="image" />

            <div className="category">
              <h4>Top Trending</h4>
              <span>Spring/Summer 2018 Collection</span>
            </div>
            <Link href="#"></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
