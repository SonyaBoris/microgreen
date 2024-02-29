import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/greenSlice"
import { motion } from "framer-motion"

import s from "./Assortiment.module.css"

const AssortimentActive = ({ image, info, price, id, name, benefit, vitamins, photos }) => {

  const dispatch = useDispatch()
  const featureAnimate = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: custom => (
      {
        y: 0,
        opacity: 1,
        transition: { delay: custom * 1 }
      }
    )
  }
  const bgAnimate = {
    hidden: {
      x: -200,
      opacity: 0
    },
    visible: custom => (
      {
        x: 0,
        opacity: 1,
        transition: { delay: custom * 1 }
      }
    )
  }

  return (
    <div className={s.about}>
      <div className={s.left}>
        <motion.div variants={bgAnimate} custom={.2}
        initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} 
         className={s.top}>
          <img className={s.image} src={image} />
          <div className={s.titleContainer}>
            <h1 className={s.title}>
              Микро зелень {name}
            </h1>
          </div>
        </motion.div>
        <motion.div className={s.photos}
        initial="hidden" whileInView="visible" custom={.8} viewport={{ amount: .5 }} variants={featureAnimate}>
          {photos.map((img, index) => (
            <div className={s.current} key={index} style={{ backgroundImage: `url(${img})` }} />
          ))
          }
        </motion.div>
      </div>
      <motion.div className={s.info}
       initial="hidden" whileInView="visible" custom={.5}  variants={featureAnimate}>
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
      </motion.div>
    </div>
  );
}

export default AssortimentActive;