import { Link } from "react-router-dom";
import "../styles/style.css";

import calendarIcon from "../assets/icons/calendar.png";
import emailIcon from "../assets/icons/email.png";
import locationIcon from "../assets/icons/location.png";
import cefIcon from "../assets/icons/cef.png"

export default function Ailal() {
  return (
    <div className="container-alanbar">
      <div className="profile-card-alanbar">

       
        <div className="image-wrapper-alanbar">
          <img
            src="/images/ailal.jpg"
            alt="Mounia Alanbar"
            className="profile-alanbar"
          />
        </div>

        <div className="card-alanbar">
          <h2 className="name-alanbar">Youness Ailal</h2>
          <p className="subtitle-alanbar">Full Stack Developer</p>

          <div className="info-alanbar">
            <p>
              <img src={calendarIcon} alt="Date" className="info-icon" />
              03 / 03 / 2003
            </p>

            <p>
              <img src={emailIcon} alt="Email" className="info-icon" />
              younessaylal21@gmail.com
            </p>

            <p>
              <img src={locationIcon} alt="Location" className="info-icon" />
              Drarga Agadir, Morocco
            </p>
            <p>
              <img src={cefIcon} alt="cef" className="info-icon" />
              2003031300438
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
