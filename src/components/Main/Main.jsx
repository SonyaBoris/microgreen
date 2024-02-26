import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import s from "./Main.module.css"

import MISKA from "../../assets/миска2.png"
import LISTS from "../../assets/листики.png"


const Main = () => {
  const textAnimate = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: custom => (
      {
        x: 0,
        opacity: 1,
        transition: { delay: custom * 1 }
      }
    )
  }
  const imgAnimate = {
    hidden: {
      y: 200,
      opacity: 0,
      rotate: 20,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: -20,
    }
  }

  return (
 
      <motion.section className={s.main} initial="hidden" whileInView="visible">
        <div className={s.back}>
          <motion.h1 className={s.title}
            custom={.5}
            variants={textAnimate}
          >микро</motion.h1>
          <motion.h2 className={s.desc}
            custom={.8}
            variants={textAnimate}
          >зелень</motion.h2>

          <motion.p className={s.text}
            custom={1}
            variants={textAnimate}
          >Маленькое ростки с огромной пользой. Сделайте каждый прием пищи богатым на витамины и микроэлементы</motion.p>
          <Link to="/assortiment">
            <motion.button
              custom={1.2}
              variants={textAnimate}>Купить</motion.button>
          </Link>
        </div>

        <motion.img className={s.lists} src={LISTS} alt=""
          transition={{
            ease: [0.075, 0.9, 0.1, 1],
            duration: 2,
          }}
          variants={imgAnimate}
        />
        <motion.img className={s.miska} src={MISKA} alt=""
          variants={imgAnimate}
          transition={{
            ease: [0.075, 0.9, 0.1, 1],
            duration: 2,
          }}
        />
      </motion.section>

  );
}

export default Main;