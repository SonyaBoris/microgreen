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
      <motion.a custom={2}
        variants={textAnimate}
        href="#part1"
        className={s.about}>
        <span>Подробнее</span>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 2.08333C12.8593 2.08333 13.151 2.375 13.151 2.73437L13.151 19.6333L19.7187 12.9552C19.7779 12.8914 19.8494 12.8402 19.9288 12.8045C20.0082 12.7688 20.0939 12.7495 20.1809 12.7475C20.2679 12.7455 20.3545 12.761 20.4354 12.7931C20.5163 12.8251 20.59 12.8731 20.6521 12.9341C20.7141 12.9951 20.7633 13.068 20.7968 13.1484C20.8302 13.2287 20.8472 13.315 20.8467 13.402C20.8462 13.4891 20.8282 13.5751 20.7939 13.6551C20.7596 13.7351 20.7096 13.8074 20.6468 13.8677L12.9703 21.674L12.9567 21.688C12.8882 21.7557 12.8055 21.8072 12.7146 21.8389C12.6237 21.8706 12.5269 21.8817 12.4312 21.8714C12.2746 21.855 12.1293 21.7823 12.0223 21.6667L4.3536 13.8677C4.29085 13.8074 4.24083 13.7351 4.20651 13.6551C4.17218 13.5751 4.15424 13.4891 4.15376 13.402C4.15327 13.315 4.17024 13.2287 4.20366 13.1484C4.23709 13.068 4.28629 12.9951 4.34836 12.9341C4.41042 12.8731 4.4841 12.8251 4.56502 12.7931C4.64595 12.761 4.73247 12.7455 4.81949 12.7475C4.90651 12.7495 4.99226 12.7688 5.07165 12.8045C5.15104 12.8402 5.22247 12.8914 5.28172 12.9552L11.8494 19.6333L11.8494 2.73437C11.8494 2.375 12.1401 2.08333 12.5 2.08333Z" fill="black" />
        </svg>
      </motion.a>
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