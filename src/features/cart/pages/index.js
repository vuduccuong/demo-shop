import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearCart } from "../cartSlice";
import CartList from "../components/items/cart-list";

const CartPage = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shopCart.cartItems);

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  if (cartItems.length <= 0) {
    return <h1>Không có sản phẩm nào trong giỏ hàng</h1>;
  }
  return (
    <div>
      <div class="cart-items-wrap">
        <table class="cart-items">
          <thead>
            <tr>
              <td class="cart-image">Photo</td>
              <td class="cart-ttl">Products</td>
              <td class="cart-price">Price</td>
              <td class="cart-quantity">Quantity</td>
              <td class="cart-summ">Sum</td>
              <td class="cart-del">&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            <CartList items={cartItems} />
          </tbody>
        </table>
      </div>
      <ul class="cart-total">
        <li class="cart-summ">
          TOTAL: <b>$815</b>
        </li>
      </ul>
      <div class="cart-submit">
        <div class="cart-coupon">
          <input placeholder="your coupon" type="text" />
          <a class="cart-coupon-btn" href={true}>
            <img src="img/ok.png" alt="your coupon" />
          </a>
        </div>
        <a href={true} class="cart-submit-btn">
          Checkout
        </a>
        <a href={true} class="cart-clear" onClick={clearCartHandler}>
          Clear cart
        </a>
      </div>
    </div>
  );
};

export default CartPage;
