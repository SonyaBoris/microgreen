import { motion } from "framer-motion"
import { Link } from "react-router-dom";

import s from "./About.module.css"

import PHOTO1 from "../../assets/photo1.jpg"
import PHOTO2 from "../../assets/photo2.jpg"
import PHOTO5 from "../../assets/photo5.jpg"
import PHOTO3 from "../../assets/photo3.jpg"
import PHOTO6 from "../../assets/photo6.jpg"
import HAND from "../../assets/hand.png"
import CIRCLE from "../../assets/circle.png"
import CIRCLE2 from "../../assets/circle2.png"
import CIRCLE3 from "../../assets/circle3.png"


const About = () => {

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
      x: 100,
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
    <section id="part1" className={s.section}>
      <motion.div  className={s.ticker} initial="hidden" whileInView="visible" viewport={{ amount: .5 }} variants={featureAnimate}>
        <div className={s.tickerWrapper}>
          <p className={s.tickerItem}>эстетично, вкусно и полезно</p>
          <p className={s.tickerItem}>эстетично, вкусно и полезно</p>
          <p className={s.tickerItem}>эстетично, вкусно и полезно</p>
        </div>
        <div className={s.tickerWrapper}>
          <p className={s.tickerItem}>сделайте каждый прием пищи как в ресторане</p>
          <p className={s.tickerItem}>сделайте каждый прием пищи как в ресторане</p>
          <p className={s.tickerItem}>сделайте каждый прием пищи как в ресторане</p>
        </div>
        <div className={s.tickerWrapper}>
          <p className={s.tickerItem}>настоящие витамины</p>
          <p className={s.tickerItem}>настоящие витамины</p>
          <p className={s.tickerItem}>настоящие витамины</p>
        </div>
      </motion.div>
      <motion.div className={s.top} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}
      >
        <motion.div
          className={s.title} custom={.2}
          variants={featureAnimate}>
          для любителей кушать со вкусом
        </motion.div>
        <motion.img custom={1}
          variants={featureAnimate} className={s.imageTop} src={PHOTO2} />
      </motion.div>

      <motion.div className={s.images} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}  >
        <motion.img variants={featureAnimate} custom={.5} className={s.image} src={PHOTO1} />
        <motion.img variants={featureAnimate} custom={.8} className={s.image} src={PHOTO5} />
        <motion.img variants={featureAnimate} custom={1.1} className={s.image} src={PHOTO3} />
        <motion.img variants={featureAnimate} custom={1.4} className={s.image} src={PHOTO6} />
      </motion.div>
      <motion.div className={s.block} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} >
        <motion.div variants={featureAnimate} custom={1} className={s.hand}>
          <img className={s.handImg} src={HAND} />
          <motion.img 
          animate={{ rotate: -360 }}
            transition={{ repeat: Infinity,ease: "linear",duration: 5}} 
            className={s.circle} 
            src={CIRCLE} alt="" />
          <motion.img 
          animate={{ rotate: -360 }}
            transition={{ repeat: Infinity,ease: "linear",duration: 15}}  className={s.circle2} src={CIRCLE2} alt="" />
          <motion.img 
          animate={{ rotate: -360 }}
            transition={{ repeat: Infinity,ease: "linear",duration: 10}}  className={s.circle3} src={CIRCLE3} alt="" />

        </motion.div>
        <motion.div variants={featureAnimate} custom={.8} className={s.text}>
          <h2>Что это? И с чем едят?</h2>
          <p>
            Микрозелень — молодые побеги растений, которые используются как в пищу, так и для украшения блюд. Её используют в салатах, супах, коктейлях, смузи, других напитках и блюдах.
          </p>
          <p>
            Это прекрасный источник витамина С и микроэлементов, таких как магний, медь, калий, цинк и железо. Они защищают организм от ряда заболеваний, укрепляют иммунитет и улучшают работу сосудов и сердца.
          </p>
          <Link to="/assortiment">
            <button>Перейти в магазин</button>
          </Link>
        </motion.div>
      </motion.div>

    </section >
  );
}

export default About;