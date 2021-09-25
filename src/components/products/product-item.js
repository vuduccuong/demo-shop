import {
  faAngleDown,
  faAngleUp,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWishList } from "../../fakeData";
import { addCart } from "../../features/cart/cartSlice";

const ProductItem = (props) => {
  const { product } = props;
  const { id, productName, productWish, productPrice, productDescription } =
    product;

    const dispath = useDispatch();
  const [count, setCount] = useState(1);
  const [wishProduct, setWishProduct]= useState(productWish);

  const SetCountUp = () => {
    setCount(count + 1);
  };

  const SetCountDown = () => {
    setCount(count - 1);
  };

  const addWishListHandle = (id) => {
    setWishProduct(!wishProduct);
    addWishList(id);
  };

  const addCartHandler = (product) => {
    dispath(addCart(product));
  };

  return (
    <div className="prodlist-i">
      <a className="prodlist-i-img" href="product.html">
        <img src="http://placehold.it/300x311" alt="Adipisci aperiam commodi" />
      </a>
      <div className="prodlist-i-cont">
        <h3>
          <a href="product.html">{productName}</a>
        </h3>
        <div className="prodlist-i-txt">{productDescription}</div>
        <div className="prodlist-i-skuwrap">
          <div className="prodlist-i-skuitem">
            <p className="prodlist-i-skuttl">Color</p>
            <ul className="prodlist-i-skucolor">
              <li className="active">
                <img src="img/color/blue.jpg" alt="" />
              </li>
              <li>
                <img src="img/color/red.jpg" alt="" />
              </li>
              <li>
                <img src="img/color/green.jpg" alt="" />
              </li>
            </ul>
          </div>
          <div className="prodlist-i-skuitem">
            <p className="prodlist-i-skuttl">Clothes sizes</p>
            <select>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </div>
        </div>
        <div className="prodlist-i-action">
          <p className="prodlist-i-qnt">
            <div className="count-product">{count}</div>
            <a href={true} className="prodlist-i-plus" onClick={SetCountUp}>
              <FontAwesomeIcon icon={faAngleUp} />
            </a>
            <a href={true} className="prodlist-i-minus" onClick={SetCountDown}>
              <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </p>
          <p className="prodlist-i-addwrap">
            <a
              href={true}
              className="prodlist-i-add"
              onClick={() => addCartHandler(product)}
            >
              Add to cart
            </a>
          </p>
          <span className="prodlist-i-price">
            <b>${productPrice}</b>
          </span>
        </div>
        <p className="prodlist-i-info">
          <a
            href={true}
            className={`prodlist-i-favorites`}
            onClick={() => addWishListHandle(id)}
          >
            <FontAwesomeIcon icon={faHeart} className={`${wishProduct ? `prod-item-wish`: `prod-item-nonwish`}`} />
            {wishProduct ? `Remove wishlist` : `Add to wishlist`}
          </a>
        </p>
      </div>

      <div className="prodlist-i-props-wrap">
        <ul className="prodlist-i-props">
          <li>
            <b>Exterior</b> Silt Pocket
          </li>
          <li>
            <b>Material</b> PU
          </li>
          <li>
            <b>Occasion</b> Versatile
          </li>
          <li>
            <b>Shape</b> Casual Tote
          </li>
          <li>
            <b>Pattern Type</b> Solid
          </li>
          <li>
            <b>Style</b> American Style
          </li>
          <li>
            <b>Hardness</b> Soft
          </li>
          <li>
            <b>Decoration</b> None
          </li>
          <li>
            <b>Closure Type</b> Zipper
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductItem;
