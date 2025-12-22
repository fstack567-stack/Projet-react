import { Link } from "react-router-dom";
import "../styles/style.css";

import calendarIcon from "../assets/icons/calendar.png";
import emailIcon from "../assets/icons/email.png";
import locationIcon from "../assets/icons/location.png";
import cefIcon from "../assets/icons/cef.png";

export default function Soukaina() {
  return (
    <div className="container-alanbar">
      <div className="profile-card-alanbar">
        <div className="image-wrapper-alanbar">
          <img
            src="/images/soukaina.jpeg"
            alt="Soukaina Menguit"
            className="profile-alanbar"
          />
        </div>

        <div className="card-alanbar">
          <h2 className="name-alanbar">Soukaina Menguit</h2>
          <p className="subtitle-alanbar">Web Development Student</p>

          <div className="info-alanbar">
            <p>
              <img src={calendarIcon} alt="Date" className="info-icon" />
              10 / 11 / 1998
            </p>

            <p>
              <img src={emailIcon} alt="Email" className="info-icon" />
              1998111000565@ofppt-edu.ma
            </p>

            <p>
              <img src={locationIcon} alt="Location" className="info-icon" />
              Agadir, Morocco
            </p>
            <p>
              <img src={cefIcon} alt="cef" className="info-icon" />
              1998111000565
            </p>
          </div>

          <Link to="/" className="btn-retour-md">
            ⬅ Retour
          </Link>
        </div>
      </div>
    </div>
  );
}
