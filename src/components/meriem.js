import { Link } from "react-router-dom";
import "../styles/meriem.css";

export default function Meriem (){
    return(
        <div className="meriem-c">
            <img className="meriem-img" src="/images/meriem.jpeg" width={200}/>
            <div className="meriem-card">
                <p><b>Nom :</b> Abbou</p>
                <p><b>Prénom :</b> Meriem</p>
                <p><b>Date de naissance :</b> 28/08/2003</p>
                <p><b>Email :</b> meri.abb12@gmail.com</p>
                <p><b>Adresse :</b> Agadir -  Maroc</p>
                <Link to="/" className="btn-retoure">Retour</Link>
            </div>
        </div>
    );
}