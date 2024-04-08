import banner from "../../shared/images/capibaraImg.svg"
import mobileLogo from "../images/mobileLogo.svg"
const Banner = () => {
  return (
    <><img src={banner} className="banner"/>
        <img src={mobileLogo} className="banner_mobile"/>
        
    </>
  );
}

export default Banner