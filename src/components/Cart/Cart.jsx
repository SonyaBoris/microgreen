import { useSelector } from "react-redux";

import s from "./Cart.module.css"

import { CartItem } from "../index";
import { sumBy } from "../../utils/common";


const Cart = () => {
  const cart = useSelector((state) => state.counter.cart)

  return (
    <section>
      <div className="container">
        {!cart.length ? (
          <div className={s.empty}>Корзина пустая</div>
        ) : (
          <div className={s.cart}>
            <div className={s.content}>
               <div className={s.items}>
              {cart.map(item => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <div className={s.price}>
              <p>Итого:</p>
              <span>{sumBy(cart.map(({ quantity, price }) => quantity * price))} р</span>
            </div>
            </div>
           
            <div className={s.bottom}>
              <div className={s.type}>
                <div>Доставка</div>
                <div>Самовывоз</div>
              </div>
              <form className={s.form} action="">
                <input className={s.input} type="text" placeholder="имя" />
                <input className={s.input} type="text" placeholder="тел" />
                <input className={s.input} type="text" placeholder="адресс" />
              </form>
              <button>Отправить заявку</button>
            </div>
          </div>
        )
        }
      </div>
    </section>
  );
}

export default Cart;