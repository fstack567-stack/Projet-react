import { Link } from "react-router-dom";
import { FiMail, FiMapPin, FiCalendar, FiArrowLeft } from "react-icons/fi"; // Feather icons
import styles from "../styles/ailal.module.css";

const DETAILS = [
  { label: "Email", value: "younessaylal21@gmail.com", icon: <FiMail /> },
  { label: "Addresse", value: "Drarga, Agadir Maroc", icon: <FiMapPin /> },
  { label: "Date de naissance", value: "03/03/2003", icon: <FiCalendar /> },
];

function Ailal() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            src="/images/ailal.jpg"
            alt="Youness Ailal"
            className={styles.avatar}
          />
          <div className={styles.imageOverlay}></div>
        </div>

        <div className={styles.content}>
          <header>
            <h1 className={styles.name}>
              Youness <span className={styles.lastName}>Ailal</span>
            </h1>
            <p className={styles.subtitle}>Full Stack Developer</p>
          </header>

          <dl className={styles.dataList}>
            {DETAILS.map((item, index) => (
              <div
                key={item.label}
                className={styles.row}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
                <div className={styles.textWrapper}>
                  <dt className={styles.label}>
                    {" "}
                    {item.icon}
                    {item.label}
                  </dt>
                  <dd className={styles.value}>{item.value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <footer className={styles.footer}>
            <Link to="/" className={styles.backButton}>
              <FiArrowLeft className={styles.arrow} /> Retour
            </Link>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default Ailal;
