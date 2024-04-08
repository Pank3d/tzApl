import logoFooter from  "../images/logoFooter.svg"
import logoFooterMobile from  "../images/logoFooterMobile.svg"
const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoFooterMobile} className="logo_footer_mobile" />
      <p className="footer_text">
        Все права защищены Российской Ассоциацией Капибар
      </p>
      <img src={logoFooter} className="logo_footer_desk" />
    </footer>
  );
}

export default Footer