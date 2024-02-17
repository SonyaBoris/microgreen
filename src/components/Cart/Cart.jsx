import { useDispatch, useSelector } from "react-redux";

import s from "./Cart.module.css"
import IMAGe from "../../assets/goroh.png"

const Cart = () => {

  return (
    <section>
      <div className="container">
        {/* {!cart.length ? (
          <div className={s.empty}>Here is empty</div>
        ) : (
          <div>dsdsd</div>
        )
        } */}
        <div className={s.cart}>
          <div className={s.items}>
            <div className={s.item}>
              <img src={IMAGe} width={150} alt="" />
              <div>
                <h4>горох</h4>
                <p>Количество: </p>
                <div className={s.quantity}>
                  <div>+</div>
                  <p>1</p>
                  <div>-</div>
                </div>
                <div>Стоимость: 1200 p</div>

              </div>
            </div>
          </div>
          <div className={s.price}>
            <p>Итого:</p>
            <p> 12345 p</p>
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
      </div>

    </section>
  );
}

export default Cart;