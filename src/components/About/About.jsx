import { motion } from "framer-motion"
import { Link } from "react-router-dom";

import s from "./About.module.css"

import PHOTO1 from "../../assets/photo1.jpg"
import PHOTO5 from "../../assets/photo5.jpg"
import PHOTO3 from "../../assets/photo3.jpg"
import PHOTO6 from "../../assets/photo6.jpg"


const About = () => {
  const imgAnimate = {
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
  const featureAnimate={
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
  const bgAnimate={
    hidden: {
      x: 100,
      opacity:0
    },
    visible: custom => (
      {
        x: 0,
        opacity:1,
        transition: { delay: custom * 1 }
      }
    )
  }
  return (
    <motion.section >
        <motion.div
        initial="hidden" whileInView="visible" viewport={{amount:0.2}} 
         custom={.2}
         variants={imgAnimate}
         className={s.title}>
          для любителей кушать со вкусом
        </motion.div>
        <motion.div className={s.images} initial="hidden" whileInView="visible" viewport={{amount:0.2}} >
          <motion.img variants={featureAnimate} custom={1} className={s.image} src={PHOTO1} />
          <motion.img variants={featureAnimate} custom={1.3} className={s.image} src={PHOTO5} />
          <motion.img variants={featureAnimate} custom={1.6} className={s.image} src={PHOTO3} />
          <motion.img variants={featureAnimate} custom={1.9} className={s.image} src={PHOTO6} />
        </motion.div>
        <motion.div className={s.block} initial="hidden" whileInView="visible" viewport={{amount:0.2}} >
          <div className={s.text}>
           Привет, меня зовут Василий! Уже несколько лет я выращиваю микрозелень для домашнего употребления в пищу и ресторанов
          </div>
          <motion.div variants={bgAnimate} custom={2} className={s.text}>
          Микрозелень — молодые побеги растений, которые используются как в пищу, так и для украшения блюд. Её используют в салатах, супах, коктейлях, смузи, других напитках и блюдах.
          <br/> <br/>
          Это прекрасный источник витамина С и микроэлементов, таких как магний, медь, калий, цинк и железо. Они защищают организм от ряда заболеваний, укрепляют иммунитет и улучшают работу сосудов и сердца.
          </motion.div>
        </motion.div>

    </motion.section>
  );
}

export default About;