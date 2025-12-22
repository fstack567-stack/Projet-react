import { Link } from "react-router-dom";
import "../styles/style.css";

import calendarIcon from "../assets/icons/calendar.png";
import emailIcon from "../assets/icons/email.png";
import locationIcon from "../assets/icons/location.png";

export default function RIDA() {
  return (
    <div className="container-alanbar">
      <div className="profile-card-alanbar">

       
        <div className="image-wrapper-alanbar">
          <img
            src="/images/rida.jpg"
            alt="Mounia Alanbar"
            className="profile-alanbar"
          />
        </div>

        <div className="card-alanbar">
          <h2 className="name-alanbar">EL AARABI RIDA</h2>
          <p className="subtitle-alanbar">Web Development Student</p>

          <div className="info-alanbar">
            <p>
              <img src={calendarIcon} alt="Date" className="info-icon" />
              9 / 02 / 2000
            </p>

            <p>
              <img src={emailIcon} alt="Email" className="info-icon" />
              2000020900415@ofppt-edu.ma
            </p>

            <p>
              <img src={locationIcon} alt="Location" className="info-icon" />
              taroudant, Morocco
            </p>
          </div>

          <Link to="/" className="btn-retour-md">
            ⬅ Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}
