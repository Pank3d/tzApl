import succesLogo from "../shared/images/succes.svg"
const SuccesFull = ({
  setSucces,
}: {
  setSucces: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="succes">
      <button onClick={() => setSucces(false)}>X</button>
      <div className="succes_container">
        <img src={succesLogo} alt="" />
        <p>
          Спасибо за предоставленную информацию,мы свяжемся с вами в ближайшее
          время.
        </p>
      </div>
    </div>
  );
};

export default SuccesFull