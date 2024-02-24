import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import s from "./Main.module.css"

import MISKA from "../../assets/миска2.png"
import LISTS from "../../assets/листики.png"


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
    <div className="container">
      <section className={s.main}>
        <div className={s.back}>
          <motion.h1 className={s.title}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              delay: .8,
            }}
            variants={h1Variants}
          >микро</motion.h1>
          <motion.h2 className={s.desc}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              delay: 1,
            }}
            variants={h2Variants}
          >зелень</motion.h2>

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
          <Link to="/assortiment">
            <motion.button
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.8,
              }}>Купить</motion.button>
          </Link>
        </div>

        <motion.img className={s.lists} src={LISTS} alt=""
          initial={{
            y: 200,
            opacity: 0,
            rotate: 20,
          }}
          animate={{
            y: 0,
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
            y: 200,
            opacity: 0,
            rotate: 20,
          }}
          animate={{
            y: 0,
            opacity: 1,
            rotate: -20,
          }}
          transition={{
            ease: [0.075, 0.9, 0.1, 1],
            duration: 2,
          }}
        />
      </section>
    </div >

  );
}

export default Main;