import { useState } from "react";
import Item from "../Item/Item";
import s from "./Assortiment.module.css"
import { useDispatch } from "react-redux";

import {addItemToCart} from "../../redux/greenSlice"

const green = [
  {
    "id": 0,
    "name": "Горох",
    "image": "../src/assets/goroh.png",
    "price": 150,
    "info": "Польза микрозелени гороха и его выращивание. Микрозелень гороха обладает не только декоративными свойствами, но и содержит множество полезных и питательных веществ. Молодые побеги гороха – это источник витаминов С и группы В (В1, В2, В6, В5, В9), кальция, магния, железа, бета-каротина, лютеина и зеаксантина"
  },
  {
    "id": 1,
    "name": "Горчица",
    "image": "../src/assets/gorchicha.png",
    "price": 150,
    "info": "Польза микрозелени гороха и его выращивание. Микрозелень гороха обладает не только декоративными свойствами, но и содержит множество полезных и питательных веществ. Молодые побеги гороха – это источник витаминов С и группы В (В1, В2, В6, В5, В9), кальция, магния, железа, бета-каротина, лютеина и зеаксантина"
  },
  {
    "id": 2,
    "name": "Редис",
    "image": "../src/assets/redis.png",
    "price": 150,
    "info": "Польза микрозелени гороха и его выращивание. Микрозелень гороха обладает не только декоративными свойствами, но и содержит множество полезных и питательных веществ. Молодые побеги гороха – это источник витаминов С и группы В (В1, В2, В6, В5, В9), кальция, магния, железа, бета-каротина, лютеина и зеаксантина"
  },
  {
    "id": 3,
    "name": "Рукула",
    "image": "../src/assets/rukula.png",
    "price": 150,
    "info": "Польза микрозелени гороха и его выращивание. Микрозелень гороха обладает не только декоративными свойствами, но и содержит множество полезных и питательных веществ. Молодые побеги гороха – это источник витаминов С и группы В (В1, В2, В6, В5, В9), кальция, магния, железа, бета-каротина, лютеина и зеаксантина"
  },
  {
    "id": 4,
    "name": "Шпинат",
    "image": "../src/assets/zelen.png",
    "price": 150,
    "info": "Польза микрозелени гороха и его выращивание. Микрозелень гороха обладает не только декоративными свойствами, но и содержит множество полезных и питательных веществ. Молодые побеги гороха – это источник витаминов С и группы В (В1, В2, В6, В5, В9), кальция, магния, железа, бета-каротина, лютеина и зеаксантина"
  }
]

const Assortiment = () => {
  const [activeItem, setActiveItem] = useState(0)
  const onSelectItem = (index) => {
    setActiveItem(index)
  }
  console.log(activeItem)
  const selectItem = green[activeItem]

  const addToCart = () =>{
    dispatch(addItemToCart(green))
  }

  const dispatch = useDispatch()
  
  return (
    <section>
      <div className="container">
        <div className={s.about}>
          <img src={selectItem.image} width={500} />
          <div className={s.info}>
            <h2>{selectItem.name}</h2>
            <p>{selectItem.info}</p>
            <div className={s.price}>
              <p>Стоимость: </p>
              {selectItem.price} p
            </div>
            <button onClick={addToCart}>Добавить в корзину</button>
          </div>

        </div>
        <div className={s.assortiment}>
          {green.map((obj) => (
            <Item key={obj.id} name={obj.name} image={obj.image} id={obj.id} onSelectItem={onSelectItem}  />
          ))}
        </div>


      </div>
    </section>
  );
}

export default Assortiment;