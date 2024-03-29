import { useDispatch } from "react-redux";
import { activeItem, addItemToCart } from "../../redux/greenSlice"

import s from "./Item.module.css"

const Item = ({ name, image, id, price }) => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(activeItem({ id }))
    window.scrollTo({
      top: 0,
      left: 0
    });
  }

  return (
    <div className={s.item}>
      <img className={s.image} src={image} />
      <div></div>
      <div className={s.info}>
        <h4 className={s.name}>{name}</h4>
        <p className={s.price}>{price} р</p>
        <div className={s.buttons}>
          <div className={s.buy} onClick={() => handleClick()}>
            Инфо
          </div>
          <div className={s.buy} onClick={() => dispatch(addItemToCart({ id, name, image, price }))}>
            Купить
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;