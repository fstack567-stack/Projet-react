import { Link } from "react-router-dom";

export default function Ahmed() {
  return (
    <div className="container">
      <img src="/images/ahmed.jpeg" alt="Ahmed" className="profile-img" />

      <div className="card">
        <p><b>Nom :</b> Nammat</p>
        <p><b>Prénom :</b> Ahmed Amine</p>
        <p><b>Date de naissance :</b> 02/11/2005</p>
        <p><b>Email :</b> ahmedaminenammat021105@gmail.com</p>
        <p><b>Adresse :</b> Agadir, Maroc</p>

        <Link to="/" className="btn">Retour</Link>
      </div>
    </div>
  );
}