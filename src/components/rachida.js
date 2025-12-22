import { Link } from "react-router-dom";


export default function Rachida() {
  return (
    <div className="container-rachida">
      <img
        src="/images/Rachida.jpeg"
        alt="Rachida"
        className="profile-Rachida"
      />

      <div className="card-Rachida">
        <p>
          <b>Nom :</b> Belahmam
        </p>
        <p>
          <b>Prénom :</b> Rachida
        </p>
        <p>
          <b>Date de naissance :</b> 25/07/2006
        </p>
        <p>
          <b>Email :</b> rachidabelhmam939@gmail.com
         
        </p>
        <p>
          <b>Adresse :</b> Agadir, Maroc
        </p>

        <Link to="/" className="btn-retour-a">
          Retour
        </Link>
      </div>
    </div>
  );
}
