import capi from "../images/capibaraForCard.svg"
import preSend from "../images/preSend.svg"

const CardWithCapi = () => {
  return (
    <div className="CardWithCapi">
      <div >
        <h3 className="h3">Лаборатория</h3>
        <p className="h3Text">
          Наша лаборатория предлагает широкий спектр медицинских исследований,
          проводимых опытными капибарами-лаборантами. Мы специализируемся на
          анализе биоматериалов, микробиологических исследованиях, генетической
          диагностике и многом другом. Мы используем современное оборудование и
          методики и гарантируем точность и надежность результатов.
        </p>
        <button className="preSend">
            <img src={preSend} />
        </button>
      </div>
      <img src={capi} />
    </div>
  );
}

export default CardWithCapi
