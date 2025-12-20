import { Link } from "react-router-dom";
import "../styles/salma.css";

export default function Salma() {
  return (
    <div className="containerhj">
      <img src="/images/salma.jpg" alt="Salma" className="profile-imghj" />

      <div className="cardhj">
        <p><b>Nom :</b> Zoukrati </p>
        <p><b>Prénom :</b> Salma</p>
        <p><b>Date de naissance :</b> 29/01/2003</p>
        <p><b>Email :</b> salhsalma661@gmail.com</p>
        <p><b>Adresse :</b> Agadir, Maroc</p>

        <Link to="/" className="btn-retourhj">Retour</Link>
      </div>
    </div>
  );
}