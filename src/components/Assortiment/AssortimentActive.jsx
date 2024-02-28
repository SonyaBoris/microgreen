import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/greenSlice"

import s from "./Assortiment.module.css"

const AssortimentActive = ({ image, info, price, id, name, benefit, vitamins, photos }) => {

  const dispatch = useDispatch()


  return (
    <div className={s.about}>
      <div className={s.left}>
        <div className={s.top}>
          <img src={image} width={300} />
          <div className={s.titleContainer}>
            <h1 className={s.title}>
             Микро зелень гороха 
            </h1>            
            </div>
        </div>
        <div className={s.photos}>
          <div className={s.current} style={{ backgroundImage: `url(${photos[0]})` }} />
          <div className={s.current} style={{ backgroundImage: `url(${photos[1]})` }} />
          <div className={s.current} style={{ backgroundImage: `url(${photos[2]})` }} />
        </div>
      </div>
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