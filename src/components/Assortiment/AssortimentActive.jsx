import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/greenSlice"
import s from "./Assortiment.module.css"

const AssortimentActive = ({ image, info, price, id ,name}) => {

  console.log(name)
  const dispatch = useDispatch()
  return (
    <div className={s.about}>
      <img src={image} width={500} />
      <div className={s.info}>
        <h2>{name}</h2>
        <p>{info}</p>
        <div className={s.price}>
          <p>Стоимость: </p>
          {price} p
        </div>
        <button onClick={() => dispatch(addItemToCart({id,name,image, price}))}>Добавить в корзину</button>
      </div>

    </div>
  );
}

export default AssortimentActive;