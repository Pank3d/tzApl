import capi from "../images/capi.png"
import preSend from "../images/preSend.svg"

const Library = () => {
  return (
    <div className="card_with_capi" id="laba">
      <div>
        <h3 className="h3">Лаборатория</h3>
        <div className="card_container">
          <img src={capi} className="capi_mobile" />
          <div className="card">
            <p className="h3_text">
              Наша лаборатория предлагает широкий спектр медицинских
              исследований, проводимых опытными капибарами-лаборантами. Мы
              специализируемся на анализе биоматериалов, микробиологических
              исследованиях, генетической диагностике и многом другом.
            </p>
            <p className="h3_text1">
              Мы используем современное оборудование и методики и гарантируем
              точность и надежность результатов.
            </p>
          </div>
          <div>
          <img src={capi} className="capi" />
          </div>
        </div>
        <a href="#form">
          <img className="pre_send" src={preSend} />
        </a>
      </div>
    </div>
  );
};

export default Library
