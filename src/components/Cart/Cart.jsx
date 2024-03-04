import { useSelector } from "react-redux";

import s from "./Cart.module.css"

import { CartItem } from "../index";
import { sumBy } from "../../utils/common";
import { Link } from "react-router-dom";


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
              <div className={s.about}>
                <div className={s.itemAbout}>
                  <h4 className={s.itemAboutName}>Доставка</h4>
                  <p>
                    После отправки заявки с вами свяжутся для уточнения заказа. Доставка осуществляется сервисом ЯндексДоставка. Стоимость расчитывается исходя из цены сервиса до вашего адреса
                  </p>
                </div>
                <div className={s.itemAbout}>
                  <h4 className={s.itemAboutName}>Самовывоз</h4>
                  <p>Вы можете сделать заказ, мы отложим выбранные вами позиции. Забрать вы сможете из нашего магазина в удобное вам время.</p>
                  <Link to="/contacts">
                    <button className={s.btn}>Адресс</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
        }
      </div>
    </section>
  );
}

export default Cart;