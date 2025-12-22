import React from 'react';
import { Link } from 'react-router-dom';


const user = {
  nom: 'Moumen',
  prenom: 'Mohamed Amine',
  date_naissance: '23/01/2006',
  email: 'cmcagadir123@gmail.com',
  adresse: 'Agadir, Maroc',
  imageUrl: '/images/Moumen.jpg',
};

export default function Moumen() {
  return (
    <div className="moumen-container">
      <div className="moumen-card">
        <div className="moumen-header">
          <img
            className="moumen-avatar"
            src={user.imageUrl}
            alt={`Photo of ${user.nom} ${user.prenom}`}
          />
        </div>

        <div className="moumen-body">
          <h2 className="moumen-name">{user.nom} {user.prenom}</h2>

          <div className="moumen-info-grid">
            <div className="moumen-info-item">
              <span className="moumen-label">Date de naissance</span>
              <span className="moumen-value">{user.date_naissance}</span>
            </div>

            <div className="moumen-info-item">
              <span className="moumen-label">Email</span>
              <span className="moumen-value">{user.email}</span>
            </div>

            <div className="moumen-info-item">
              <span className="moumen-label">Adresse</span>
              <span className="moumen-value">{user.adresse}</span>
            </div>
          </div>

          <Link to="/" className="moumen-btn-retour">
            Retour
          </Link>
        </div>
      </div>
    </div>
  );
}
