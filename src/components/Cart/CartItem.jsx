import { useDispatch } from "react-redux";
import { removeItemFromCart, addItemToCart } from "../../redux/greenSlice"

import s from "./Cart.module.css"

const CartItem = (item) => {
  
  const { name, image, price, id, quantity } = item

  const dispatch = useDispatch()

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }))
  }

  return (
    <div className={s.item}>
      <img src={image} width={150} alt="" />
      <div className={s.info}>
        <h4>{name}</h4>
        <div className={s.quantity}>
          <div className={s.icon} onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}>-</div>
          <p>{quantity}</p>
          <div className={s.icon} onClick={() => changeQuantity(item, Math.max(1, quantity + 1))}>+</div>
        </div>
        <div> {price * quantity} p</div>

      </div>
      <div className={s.icon} onClick={() => dispatch(removeItemFromCart({ id }))}>-</div>
    </div>
  );
}

export default CartItem;