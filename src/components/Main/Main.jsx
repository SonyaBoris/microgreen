import { motion } from "framer-motion"

import s from "./Main.module.css"

import MISKA from "../../assets/миска2.png"
import LISTS from "../../assets/листики.png"
import CIRCLE from "../../assets/circle.png"
import { Link } from "react-router-dom"


const Main = () => {
  const h1Variants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    }
  }
  const h2Variants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    }
  }

  return (
    <section className={s.main}>
      <div className="container">
        <motion.h1 className={s.title}
          initial={"hidden"}
          animate={"visible"}
          transition={{
            delay: .4,
          }}
          variants={h1Variants}
        >микро</motion.h1>
        <motion.h2 className={s.desc}
          initial={"hidden"}
          animate={"visible"}
          transition={{
            delay: .4,
          }}
          variants={h2Variants}
        >зелень</motion.h2>
        <motion.img className={s.lists} src={LISTS} alt=""
          initial={{
            x: 200,
            opacity: 0,
            rotate: 20,
          }}
          animate={{
            x: 0,
            opacity: 1,
            rotate: -20,
          }}
          transition={{
            ease: [0.075, 0.9, 0.1, 1],
            duration: 2,
          }}
        />
        <motion.img className={s.miska} src={MISKA} alt=""
          initial={{
            x: 200,
            opacity: 0,
            rotate: 20,
          }}
          animate={{
            x: 0,
            opacity: 1,
            rotate: -20,
          }}
          transition={{
            ease: [0.075, 0.9, 0.1, 1],
            duration: 2,
          }}
        />
        <motion.p className={s.text}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
          }}
        >Маленькое ростки с огромной пользой. Сделайте каждый прием пищи богатым на витамины и микроэлементы</motion.p>
        <Link to="/about">
          <button>Купить</button>
        </Link>
        <motion.img className={s.circle} src={CIRCLE} alt=""
          initial={{

          }}
          animate={{
            rotate: -360,
          }}
          transition={{
            ease: 'linear',
            duration: 4,
            repeat: Infinity,
          }} />
      </div >
    </section>


  );
}

export default Main;