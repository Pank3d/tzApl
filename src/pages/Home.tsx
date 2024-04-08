import CardWithCapi from "../shared/CardWithCapi/CardWithCapi";
import Gallery from "../shared/Gallery/Gallery";
import Header from "../shared/Header/Header"
import TitleUnderBanner from "../shared/TitleUnderBanner/TitleUnderBanner";
import banner from "../shared/images/capibaraImg.svg"

const Home = () => {
  return (
    <div>
      <Header />
      <img src={banner} />
      <TitleUnderBanner />
      <CardWithCapi/>
      <Gallery/>
    </div>
  );
}

export default Home