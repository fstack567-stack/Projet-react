import { Link } from "react-router-dom";

export default function Details(){
    return(

        <div style={{display:"flex" , gap:"50px", justifyContent:"center", alignItems:"center"}}>
            <img src="logoCmc.png" height={150}/>
            <div>
                <p><b>Nom :</b> Cité des Métiers et des Compétences</p>
                <p><b>Description : </b>Etablissement nouvelle génération, la Cité des Métiers et des Compétences de Souss-Massa vise à dispenser une formation innovante, 
                tournée vers les nouveaux métiers, grâce à un modèle pédagogique libérateur d’énergies.</p>
                <p><b>Poles métiers :</b> 11</p>
                <p><b>Filières :</b> 81</p>
                <p><b>Places pédagogique :</b> 3420</p>
                <p><b>Platformes d'application :</b> 6</p>
                <p><b>Lits et couverts :</b>400</p>
                <p><Link to='/'>retour</Link></p>
            </div>
        </div>
    )
}