import { Link } from "react-router-dom";
import "../styles/style.css";

import calendarIcon from "../assets/icons/calendar.png";
import emailIcon from "../assets/icons/email.png";
import locationIcon from "../assets/icons/location.png";
import cefIcon from "../assets/icons/cef.png"

export default function Elkaidi() {
  return (
    <div className="container-alanbar">
      <div className="profile-card-alanbar">

       
        <div className="image-wrapper-alanbar">
          <img
            src="/images/elkaidi.jpg"
            alt="Elkaidi younes"
            className="profile-alanbar"
          />
        </div>

        <div className="card-alanbar">
          <h2 className="name-alanbar">Elkaidi Younes</h2>
          <p className="subtitle-alanbar">Web Designer</p>

          <div className="info-alanbar">
            <p>
              <img src={calendarIcon} alt="Date" className="info-icon" />
              05/13/2002
            </p>

            <p>
              <img src={emailIcon} alt="Email" className="info-icon" />
              20021305367@ofppt-edu.ma
            </p>

            <p>
              <img src={locationIcon} alt="Location" className="info-icon" />
              Agadir, Morocco
            </p>
            <p>
              <img src={cefIcon} alt="cef" className="info-icon" />
              20021305367
            </p>

          </div>

          <Link to="/" className="btn-retour-md">
            Back
          </Link>
        </div>

      </div>
    </div>
  );
}
