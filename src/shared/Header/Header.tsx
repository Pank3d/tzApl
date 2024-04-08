import logo from "../images/logo.svg"
import phone from "../images/phone.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="logoAndTitle">
        <img src={logo} />
        <div className="">
          <p className="titleLogo">Современные методики диагностики</p>
        </div>
      </div>
      <div className="containerUl">
        <ul className="catalog">
          <li>Лаборатория</li>
          <li>Галерея</li>
          <li>Оставить заявку</li>
        </ul>
      </div>
      <div className="containerPhone">
        <div className="phoneImg">
          <img src={phone} alt="" />
        </div>
        <div className="paragraphContainer">
          <p className="phoneNumber">+7 123 456 7890</p>
          <p className="freeCall">Звонок бесплатный</p>
        </div>
      </div>
    </header>
  );
}

export default Header