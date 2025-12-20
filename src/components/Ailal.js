import { Link } from "react-router-dom"; // Ensure react-router-dom is installed
import styles from "../styles/ailal.module.css";

const DETAILS = [
  { label: "Email", value: "younessaylal21@gmail.com" },
  { label: "Addresse", value: "Drarga, Agadir Maroc" },
  { label: "Date de naissance", value: "03/03/2003" },
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
        </div>

        <div className={styles.content}>
          <header>
            <h1 className={styles.name}>
              Youness <span className={styles.lastName}>Ailal</span>
            </h1>
            <p className={styles.subtitle}>Profile Personel</p>
          </header>

          <dl className={styles.dataList}>
            {DETAILS.map((item, index) => (
              <div
                key={item.label}
                className={styles.row}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
                <dt className={styles.label}>{item.label}</dt>
                <dd className={styles.value}>{item.value}</dd>
              </div>
            ))}
          </dl>

          {/* New Retour Button */}
          <footer className={styles.footer}>
            <Link to="/" className={styles.backButton}>
              <span className={styles.arrow}>←</span> Retour
            </Link>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default Ailal;
