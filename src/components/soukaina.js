import { Link } from "react-router-dom";
import "../styles/soukaina.css";

export default function Soukaina() {
  return (
    <div className="container_sk">
      <img
        src="/images/soukaina.jpeg"
        alt="Soukaina_Mgt"
        className="img-soukaina"
      />

      <div className="card-soukaina">
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

        <Link to="/" className="btn-retour-sk">
          Retour
        </Link>
      </div>
    </div>
  );
}
