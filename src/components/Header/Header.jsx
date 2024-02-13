import s from "./Header.module.css"
import LOGO from "../../../public/green.svg"

const Header = () => {
  return ( 
    <div className={s.header}>
     <img src={LOGO} />
     <nav>
      <ul>
        <li>О нас</li>
        <li>Ассортимент</li>
        <li>Обучение</li>
        <li>Доставка</li>
      </ul>
     </nav>

    </div>
   );
}
 
export default Header;