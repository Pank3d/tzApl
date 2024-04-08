import capi from "../images/capi.png"
import preSend from "../images/preSend.svg"

const Library = () => {
  return (
    <div className="card_with_capi" id="laba">
      <div>
        <h3 className="h3">Лаборатория</h3>
        <p className="h3_text">
          Наша лаборатория предлагает широкий спектр медицинских исследований,
          проводимых опытными капибарами-лаборантами. Мы специализируемся на
          анализе биоматериалов, микробиологических исследованиях, генетической
          диагностике и многом другом. Мы используем современное оборудование и
          методики и гарантируем точность и надежность результатов.
        </p>
        <a href="#form">
          <img src={preSend} />
        </a>
        
      </div>
      <img src={capi} className="capi" />
    </div>
  );
};

export default Library
