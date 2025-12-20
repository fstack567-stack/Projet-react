import { Link } from "react-router-dom";


export default function Details() {
  return (
    <div className="details-container">
      <img src="logoCmc.png" alt="CMC Logo" className="details-logo" />

      <div className="details-card">
        <p><b>Nom :</b> Cité des Métiers et des Compétences</p>

        <p>
          <b>Description :</b> Établissement nouvelle génération, la Cité des
          Métiers et des Compétences de Souss-Massa vise à dispenser une
          formation innovante, tournée vers les nouveaux métiers, grâce à un
          modèle pédagogique libérateur d’énergies.
        </p>

        <p><b>Pôles métiers :</b> 11</p>
        <p><b>Filières :</b> 81</p>
        <p><b>Places pédagogiques :</b> 3420</p>
        <p><b>Plateformes d'application :</b> 6</p>
        <p><b>Lits et couverts :</b> 400</p>

        <Link to="/" className="btn-retour">Retour</Link>
      </div>
    </div>
  );
}
