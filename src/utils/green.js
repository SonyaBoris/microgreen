import GOROH from "../assets/goroh.png"
import GOROH1 from "../assets/handGoroh.jpg"
import GOROH2 from "../assets/photo6.jpg"
import GOROH3 from "../assets/photo7.jpg"
import KAPUSTA from "../assets/gorchicha.png"
import KAPUSTA1 from "../assets/handKapusta.jpg"
import KAPUSTA2 from "../assets/kapusta.jpg"
import RUKKOLA from "../assets/redis.png"
import RUKKOLA1 from "../assets/handRukula.jpg"
import RUKKOLA2 from "../assets/rukulaa.jpg"
import RUKKOLA3 from "../assets/photo4.jpg"
import REDIS from "../assets/rukula.png"
import REDIS1 from "../assets/handRedis.jpg"
import REDIS2 from "../assets/rediss.jpg"
import REDIS3 from "../assets/spoon.jpg"
import BROKKOLI from "../assets/zelen.png"
import BROKKOLI1 from "../assets/hanndBrokkoli.jpg"
import BROKKOLI2 from "../assets/rukulaa.jpg"
import BAZIL from "../assets/basil.png"
import BAZIL1 from "../assets/handBasil.jpg"
import GORCHICHA from "../assets/basilic.png"
import GORCHICHA1 from "../assets/handGorchicha.jpg"
import KRESS from "../assets/kress.png"
import KRESS1 from "../assets/handKress.jpg"
export const green = [
  {
    "id": 0,
    "name": "Горох",
    "image": `${GOROH}`,
    "price": 150,
    "info": "Cвежего гороха",
    "vitamins": "Витамины А, С, D, группа В, биотин, кальций, фосфор, йод, железо, белок, аминокислоты",
    "benefit" : "Профилактика ожирения, анемии, авитаминоза, сахарного диабета",
    "photos" : [`${GOROH1}`,`${GOROH2}`, `${GOROH3}`]
  },
  {
    "id": 1,
    "name": "Капуста",
    "image": `${KAPUSTA}`,
    "price": 250,
    "info": "Пикантный и острый",
    "vitamins": "Витамины (К, А, С, В1, В2, В3, В4, В5, В6, В9, Е, РР), минералы (калий, кальций, фосфор, железо), антиоксиданты, хлорофилл, клетчатка",
    "benefit" : "Укрепление костей, профилактика онкологии, повышение иммунитета",
    "photos" : [`${KAPUSTA1}`,`${KAPUSTA2}`]
  },
  {
    "id": 2,
    "name": "Руккола",
    "image": `${RUKKOLA}`,
    "price": 200,
    "info": "Пряный, орехово-горчичный",
    "vitamins": "Эфирные масла, жирные омега-кислоты, витамины А, В, С, Е, К, РР, йод, железо, кальций, магний, медь, натрий, селен, цинк",
    "benefit" : "Профилактика онкозаболеваний, дисфункций щитовидной железы, повышение иммунитета, укрепление сосудов, нормализация уровня сахара и холестерина в крови",
    "photos" : [`${RUKKOLA1}`,`${RUKKOLA2}`,`${RUKKOLA3}`]
  },
  {
    "id": 3,
    "name": "Редис",
    "image": `${REDIS}`,
    "price": 250,
    "info": "Нежный, с характерной для редиса горчинкой",
    "vitamins": "Витамины В6, C, E, РР, каротин, тиамин, железо, кальций, калий, магний, марганец, сера, фтор  аминокислоты, антиоксиданты, клетчатка,",
    "benefit" : "Снижение веса, поддержание красоты и молодости, профилактика диабета, подагры, онкозаболеваний, укрепление иммунитета",
    "photos" : [`${REDIS1}`,`${REDIS2}`,`${REDIS3}`,]
  },
  {
    "id": 4,
    "name": "Брокколи",
    "image":`${BROKKOLI}`,
    "price": 200,
    "info": "Пикантный с горчинкой.",
    "vitamins": "А, С, Е, В4, В6, В9 и бета-каротин",
    "benefit" : "Улучшают здоровье кожи, зрение, репродуктивные функции, состав крови и здоровье сосудов. Профилактика рака и сахарного диабета",
    "photos" : [`${BROKKOLI1}`,`${BROKKOLI2}`]
  },
  {
    "id": 5,
    "name": "Базилик",
    "image": `${BAZIL}`,
    "price": 300,
    "info": "Нежный, с нотками восточных пряностей",
    "vitamins": "Витамины А, В, С, К, РР, йод, железо, калий, кальций, марганец, антиоксиданты, эфирные масла, энзимы",
    "benefit" : "Контроль веса, улучшение пищеварения, усиление половой функции, замедление процессов старения, укрепление нервной системы, противовирусный и противовоспалительный эффект",
    "photos" : [`${BAZIL1}`]
  },
  {
    "id": 6,
    "name": "Горчица",
    "image": `${GORCHICHA}`,
    "price": 200,
    "info": "Пряный с остринкой",
    "vitamins": "Витамины А, В1,В2, Е, PP, бета-каротин, железо, кальций, калий, магний, натрий, фосфор",
    "benefit" : "Повышение иммунитета и сопротивляемости организма инфекциям, вирусам, радиации. Помощь при простуде, гриппе, ОРВИ, мигренях. Ускорение обмена веществ, нормализация веса",
    "photos" : [`${GORCHICHA1}`]
  },
  {
    "id": 7,
    "name": "Кресс-салат",
    "image": `${KRESS}`,
    "price": 200,
    "info": "Острый",
    "vitamins": "Витамины A, группа B, C, D, E, K, PP; кальций, йод, сера, ферменты, фосфор",
    "benefit" : "Очищение организма, нормализация веса, повышение иммунитета, улучшение работы щитовидной железы, спокойный сон, противовоспалительный и косметологический эффект",
    "photos" : [ `${KRESS}`]
  }
]