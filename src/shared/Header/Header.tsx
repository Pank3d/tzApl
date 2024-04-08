import { Link } from "react-router-dom";
import logo from "../images/logo.svg"
import phone from "../images/phone.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="logo_and_title">
        <img src={logo} />
        <div className="">
          <p className="title_logo">Современные методики диагностики</p>
        </div>
      </div>
      <div className="container_ul">
        <nav>
          <ul className="catalog">
            <li>
              <a href="/#laba">Лаборатория</a>
            </li>
            <li>
              <a href="/#gallery">Галерея</a>
            </li>
            <li>
              <a href="/#form">Оставить заявку</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container_phone">
        <div className="phone_img">
          <img src={phone} alt="" />
        </div>
        <div className="paragraph_container">
          <p className="phone_number">+7 123 456 7890</p>
          <p className="free_call">Звонок бесплатный</p>
        </div>
      </div>
    </header>
  );
}

export default Header