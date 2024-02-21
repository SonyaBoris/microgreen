import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/greenSlice"

import s from "./Assortiment.module.css"

const AssortimentActive = ({ image, info, price, id, name, benefit, vitamins }) => {

  const dispatch = useDispatch()
  
  return (
    <div className={s.about}>
      <img src={image} width={500} />
      <div className={s.info}>
        <h2>{name}</h2>
        <div className={s.text}>
          <p className={s.properties}>Вкус:</p>
          <p className={s.description}>{info}</p>
        </div>
        <div className={s.text}>
          <p className={s.properties}>Содержит:</p>
          <p className={s.description}>{vitamins}</p>
        </div>
        <div className={s.text}>
          <p className={s.properties}>Польза:</p>
          <p className={s.description}>{benefit}</p>
        </div>
        <div className={s.text}>
          <p className={s.properties}>Стоимость: </p>
          <p className={s.description}>{price} p</p>
        </div>
        <button onClick={() => dispatch(addItemToCart({ id, name, image, price }))}>Добавить в корзину</button>
      </div>

    </div>
  );
}

export default AssortimentActive;