import { Link } from "react-router-dom"

const users = [
    {id :1, nom : "Ajermoune" , prenom : "Asma"},
]
export default function Container(){
    return(
        <div>
            <h1>CMC AGADIR</h1>
            <p><Link to="/details">Plus de details</Link></p>
            <h4>Tableau des stagiares FullStack</h4>
            <table border={1}>
                <thead>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>infos</th>
                </thead>
                <tbody>
                    {users.map(elem=>(
                        <tr>
                            <td>{elem.nom}</td>
                            <td>{elem.prenom}</td>
                            <td><Link to={`stagiares/${elem.id}`}>Link</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}