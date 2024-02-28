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
        <div className={s.block}>
          <h4 className={s.name}>{name}</h4>
          <div className={s.quantity}>
            <div className={s.icon} onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.20801 12.5H19.7913" stroke="black" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p>{quantity}</p>
            <div className={s.icon} onClick={() => changeQuantity(item, Math.max(1, quantity + 1))}>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7497 13.5394H13.5413V18.7477C13.5413 19.024 13.4316 19.2889 13.2362 19.4843C13.0409 19.6796 12.7759 19.7894 12.4997 19.7894C12.2234 19.7894 11.9585 19.6796 11.7631 19.4843C11.5678 19.2889 11.458 19.024 11.458 18.7477V13.5394H6.24967C5.97341 13.5394 5.70846 13.4296 5.51311 13.2343C5.31775 13.0389 5.20801 12.774 5.20801 12.4977C5.20801 12.2215 5.31775 11.9565 5.51311 11.7612C5.70846 11.5658 5.97341 11.4561 6.24967 11.4561H11.458V6.24772C11.458 5.97145 11.5678 5.7065 11.7631 5.51115C11.9585 5.3158 12.2234 5.20605 12.4997 5.20605C12.7759 5.20605 13.0409 5.3158 13.2362 5.51115C13.4316 5.7065 13.5413 5.97145 13.5413 6.24772V11.4561H18.7497C19.0259 11.4561 19.2909 11.5658 19.4862 11.7612C19.6816 11.9565 19.7913 12.2215 19.7913 12.4977C19.7913 12.774 19.6816 13.0389 19.4862 13.2343C19.2909 13.4296 19.0259 13.5394 18.7497 13.5394Z" fill="black" />
              </svg>
            </div>
          </div>
        </div>
        <div className={s.sum}> {price * quantity} p</div>
      </div>
      <div className={s.close} onClick={() => dispatch(removeItemFromCart({ id }))}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.68744 5.03132C6.46529 4.82432 6.17146 4.71162 5.86787 4.71698C5.56427 4.72234 5.27461 4.84532 5.0599 5.06003C4.84519 5.27474 4.72221 5.5644 4.71685 5.868C4.71149 6.17159 4.82418 6.46542 5.03118 6.68757L10.8437 12.5001L5.03118 18.3126C4.91605 18.4199 4.8237 18.5492 4.75965 18.693C4.6956 18.8367 4.66116 18.9919 4.65839 19.1492C4.65561 19.3066 4.68455 19.4629 4.74349 19.6088C4.80243 19.7547 4.89016 19.8873 5.00144 19.9986C5.11272 20.1098 5.24527 20.1976 5.39119 20.2565C5.53711 20.3154 5.6934 20.3444 5.85075 20.3416C6.0081 20.3388 6.16328 20.3044 6.30703 20.2403C6.45077 20.1763 6.58015 20.084 6.68744 19.9688L12.4999 14.1563L18.3124 19.9688C18.4197 20.084 18.5491 20.1763 18.6928 20.2403C18.8366 20.3044 18.9918 20.3388 19.1491 20.3416C19.3065 20.3444 19.4628 20.3154 19.6087 20.2565C19.7546 20.1976 19.8872 20.1098 19.9984 19.9986C20.1097 19.8873 20.1974 19.7547 20.2564 19.6088C20.3153 19.4629 20.3443 19.3066 20.3415 19.1492C20.3387 18.9919 20.3043 18.8367 20.2402 18.693C20.1762 18.5492 20.0838 18.4199 19.9687 18.3126L14.1562 12.5001L19.9687 6.68757C20.1757 6.46542 20.2884 6.17159 20.283 5.868C20.2777 5.5644 20.1547 5.27474 19.94 5.06003C19.7253 4.84532 19.4356 4.72234 19.132 4.71698C18.8284 4.71162 18.5346 4.82432 18.3124 5.03132L12.4999 10.8438L6.68744 5.03132Z" fill="black" />
        </svg>
      </div>
    </div>
  );
}

export default CartItem;