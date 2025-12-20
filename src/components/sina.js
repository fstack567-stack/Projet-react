import { Link } from "react-router-dom";
import "../styles/sina.css";

export default function Sina() {
  return (
    <div className="sina-container">
      <div className="sina-card">
        <div className="sina-header">
          <img
            src="/images/sina.jpeg"
            alt="Sina Youssef"
            className="sina-img"
          />
          <h2 className="sina-name">Youssef Sina</h2>
        </div>

        <div className="sina-info">
          <div className="sina-info-item">
            <span className="sina-label">Nom</span>
            <span className="sina-value">Sina</span>
          </div>
          <div className="sina-info-item">
            <span className="sina-label">Prénom</span>
            <span className="sina-value">Youssef</span>
          </div>
          <div className="sina-info-item">
            <span className="sina-label">Date de naissance</span>
            <span className="sina-value">18/12/2005</span>
          </div>
          <div className="sina-info-item">
            <span className="sina-label">Email</span>
            <span className="sina-value">youssefsina9@gmail.com</span>
          </div>
          <div className="sina-info-item">
            <span className="sina-label">Adresse</span>
            <span className="sina-value">Agadir, Maroc</span>
          </div>
        </div>

        <Link to="/" className="sina-btn">
          Retour
        </Link>
      </div>
    </div>
  );
}
