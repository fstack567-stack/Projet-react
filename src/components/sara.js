import { Link } from "react-router-dom";

 export default function SaraE() {
  return (
   <div className="profile-card">

   <img className="profile-img" src="/images/sara.jpg" />
  <div className="profile-details">
    <h2 className="name">Sara</h2> 
    <h3 className="lastname">El Orf</h3>
    <p className="dob" style={{ color: 'pink' }}> <span>🎂</span> 8/05/2006</p> <br></br>
    <p className="email"><span>📧</span> elorfsara27@gmail.com</p> 
     
     <Link to="/" className="btn-retour">Retour</Link>
  </div>
</div>

  );
}