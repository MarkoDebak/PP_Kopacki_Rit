import galery1 from "../Images/galery1.png";
import galery2 from "../Images/galery2.png";
import galery3 from "../Images/galery3.png";
import galery4 from "../Images/galery4.png";
import galery5 from "../Images/galery5.png";
import galery6 from "../Images/galery6.png";
import "../styles.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Galery() {
  return (
    <div className="Galery">
      <Header></Header>
      <div class="galerija">
        <div className="gallery-item">
          <img src={galery1} alt="Galery 1" />
        </div>
        <div className="gallery-item">
          <img src={galery2} alt="Galery 2" />
        </div>
        <div className="gallery-item">
          <img src={galery3} alt="Galery 3" />
        </div>
        <div className="gallery-item">
          <img src={galery4} alt="Galery 4" />
        </div>
        <div className="gallery-item">
          <img src={galery5} alt="Galery 5" />
        </div>
        <div className="gallery-item">
          <img src={galery6} alt="Galery 6" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
