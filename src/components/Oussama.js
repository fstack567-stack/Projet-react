import { Link } from "react-router-dom";


function Oussama() {
  return (
    <div className="body1">
      <div className="card">
        <div className="avatar">
          <img src="/images/Oussama.jpg" alt="k.O" />
        </div>
        <div className="info">
          <div className="info-row">
            <div className="label">Nom</div>
            <div className="value">Kazzi</div>
          </div>
          <div className="info-row">
            <div className="label">Prénom</div>
            <div className="value">Oussama</div>
          </div>
          <div className="info-row">
            <div className="label">Email</div>
            <div className="value">oussamakazzi4@gmail.com</div>
          </div>
          <div className="info-row">
            <div className="label">CEF</div>
            <div className="value">2002040400396</div>
          </div>
          <Link to="/" className="btn">
            Retour
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Oussama;
