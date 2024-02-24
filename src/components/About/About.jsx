import { motion } from "framer-motion"
import { Link } from "react-router-dom";

import s from "./About.module.css"

import PHOTO1 from "../../assets/photo1.jpg"
import PHOTO5 from "../../assets/photo5.jpg"
import PHOTO3 from "../../assets/photo3.jpg"
import PHOTO6 from "../../assets/photo6.jpg"




const About = () => {


  return (
    <section>
      <div className="container">
        <div className={s.title}>
          для любителей кушать со вкусом
        </div>
        <div className={s.images}>
          <img className={s.image} src={PHOTO1} />
          <img className={s.image} src={PHOTO5} />
          <img className={s.image} src={PHOTO3} />
          <img className={s.image} src={PHOTO6} />
        </div>
        <div className={s.block}>
          <div className={s.text}>
           Привет, меня зовут Василий! Уже несколько лет я выращиваю микрозелень для домашнего употребления в пищу и ресторанов
          </div>
          <div className={s.text}>
          Микрозелень — молодые побеги растений, которые используются как в пищу, так и для украшения блюд. Её используют в салатах, супах, коктейлях, смузи, других напитках и блюдах.
          <br/> <br/>
          Это прекрасный источник витамина С и микроэлементов, таких как магний, медь, калий, цинк и железо. Они защищают организм от ряда заболеваний, укрепляют иммунитет и улучшают работу сосудов и сердца.
          </div>
        </div>



      </div>
    </section>
  );
}

export default About;