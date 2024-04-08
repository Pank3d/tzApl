import first from "../images/1.svg"
import second from "../images/2.svg"
import third from "../images/3.svg"
import fourth from "../images/4.svg"
import five from "../images/5.svg";
import six from "../images/6.svg";
import seven from "../images/7.svg";



const Gallery = () => {
  return (
    <div className="GalleryWrapper">
      <h3>Галерея</h3>
      <div className="firstGallery">
        <img src={first} />
        <div className="gridImg">
          <img src={second} />
          <div className="gridImages">
            <img src={third} />
            <img src={fourth} />
          </div>
        </div>
      </div>
      <div className="secondGallery">
        <div className="gridImagesSecondGallery">
          <img src={five} />
          <img src={six} />
        </div>
        <div className="gridImgSecondGallery">
        <img src={seven} />
        </div>
      </div>
    </div>
  );
}

export default Gallery