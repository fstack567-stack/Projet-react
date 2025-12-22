import { Link } from "react-router-dom";
import { FiMail, FiMapPin, FiCalendar, FiArrowLeft } from "react-icons/fi"; // Feather icons


const DETAILS = [
  { label: "Email", value: "younessaylal21@gmail.com", icon: <FiMail /> },
  { label: "Addresse", value: "Drarga, Agadir Maroc", icon: <FiMapPin /> },
  { label: "Date de naissance", value: "03/03/2003", icon: <FiCalendar /> },
];

function Ailal() {
  return (
    <main>
      <div>
        <div >
          <img
            src="/images/ailal.jpg"
            alt="Youness Ailal"
            
          />
          <div ></div>
        </div>

        <div >
          <header>
            <h1 >
              Youness <span >Ailal</span>
            </h1>
            <p >Full Stack Developer</p>
          </header>

          <dl >
            {DETAILS.map((item, index) => (
              <div
                key={item.label}
                
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
                <div >
                  <dt >
                    {" "}
                    {item.icon}
                    {item.label}
                  </dt>
                  <dd >{item.value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <footer >
            <Link to="/" >
              <FiArrowLeft  /> Retour
            </Link>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default Ailal;
