import s from "./About.module.css"
import ABOUT1 from "../../assets/about1.png"
import ABOUT2 from "../../assets/about2.png"
import { Link } from "react-router-dom";

const About = () => {


  return (
    <section className={s.about}>
      <div className={s.block}>
        <img className={s.image} src={ABOUT1} alt="" />
        <div className={s.text}>
          <h2>Привет и добро пожаловать</h2>
          <p>
            Меня зовут Василий, уже несколько лет я выращиваю микрозелень для ресторанов и людей, которые любят вкусно покушать</p>
          <p>
            Здесь вы можете заказать зелень с доставкой на дом или на самовывоз из моего магазина в Самаре
          </p>
          <Link to="/assortiment">
          <button className={s.btn}>Сделать заказ</button>
          </Link>         
        </div>
        <img className={s.image} src={ABOUT2} alt="" />
      </div>
    </section>
  );
}

export default About;