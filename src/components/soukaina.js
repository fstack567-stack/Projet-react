import { Link } from "react-router-dom";
import "../styles/asma.css";

export default function Soukaina() {
  return (
    <div className="container">
      <img
        src="/images/soukaina_mgt.jpeg"
        alt="Soukaina_Mgt"
        className="profile-img"
      />

      <div className="card">
        <p>
          <b>Nom :</b> Menguit
        </p>
        <p>
          <b>Prénom :</b> Soukaina
        </p>
        <p>
          <b>Date de naissance :</b> 10/11/1998
        </p>
        <p>
          <b>Email :</b> sk.menguit@gmail.com
        </p>
        <p>
          <b>Adresse :</b> Agadir, Maroc
        </p>

        <Link to="/" className="btn-retour">
          Retour
        </Link>
      </div>
    </div>
  );
}
