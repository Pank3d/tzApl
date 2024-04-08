import logoFooter from  "../images/logoFooter.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footerText">
        Все права защищены Российской Ассоциацией Капибар
      </p>
      <img src={logoFooter} />
    </footer>
  );
}

export default Footer