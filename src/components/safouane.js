import { Link } from "react-router-dom";
import "../styles/safouane.css";

export default function Safouane() {
  return (
    <div className="page">
      <div className="card">
        <img src="/images/safouane.jpg" alt="Profile" className="profile-img" />

        <h1>Safouane Rady</h1>
        <h2>Full Stack Web Developer</h2>

        <div className="info">
          <p>
            <span>Email</span> safouanekira2001@example.com
          </p>
          <p>
            <span>Birthday</span> 14/05/2001
          </p>
          <p>
            <span>CEF</span> 2001051400454
          </p>
          <Link to="/" className="btn-retour">Retour</Link>
        </div>
      </div>
    </div>
  );
}
