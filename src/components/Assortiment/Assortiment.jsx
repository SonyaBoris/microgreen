import { useSelector } from "react-redux";

import s from "./Assortiment.module.css"

import { Item, AssortimentActive } from "../index";

const green = [
  {
    "id": 0,
    "name": "Горох",
    "image": "./assets/goroh.png",
    "price": 150,
    "info": "Cвежего гороха",
    "vitamins": "Витамины А, С, D, группа В, биотин, кальций, фосфор, йод, железо, белок, аминокислоты",
    "benefit" : "Профилактика ожирения, анемии, авитаминоза, сахарного диабета",
    "photos" : [`./assets/handGoroh.jpg`,`./assets/photo6.jpg`, `./assets/photo7.jpg`]
  },
  {
    "id": 1,
    "name": "Капуста",
    "image": "../src/assets/gorchicha.png",
    "price": 250,
    "info": "Пикантный и острый",
    "vitamins": "Витамины (К, А, С, В1, В2, В3, В4, В5, В6, В9, Е, РР), минералы (калий, кальций, фосфор, железо), антиоксиданты, хлорофилл, клетчатка",
    "benefit" : "Укрепление костей, профилактика онкологии, повышение иммунитета",
    "photos" : [`../src/assets/handKapusta.jpg`,`../src/assets/kapusta.jpg`]
  },
  {
    "id": 2,
    "name": "Руккола",
    "image": "../src/assets/redis.png",
    "price": 200,
    "info": "Пряный, орехово-горчичный",
    "vitamins": "Эфирные масла, жирные омега-кислоты, витамины А, В, С, Е, К, РР, йод, железо, кальций, магний, медь, натрий, селен, цинк",
    "benefit" : "Профилактика онкозаболеваний, дисфункций щитовидной железы, повышение иммунитета, укрепление сосудов, нормализация уровня сахара и холестерина в крови",
    "photos" : [`../src/assets/handRukula.jpg`,`../src/assets/rukulaa.jpg`,`../src/assets/photo4.jpg`,]
  },
  {
    "id": 3,
    "name": "Редис",
    "image": "../src/assets/rukula.png",
    "price": 250,
    "info": "Нежный, с характерной для редиса горчинкой",
    "vitamins": "Витамины В6, C, E, РР, каротин, тиамин, железо, кальций, калий, магний, марганец, сера, фтор  аминокислоты, антиоксиданты, клетчатка,",
    "benefit" : "Снижение веса, поддержание красоты и молодости, профилактика диабета, подагры, онкозаболеваний, укрепление иммунитета",
    "photos" : [`../src/assets/handRedis.jpg`,`../src/assets/rediss.jpg`,`../src/assets/spoon.jpg`,]
  },
  {
    "id": 4,
    "name": "Брокколи",
    "image": "../src/assets/zelen.png",
    "price": 200,
    "info": "Пикантный с горчинкой.",
    "vitamins": "А, С, Е, В4, В6, В9 и бета-каротин",
    "benefit" : "Улучшают здоровье кожи, зрение, репродуктивные функции, состав крови и здоровье сосудов. Профилактика рака и сахарного диабета",
    "photos" : [`../src/assets/hanndBrokkoli.jpg`,`../src/assets/rukulaa.jpg`]
  },
  {
    "id": 5,
    "name": "Базилик",
    "image": "../src/assets/basil.png",
    "price": 300,
    "info": "Нежный, с нотками восточных пряностей",
    "vitamins": "Витамины А, В, С, К, РР, йод, железо, калий, кальций, марганец, антиоксиданты, эфирные масла, энзимы",
    "benefit" : "Контроль веса, улучшение пищеварения, усиление половой функции, замедление процессов старения, укрепление нервной системы, противовирусный и противовоспалительный эффект",
    "photos" : [`../src/assets/handBasil.jpg`]
  },
  {
    "id": 6,
    "name": "Горчица",
    "image": "../src/assets/basilic.png",
    "price": 200,
    "info": "Пряный с остринкой",
    "vitamins": "Витамины А, В1,В2, Е, PP, бета-каротин, железо, кальций, калий, магний, натрий, фосфор",
    "benefit" : "Повышение иммунитета и сопротивляемости организма инфекциям, вирусам, радиации. Помощь при простуде, гриппе, ОРВИ, мигренях. Ускорение обмена веществ, нормализация веса",
    "photos" : [`../src/assets/handGorchicha.jpg`]
  },
  {
    "id": 7,
    "name": "Кресс-салат",
    "image": "../src/assets/kress.png",
    "price": 200,
    "info": "Острый",
    "vitamins": "Витамины A, группа B, C, D, E, K, PP; кальций, йод, сера, ферменты, фосфор",
    "benefit" : "Очищение организма, нормализация веса, повышение иммунитета, улучшение работы щитовидной железы, спокойный сон, противовоспалительный и косметологический эффект",
    "photos" : [`../src/assets/handKress.jpg`]
  }
]

const Assortiment = () => {
  const actInd = useSelector((state) => state.counter.activeIndex)

  const selectItem = green[actInd]

  return (
    <section>
      <div className="container">
        <AssortimentActive {...selectItem}/>

        <div className={s.assortiment}>
          {green.map((obj) => (
            <Item key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Assortiment;