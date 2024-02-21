import s from "./Cart.module.css"

import { useDispatch, useSelector } from "react-redux";
import {removeItemFromCart} from "../../redux/greenSlice"

const CartItem = ({name, image,price,id}) => {
  const quantity = useSelector((state) => state.counter.quantity)
  const dispatch = useDispatch()
  return (
    <div className={s.item}>
      <img src={image} width={150} alt="" />
      <div className={s.info}>
        <h4>{name}</h4>
        <div className={s.quantity}>
          <div className={s.icon}>-</div>
          <p>{quantity}</p>
          <div className={s.icon}>+</div>
        </div>
        <div> {price} p</div>

      </div>
      <div className={s.icon} onClick={()=>dispatch(removeItemFromCart({id}))}>-</div>
    </div>
  );
}

export default CartItem;