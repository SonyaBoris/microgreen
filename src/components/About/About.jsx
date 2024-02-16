import { motion } from "framer-motion"
import { Link } from "react-router-dom";

import s from "./About.module.css"

import ABOUT1 from "../../assets/about1.png"
import ABOUT2 from "../../assets/about2.png"


const About = () => {
  const animateImg = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section>
      <div className={s.block}>
        <motion.img className={s.image} src={ABOUT1} alt=""
          initial={"hidden"}
          animate={"visible"}
          variants={animateImg}
        />
        <div className="container about">
          <motion.div className={s.text}
          initial={{
            opacity: 0,
          }}
          animate={{   
            opacity: 1,
          }}
          transition={{
          delay: .3,
          ease: "easeInOut",
          }}>
            <h2>Добро пожаловать</h2>
            <p>
              Меня зовут Василий, уже несколько лет я выращиваю микрозелень для ресторанов и людей, которые любят вкусно покушать</p>
            <p>
              Здесь вы можете заказать зелень с доставкой на дом или на самовывоз из моего магазина в Самаре
            </p>
            <Link to="/assortiment">
              <button className={s.btn}>Сделать заказ</button>
            </Link>
          </motion.div>
        </div>

        <motion.img className={s.image2} src={ABOUT2} alt="" 
        initial={"hidden"}
        animate={"visible"}
        variants={animateImg}/>
      </div>
    </section>
  );
}

export default About;