import s from "./Header.module.css"
import LOGO from "../../assets/gr.png"
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";



const Header = () => {

  const count = useSelector((state) => state.counter.value)
  return (
    <div className="container">
      <header className={s.header} >

        <Link to="/">
          <img src={LOGO} />
        </Link>
        <nav>
          <ul className={s.navigation}>
            <li>
              <NavLink className={s.item} to="/about">Обо мне</NavLink>
            </li>
            <li>
              <NavLink className={s.item} to="/assortiment">Ассортимент</NavLink>
            </li>
            <li>
              <NavLink className={s.item} to="/grow">Вырасти сам</NavLink>
            </li>
            <li>
              <NavLink className={s.item} to="/delivery">Доставка</NavLink>
            </li>
            <li>
              <NavLink className={s.item} to="/contacts">Контакты</NavLink>
            </li>
          </ul>
        </nav>
        <Link to="/cart">
          <div className={s.cart}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M20.8329 4.6875C20.1426 4.68716 19.4665 4.88276 18.883 5.25156C18.2996 5.62036 17.8328 6.14721 17.537 6.77083C16.112 6.78333 15.0037 6.84792 14.012 7.23542C12.8282 7.69848 11.7987 8.48544 11.0412 9.50625C10.2766 10.5333 9.91619 11.8542 9.42452 13.6687L9.3266 14.0229L8.25785 20.1979C7.87244 20.4646 7.53702 20.7812 7.24535 21.1542C5.36827 23.5562 6.26202 27.1333 8.04952 34.2812C9.18494 38.8292 9.75368 41.1021 11.4495 42.4271C13.1454 43.75 15.4891 43.75 20.1766 43.75H29.8224C34.5099 43.75 36.8537 43.75 38.5495 42.4271C40.2453 41.1021 40.812 38.8292 41.9495 34.2812C43.737 27.1312 44.6308 23.5583 42.7537 21.1542C42.4667 20.7845 42.1245 20.4613 41.7391 20.1958L40.6703 14.025L40.5745 13.6708C40.0808 11.8542 39.7204 10.5333 38.9579 9.50417C38.2001 8.48413 37.1706 7.69791 35.987 7.23542C34.9953 6.84792 33.8849 6.78333 32.462 6.77292C32.1665 6.1489 31.6999 5.62163 31.1164 5.25244C30.5329 4.88326 29.8566 4.68735 29.1662 4.6875H20.8329ZM38.3703 19.0542L37.6162 14.7042C37.0266 12.5375 36.812 11.8562 36.4495 11.3687C36.0416 10.819 35.4871 10.3952 34.8495 10.1458C34.3912 9.96667 33.837 9.91458 32.4578 9.9C32.1617 10.5222 31.6954 11.0478 31.1128 11.4158C30.5302 11.7837 29.8553 11.9791 29.1662 11.9792H20.8329C20.1438 11.9791 19.4688 11.7837 18.8862 11.4158C18.3037 11.0478 17.8373 10.5222 17.5412 9.9C16.1599 9.91458 15.6079 9.96667 15.1495 10.1458C14.5119 10.3952 13.9575 10.819 13.5495 11.3687C13.187 11.8562 12.9724 12.5354 12.3829 14.7021L11.6287 19.0542C13.7079 18.75 16.4787 18.75 20.1766 18.75H29.8224C33.5203 18.75 36.2912 18.75 38.3703 19.0542ZM16.6662 25.5208C17.0806 25.5208 17.478 25.6855 17.771 25.9785C18.0641 26.2715 18.2287 26.6689 18.2287 27.0833V35.4167C18.2287 35.8311 18.0641 36.2285 17.771 36.5215C17.478 36.8145 17.0806 36.9792 16.6662 36.9792C16.2518 36.9792 15.8544 36.8145 15.5613 36.5215C15.2683 36.2285 15.1037 35.8311 15.1037 35.4167V27.0833C15.1037 26.6689 15.2683 26.2715 15.5613 25.9785C15.8544 25.6855 16.2518 25.5208 16.6662 25.5208ZM34.8954 27.0833C34.8954 26.6689 34.7307 26.2715 34.4377 25.9785C34.1447 25.6855 33.7473 25.5208 33.3329 25.5208C32.9184 25.5208 32.521 25.6855 32.228 25.9785C31.935 26.2715 31.7704 26.6689 31.7704 27.0833V35.4167C31.7704 35.8311 31.935 36.2285 32.228 36.5215C32.521 36.8145 32.9184 36.9792 33.3329 36.9792C33.7473 36.9792 34.1447 36.8145 34.4377 36.5215C34.7307 36.2285 34.8954 35.8311 34.8954 35.4167V27.0833ZM24.9995 25.5208C25.4139 25.5208 25.8113 25.6855 26.1044 25.9785C26.3974 26.2715 26.562 26.6689 26.562 27.0833V35.4167C26.562 35.8311 26.3974 36.2285 26.1044 36.5215C25.8113 36.8145 25.4139 36.9792 24.9995 36.9792C24.5851 36.9792 24.1877 36.8145 23.8947 36.5215C23.6016 36.2285 23.437 35.8311 23.437 35.4167V27.0833C23.437 26.6689 23.6016 26.2715 23.8947 25.9785C24.1877 25.6855 24.5851 25.5208 24.9995 25.5208Z" fill="#476042" />
              <path d="M39.6477 37.1818V43H38.9432V37.9205H38.9091L37.4886 38.8636V38.1477L38.9432 37.1818H39.6477Z" fill="#476042" />
            </svg>
            <span className={s.counter}>{count}</span>
          </div>
        </Link>
      </header>
    </div>
  );
}

export default Header;