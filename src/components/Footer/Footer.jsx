import { Link } from "react-router-dom";
import s from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.block}>
           <div className={s.info}>
          <li>
            <Link className={s.item} to="/contacts">Адресс магазина</Link>
          </li><li>
            <Link className={s.item} to="/assortiment">Ассортимент</Link>
          </li>
          <li>
            <Link className={s.item} to="/delivery">Главная</Link>
          </li>
        </div>
        <div className={s.social}>
          <a className={s.icon} href="https://www.instagram.com/mikrozelen.ot.vasilia">
            <svg width="42" height="42" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.4997 0.333313H59.4997C72.833 0.333313 83.6663 11.1666 83.6663 24.5V59.5C83.6663 65.9094 81.1202 72.0563 76.5881 76.5884C72.056 81.1205 65.9091 83.6666 59.4997 83.6666H24.4997C11.1663 83.6666 0.333008 72.8333 0.333008 59.5V24.5C0.333008 18.0906 2.87913 11.9437 7.41126 7.41157C11.9434 2.87944 18.0903 0.333313 24.4997 0.333313ZM23.6663 8.66665C19.6881 8.66665 15.8728 10.247 13.0597 13.06C10.2467 15.8731 8.66634 19.6884 8.66634 23.6666V60.3333C8.66634 68.625 15.3747 75.3333 23.6663 75.3333H60.333C64.3113 75.3333 68.1266 73.753 70.9396 70.9399C73.7527 68.1269 75.333 64.3116 75.333 60.3333V23.6666C75.333 15.375 68.6247 8.66665 60.333 8.66665H23.6663ZM63.8747 14.9166C65.256 14.9166 66.5808 15.4654 67.5575 16.4421C68.5343 17.4189 69.083 18.7436 69.083 20.125C69.083 21.5063 68.5343 22.8311 67.5575 23.8078C66.5808 24.7846 65.256 25.3333 63.8747 25.3333C62.4933 25.3333 61.1686 24.7846 60.1918 23.8078C59.2151 22.8311 58.6663 21.5063 58.6663 20.125C58.6663 18.7436 59.2151 17.4189 60.1918 16.4421C61.1686 15.4654 62.4933 14.9166 63.8747 14.9166ZM41.9997 21.1666C47.525 21.1666 52.8241 23.3616 56.7311 27.2686C60.6381 31.1756 62.833 36.4746 62.833 42C62.833 47.5253 60.6381 52.8244 56.7311 56.7314C52.8241 60.6384 47.525 62.8333 41.9997 62.8333C36.4743 62.8333 31.1753 60.6384 27.2683 56.7314C23.3613 52.8244 21.1663 47.5253 21.1663 42C21.1663 36.4746 23.3613 31.1756 27.2683 27.2686C31.1753 23.3616 36.4743 21.1666 41.9997 21.1666ZM41.9997 29.5C38.6845 29.5 35.505 30.8169 33.1608 33.1611C30.8166 35.5053 29.4997 38.6848 29.4997 42C29.4997 45.3152 30.8166 48.4946 33.1608 50.8388C35.505 53.183 38.6845 54.5 41.9997 54.5C45.3149 54.5 48.4943 53.183 50.8385 50.8388C53.1827 48.4946 54.4997 45.3152 54.4997 42C54.4997 38.6848 53.1827 35.5053 50.8385 33.1611C48.4943 30.8169 45.3149 29.5 41.9997 29.5Z" fill="#fff" />
            </svg>
          </a>
          <a className={s.icon} href="https://t.me/microgreens_ot_Vasya">
            <svg width="42" height="42" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.9753 0.333313C33.7344 0.333313 25.6786 2.77702 18.8265 7.35541C11.9745 11.9338 6.63395 18.4412 3.4803 26.0548C0.326647 33.6684 -0.498492 42.0462 1.10923 50.1287C2.71694 58.2113 6.68531 65.6356 12.5125 71.4628C18.3397 77.2899 25.764 81.2583 33.8465 82.866C41.9291 84.4738 50.3068 83.6486 57.9204 80.495C65.534 77.3413 72.0415 72.0008 76.6199 65.1487C81.1982 58.2967 83.6419 50.2409 83.6419 42C83.6419 36.5282 82.5642 31.1101 80.4703 26.0548C78.3763 20.9996 75.3072 16.4063 71.4381 12.5372C67.569 8.66809 62.9757 5.59895 57.9204 3.505C52.8652 1.41105 47.447 0.333313 41.9753 0.333313ZM55.2253 63.4666C55.0698 63.8559 54.8328 64.2074 54.5302 64.4975C54.2276 64.7875 53.8665 65.0095 53.471 65.1484C53.0755 65.2874 52.6549 65.3401 52.2373 65.3029C51.8198 65.2658 51.4151 65.1398 51.0503 64.9333L39.7378 56.1416L32.4794 62.8416C32.311 62.966 32.1139 63.0461 31.9064 63.0745C31.699 63.1029 31.4877 63.0787 31.2919 63.0041L32.6836 50.55L32.7253 50.5875L32.7544 50.3416C32.7544 50.3416 53.1086 31.8083 53.9378 31.0208C54.7794 30.2333 54.5003 30.0625 54.5003 30.0625C54.5503 29.1041 52.9961 30.0625 52.9961 30.0625L26.0253 47.4125L14.7961 43.5875C14.7961 43.5875 13.0711 42.9708 12.9086 41.6083C12.7378 40.2583 14.8503 39.525 14.8503 39.525L59.5045 21.7833C59.5045 21.7833 63.1753 20.15 63.1753 22.8583L55.2253 63.4666Z" fill="#fff" />
            </svg>
          </a>
          <a className={s.icon} href="tel:+79171060405">
            <svg width="32" height="50" viewBox="0 0 64 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50.75 6.25C52.4076 6.25 53.9973 6.90848 55.1694 8.08058C56.3415 9.25268 57 10.8424 57 12.5V87.5C57 89.1576 56.3415 90.7473 55.1694 91.9194C53.9973 93.0915 52.4076 93.75 50.75 93.75H13.25C11.5924 93.75 10.0027 93.0915 8.83058 91.9194C7.65848 90.7473 7 89.1576 7 87.5V12.5C7 10.8424 7.65848 9.25268 8.83058 8.08058C10.0027 6.90848 11.5924 6.25 13.25 6.25H50.75ZM13.25 0C9.93479 0 6.75537 1.31696 4.41116 3.66117C2.06696 6.00537 0.75 9.18479 0.75 12.5V87.5C0.75 90.8152 2.06696 93.9946 4.41116 96.3388C6.75537 98.683 9.93479 100 13.25 100H50.75C54.0652 100 57.2446 98.683 59.5888 96.3388C61.933 93.9946 63.25 90.8152 63.25 87.5V12.5C63.25 9.18479 61.933 6.00537 59.5888 3.66117C57.2446 1.31696 54.0652 0 50.75 0L13.25 0Z" fill="#fff" />
              <path d="M32 87.5C33.6576 87.5 35.2473 86.8415 36.4194 85.6694C37.5915 84.4973 38.25 82.9076 38.25 81.25C38.25 79.5924 37.5915 78.0027 36.4194 76.8306C35.2473 75.6585 33.6576 75 32 75C30.3424 75 28.7527 75.6585 27.5806 76.8306C26.4085 78.0027 25.75 79.5924 25.75 81.25C25.75 82.9076 26.4085 84.4973 27.5806 85.6694C28.7527 86.8415 30.3424 87.5 32 87.5Z" fill="#fff" />
            </svg>
          </a>
        </div>
        </div>
       
      </div>
    </footer>
  );
}

export default Footer;