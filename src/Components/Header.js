import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";
export default function Header() {
  return (
    <div className="Header">
      <div className="Naslovna">
        <nav className="navbar">
          <img src={Logo} alt="Logo" className="logo" />
          <ul>
            <li>
              <Link to="/" className="my-link">
                O Parku
              </Link>
            </li>
            <li>
              <Link to="/login" className="my-link">
                Kupi karte
              </Link>
            </li>
            <li>
              <Link to="/galery" className="my-link">
                Galerija
              </Link>
            </li>
            <li>
              <a href="#footer">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
