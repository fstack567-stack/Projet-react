import { Link } from "react-router-dom";
import "../styles/aidane.css";

export default function Soufyane() {
  return (
    <div className="container">
      <img src="/images/aidane.jpeg" alt="Aidane" className="profile-img" />

      <div className="card">
        <p><b>Nom :</b> Aidane </p>
        <p><b>Prénom :</b> Soufyane</p>
        <p><b>Date de naissance :</b> 15/08/2004</p>
        <p><b>Email :</b> sefyan.aidan.m@gmail.com</p>
        <p><b>Adresse :</b> Agadir, Maroc</p>

        <Link to="/" className="btn-retour">Retour</Link>
      </div>
    </div>
  );
}
