import { useState } from "react";
import Item from "../Item/Item";
import s from "./Assortiment.module.css"
import { useDispatch, useSelector } from "react-redux";

import AssortimentActive from "./AssortimentActive";


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
  const actInd = useSelector((state) => state.counter.activeIndex)

  const selectItem = green[actInd] 


  return (
    <section>
      <div className="container">
        <AssortimentActive name={selectItem.name} image={selectItem.image} id={selectItem.id} price={selectItem.price} info={selectItem.info}/>
       
        <div className={s.assortiment}>
          {green.map((obj) => (
            <Item key={obj.id} name={obj.name} image={obj.image} id={obj.id} price={obj.price}/>
          ))}
        </div>


      </div>
    </section>
  );
}

export default Assortiment;