import { Link } from "react-router-dom";
import "../styles/laarif.css";

export default function Laarif() {
  return (
    <div className="laarif-container">
      <div className="laarif-card">
        <div className="laarif-header">
          <div className="laarif-img-wrapper"> {/* Added wrapper for glowing border */}
            <img
              src="/images/laarif.jpg"
              alt="Mohamed Laarif"
              className="laarif-img"
            />
          </div>
          <h2 className="laarif-name">Mohamed Laarif</h2>
        </div>

        <div className="laarif-info">
          <div className="laarif-info-item">
            <span className="laarif-label">Nom</span>
            <span className="laarif-value">Laarif</span>
          </div>
          <div className="laarif-info-item">
            <span className="laarif-label">Prénom</span>
            <span className="laarif-value">Mohamed</span>
          </div>
          <div className="laarif-info-item">
            <span className="laarif-label">Date de naissance</span>
            <span className="laarif-value">20/05/2005</span>
          </div>
          <div className="laarif-info-item">
            <span className="laarif-label">Email</span>
            <span className="laarif-value">mohamedlaarif@gmail.com</span>
          </div>
          <div className="laarif-info-item">
            <span className="laarif-label">Adresse</span>
            <span className="laarif-value">Agadir, Maroc</span>
          </div>
        </div>

        <Link to="/" className="laarif-btn">
          Retour
        </Link>
      </div>
    </div>
  );
}