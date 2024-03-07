import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import s from "./Cart.module.css"

import { CartItem } from "../index";
import { sumBy } from "../../utils/common";
import { sendMessage } from "../../API/tg";
import Modal from "./Modal";


const Cart = () => {
  const cart = useSelector((state) => state.counter.cart)

  const [inputName, setInputName] = useState('')
  const [inputTel, setInputTel] = useState('')
  const [checked, setChecked] = useState('')
  const [modal, setModal] = useState(false)

  const nameChangeHandler = (e) => {
    setInputName(e.target.value)
  }
  const telChangeHandler = (e) => {
    setInputTel(e.target.value)
  }
  const cartMap = (cart.map(item => `${item.name}: (${item.quantity} шт)`)).join(" ")
  const result = sumBy(cart.map(({ quantity, price }) => quantity * price))

  const handleSubmit = ({ inputTel, inputName, cartMap, checked, result }) => {
    const message = `Имя: ${inputName}. Телефон: ${inputTel}. Заказ: ${cartMap} Тип: ${checked} Итого: ${result}`
    // console.log(message)
    sendMessage(message)
    setModal(true)
  }
  console.log(inputName, inputTel, cartMap, checked);

  return (
    <section>
      <div className="container">
        <div className={s.cart}>
          <div className={s.content}>
            <div className={s.items}>
              {cart.map(item => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <div className={s.price}>
              <p>Итого:</p>
              <span>{result} р</span>
            </div>
          </div>
          <div className={s.bottom}>
            <form onSubmit={() => handleSubmit({ inputName, inputTel, cartMap, checked, result })} className={s.form} action="">

              <div className={s.checkeds}>
                <div>
                  <input className={s.radio} type="radio" checked={checked === "Самовывоз"} onChange={() => setChecked("Самовывоз")} />
                  <label htmlFor="pickup">Самовывоз</label>
                </div>
                <div>
                  <input className={s.radio} type="radio" checked={checked === "Доставка"} onChange={() => setChecked("Доставка")} />
                  <label htmlFor="delivery">Доставка</label>
                </div>
              </div>
              <input onChange={nameChangeHandler} className={s.input} type="text" placeholder="имя" />
              <input onChange={telChangeHandler} className={s.input} type="text" placeholder="телефон" />
              <button type="submit">Отправить заявку</button>
            </form>
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
                <Modal active={modal} setActive={setModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;