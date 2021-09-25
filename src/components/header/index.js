import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faHeart,
  faLock,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderPage = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const totalItems = useSelector((state) => state.shopCart.cartItems);

  return (
    <header className="header">
      <div className="header-middle">
        <div className="container header-middle-cont">
          <div className="toplogo">
            <Link to="/">
              <img src="img/logo.png" alt="Mai Xốp" />
            </Link>
          </div>
          <div className="shop-menu">
            <ul>
              <li>
                <a href={true}>
                  <FontAwesomeIcon icon={faHeart} />
                  <span className="shop-menu-ttl">Wishlist</span>(
                  <span id="topbar-favorites">1</span>)
                </a>
              </li>

              <li className="topauth">
                <a href={true}>
                  <FontAwesomeIcon icon={faLock} />
                  <span className="shop-menu-ttl">Registration</span>
                </a>
                <a href={true}>
                  <span className="shop-menu-ttl">Login</span>
                </a>
              </li>

              <li>
                <div className="h-cart">
                  <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="shop-menu-ttl">Cart</span>(
                    <b>{totalItems.length}</b>)
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <nav className="topmenu">
            <div className="topcatalog">
              <Link to="/" className="topcatalog-btn active">
                <span>All</span> catalog
              </Link>
            </div>

            <button type="button" className="mainmenu-btn">
              Menu
            </button>

            <ul className="mainmenu">
              <li>
                <a href={true}>Home</a>
              </li>
              <li className="menu-item-has-children">
                <a href={true}>
                  Catalog <FontAwesomeIcon icon={faAngleDown} />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href={true}>Catalog List - Style 1</a>
                  </li>
                  <li>
                    <a href={true}>Catalog List - Style 2</a>
                  </li>
                  <li>
                    <a href={true}>Catalog Gallery - Style 1</a>
                  </li>
                  <li>
                    <a href={true}>Catalog Gallery - Style 2</a>
                  </li>
                  <li>
                    <a href={true}>Catalog Table</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href={true}>
                  Product <FontAwesomeIcon icon={faAngleDown} />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href={true}>Product - Style 1 (Slider)</a>
                  </li>
                  <li>
                    <a href={true}>Product - Style 2 (Scroll)</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href={true}>Elements</a>
              </li>
              <li className="menu-item-has-children">
                <a href={true}>
                  Blog <FontAwesomeIcon icon={faAngleDown} />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href={true}>Blog - Style 1</a>
                  </li>
                  <li>
                    <a href={true}>Blog - Style 2</a>
                  </li>
                  <li>
                    <a href={true}>Single Post</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href={true}>
                  Pages <FontAwesomeIcon icon={faAngleDown} />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href={true}>Contacts</a>
                  </li>
                  <li>
                    <a href={true}>Cart</a>
                  </li>
                  <li>
                    <a href={true}>Authorization</a>
                  </li>
                  <li>
                    <a href={true}>Compare</a>
                  </li>
                  <li>
                    <a href={true}>Wishlist</a>
                  </li>
                  <li>
                    <a href={true}>Error 404</a>
                  </li>
                </ul>
              </li>
              <li className="mainmenu-more">
                <span>...</span>
                <ul className="mainmenu-sub"></ul>
              </li>
            </ul>

            <div className="topsearch">
              <a
                className="topsearch-btn"
                href={true}
                onClick={(e) => {
                  setShowSearch(!showSearch);
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </a>
              {showSearch && (
                <form
                  className="topsearch-form"
                  action={null}
                  onSubmit={() => {
                    setShowSearch(false);
                  }}
                >
                  <input type="text" placeholder="Search products" />
                  <button type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </form>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
