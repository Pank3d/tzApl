import Gallery from "../shared/Gallery/Gallery";
import Header from "../shared/Header/Header"
import TitleUnderBanner from "../shared/TitleUnderBanner/TitleUnderBanner";
import banner from "../shared/images/capibaraImg.svg"
import Footer from "../shared/Footer/Footer";
import Library from "../shared/library/Library";
import FormUser from "../shared/Form/Form";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
      <img src={banner} />
      <TitleUnderBanner />
      <Library/>
      <Gallery/>
      <FormUser/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home