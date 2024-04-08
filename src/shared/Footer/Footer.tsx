import logoFooter from  "../images/logoFooter.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_text">
        Все права защищены Российской Ассоциацией Капибар
      </p>
      <img src={logoFooter} />
    </footer>
  );
}

export default Footer