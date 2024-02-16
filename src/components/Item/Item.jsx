import s from "./Item.module.css"

import GOROH from "../../assets/goroh.png"

const Item = () => {
  return (
    <div className={s.item}>     
      <img className={s.image} src={GOROH} />
      <h4>Горох</h4>
      <p>150 p</p>
      <button className={s.btn}>Подробнее</button>
      <button>Добавить в корзину</button>
    </div>
  );
}

export default Item;