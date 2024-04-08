import first from "../images/1.svg"
import second from "../images/2.svg"
import third from "../images/3.svg"
import fourth from "../images/4.svg"
import five from "../images/5.svg";
import six from "../images/6.svg";
import seven from "../images/7.svg";



const Gallery = () => {
  return (
    <div className="gallery_wrapper" id="gallery">
      <h3>Галерея</h3>
      <div className="first_gallery">
        <img src={first} className="first" />
        <div className="grid_img">
          <img src={second} className="second" />
          <div className="grid_images">
            <img src={third} />
            <img src={fourth} />
          </div>
        </div>
      </div>
      <div className="second_gallery">
        <div className="grid_images_second_gallery">
          <img src={five} />
          <img src={six} />
        </div>
        <div className="grid_img_second_gallery">
        <img src={seven} />
        </div>
      </div>
    </div>
  );
}

export default Gallery