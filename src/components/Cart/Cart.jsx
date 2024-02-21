import { useSelector } from "react-redux";

import s from "./Cart.module.css"

import {CartItem} from "../index";


const Cart = () => {
  const cart = useSelector((state) => state.counter.cart)
 

  return (
    <section>
      <div className="container">
        {!cart.length ? (
          <div className={s.empty}>Корзина пустая</div>
        ) : (

          <div className={s.cart}>
            <div className={s.items}>
              {cart.map(obj => (
                <CartItem key={obj.id} {...obj} />
              ))}
              <div className={s.price}>
                <p>Итого:</p>
                <p> 12345 p</p>
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