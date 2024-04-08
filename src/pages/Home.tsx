import Gallery from "../shared/Gallery/Gallery";
import Header from "../shared/Header/Header"
import TitleUnderBanner from "../shared/TitleUnderBanner/TitleUnderBanner";
import Footer from "../shared/Footer/Footer";
import Library from "../shared/library/Library";
import FormUser from "../shared/Form/Form";
import { useState } from "react";
import SuccesFull from "./SuccesFull";
import Banner from "../shared/Banner/Banner";

const Home = () => {
  const [succes, setSucces] = useState(false)
  return (
    <div>
      {succes ? (
        <div className="succes">
          <SuccesFull setSucces={setSucces}/>
        </div>
      ) : (
        <>
          <Header />
          <main>
            <Banner/>
            <TitleUnderBanner />
            <Library />
            <Gallery />
            <FormUser setSucces={setSucces} />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home