import { Link } from "react-router-dom";

export default function Hajar() {
  return (
    <div className="containerhj">
      <img src="/images/hajar.jpg" alt="Hajar" className="profile-imghj" />

      <div className="cardhj">
        <p><b>Nom :</b> Bouhssine </p>
        <p><b>Prénom :</b> Hajar</p>
        <p><b>Date de naissance :</b> 07/09/2001</p>
        <p><b>Email :</b> hajarlesensei@gmail.com</p>
        <p><b>Adresse :</b> Agadir, Maroc</p>

        <Link to="/" className="btn-retourhj">Retour</Link>
      </div>
    </div>
  );
}
