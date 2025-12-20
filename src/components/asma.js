import { Link } from "react-router-dom";
import "../styles/asma.css";

export default function Asma() {
  return (
    <div className="container">
      <img src="/images/asma.jpg" alt="Asma" className="profile-asma" />

      <div className="card-asma">
        <p><b>Nom :</b> Ajermoune</p>
        <p><b>Prénom :</b> Asma</p>
        <p><b>Date de naissance :</b> 05/03/2004</p>
        <p><b>Email :</b> ajermouneasma@gmail.com</p>
        <p><b>Adresse :</b> Agadir, Maroc</p>

        <Link to="/" className="btn-retour-a">Retour</Link>
      </div>
    </div>
  );
}
