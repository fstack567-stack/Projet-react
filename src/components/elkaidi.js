import { Link } from "react-router-dom";
import "../styles/elkaidi.css";

export default function Younes() {
  return (
    <div className="younes-container">
      <div className="younes-background-circles">
        <div className="younes-circle younes-circle-1"></div>
        <div className="younes-circle younes-circle-2"></div>
      </div>

      <div className="younes-content">
        <div className="younes-profile-wrapper">
          <div className="younes-profile-glow"></div>
          <div className="younes-profile-img-container">
            <img 
              src="/images/elkaidi.jpg" 
              alt="Younes Elkaidi" 
              className="younes-profile-img"
            />
          </div>
        </div>

        <div className="younes-card">
          <div className="younes-header">
            <h1 className="younes-name">Younes Elkaidi</h1>
            <p className="younes-title">Développeur Web</p>
          </div>

          <div className="younes-info-list">
            <div className="younes-info-item younes-info-yellow">
              <div className="younes-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="younes-info-content">
                <p className="younes-label">Date de naissance</p>
                <p className="younes-value">13 Mai 2002</p>
              </div>
            </div>

            <div className="younes-info-item younes-info-dark">
              <div className="younes-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="younes-info-content">
                <p className="younes-label">Email</p>
                <p className="younes-value">elkaidiyounes1@gmail.com</p>
              </div>
            </div>

            <div className="younes-info-item younes-info-yellow">
              <div className="younes-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="younes-info-content">
                <p className="younes-label">Adresse</p>
                <p className="younes-value">Agadir, Maroc</p>
              </div>
            </div>
          </div>

          <Link to="/" className="younes-btn-retour">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}