import { Link } from "react-router-dom";

const users = [
  { id: "ajermoune", nom: "Ajermoune", prenom: "Asma" },
  { id: "abbou", nom: "Abbou", prenom: "Meriem" },
  { id: "Aidane", nom: "Aidane", prenom: "Soufyane" },
  { id: "rady", nom: "Rady", prenom: "Safouane" },
  { id: "Menguit", nom: "Menguit", prenom: "Soukaina" },
  { id: "ailal", nom: "Ailal", prenom: "Youness" },
  { id: "bouhssine", nom: "Bouhssine", prenom: "Hajar" },
  { id: "rady", nom: "Rady", prenom: "Safouane" },
  { id: "elaarabi", nom: "elaarabi", prenom: "rida" },
  { id: "sina", nom: "Sina", prenom: "Youssef" },
  { id: "elkaidi", nom: "Elkaidi", prenom: "Younes" },
  { id: "ahmed", nom: "Nammat", prenom: "Ahmed Amine" },
  { id: "laarif", nom: "Laarif", prenom: "Mohamed" },
];

export default function Container() {
  return (
    <div className="container-page">
      <h1 className="title">CMC AGADIR</h1>

      <p>
        <Link to="/details" className="more-details-link">
          Plus de détails &rarr;
        </Link>
      </p>

      <h4 className="subtitle">Tableau des stagiaires FullStack</h4>

      <table className="stagiaires-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Infos</th>
          </tr>
        </thead>

        <tbody>
          {users.map((elem) => (
            <tr key={elem.id}>
              <td>{elem.nom}</td>
              <td>{elem.prenom}</td>
              <td>
                <Link to={`/stagiaires/${elem.id}`} className="info-link">
                  {" "}
                  Voir{" "}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
