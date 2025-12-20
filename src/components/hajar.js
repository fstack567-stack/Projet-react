import { Link } from "react-router-dom";
import "../styles/hajar.css";

export default function Hajar() {
  return (
    <div className="container">
      <img src="/images/hajar.jpg" alt="Hajar" className="profile-img" />

      <div className="card">
        <p><b>Nom :</b> Bouhssine </p>
        <p><b>Prénom :</b> Hajar</p>
        <p><b>Date de naissance :</b> 07/09/2001</p>
        <p><b>Email :</b> hajarlesensei@gmail.com</p>
        <p><b>Adresse :</b> Agadir, Maroc</p>

        <Link to="/" className="btn-retour">Retour</Link>
      </div>
    </div>
  );
}
