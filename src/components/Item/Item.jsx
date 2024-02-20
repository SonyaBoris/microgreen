import { useDispatch } from "react-redux";
import { activeItem,addItemToCart } from "../../redux/greenSlice"

import s from "./Item.module.css"

const Item = ({ name, image, id, price }) => {

  const dispatch = useDispatch()

  return (
    <div className={s.item}>
      <img className={s.image} src={image} />
      <h4>{name}</h4>
      <p>{price} р</p>
      <button className={s.btn} onClick={() =>dispatch(activeItem({id})) }>Подробнее</button>
      <button onClick={()=>dispatch(addItemToCart({id,name,image, price}))}>Добавить в корзину</button>
    </div>
  );
}

export default Item;