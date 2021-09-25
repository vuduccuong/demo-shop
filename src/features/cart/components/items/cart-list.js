import { faAngleDown, faAngleUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { removeCart } from "../../cartSlice";

const CartList = (props) => {
  const { items } = props;
  const dispatch = useDispatch();

  const onRemoveItemHandler = id =>{
    dispatch(removeCart(id));
  }

  return items.map((item, index) => {
    return (
      <tr key={item.id}>
        <td className="cart-image">
          <a href="product.html">
            <img
              src="http://placehold.it/61x80"
              alt="Similique delectus totam"
            />
          </a>
        </td>
        <td className="cart-ttl">
          <a href="product.html">{item.productName}</a>
          <p>Color: Red</p>
          <p>Size: XS</p>
        </td>
        <td className="cart-price">
          <b>${item.productPrice}</b>
        </td>
        <td className="cart-quantity">
          <p className="cart-qnt">
            <div>{item.quantity ?? 1}</div>
            <a href={true} className="cart-plus">
              <FontAwesomeIcon icon={faAngleUp} />
            </a>
            <a href={true} className="cart-minus">
              <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </p>
        </td>
        <td className="cart-summ">
          <b>$220</b>
          <p className="cart-forone">
            unit price <b>$220</b>
          </p>
        </td>
        <td className="cart-del cur-pointer">
          <FontAwesomeIcon icon={faTimes} onClick={()=>{onRemoveItemHandler(item.id)}} />
        </td>
      </tr>
    );
  });
};

export default CartList;
