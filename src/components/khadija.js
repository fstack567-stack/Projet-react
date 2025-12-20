import { Link } from "react-router-dom";

export default function Khadija() {
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to right, white, rgb(254,215,173))",
      fontFamily: "Poppins, sans-serif",
    },

    card: {
      background: "rgba(255,255,255,0.88)",
      backdropFilter: "blur(10px)",
      padding: "35px 30px",
      width: "340px",
      borderRadius: "26px",
      textAlign: "center",
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    },

    imageWrapper: {
      width: "140px",
      height: "140px",
      margin: "0 auto 15px",
      borderRadius: "50%",
      padding: "6px",
      background: "linear-gradient(135deg, #f6b26b, #f9cb9c)",
    },

    image: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
      background: "white",
    },

    name: {
      margin: "10px 0 5px",
      fontSize: "22px",
      color: "#333",
      fontWeight: "600",
    },

    subtitle: {
      fontSize: "14px",
      color: "#e67e22",
      marginBottom: "20px",
    },

    infos: {
      textAlign: "left",
      marginBottom: "25px",
    },

    infoRow: {
      margin: "10px 0",
      fontSize: "14px",
      color: "#444",
    },

    label: {
      fontWeight: "600",
      color: "#e67e22",
    },

    backBtn: {
      display: "inline-block",
      padding: "10px 25px",
      borderRadius: "30px",
      background: "linear-gradient(to right, #f6b26b, #e69138)",
      color: "white",
      textDecoration: "none",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.imageWrapper}>
          <img
            src="/images/khadija.jpeg"
            alt="Photo de Khadija"
            style={styles.image}
          />
        </div>

        <h1 style={styles.name}>Khadija Idoumghar</h1>
        <p style={styles.subtitle}>Développement Digital</p>

        <div style={styles.infos}>
          <p style={styles.infoRow}>
            <span style={styles.label}>📅 Date :</span> 2006/11/19
          </p>
          <p style={styles.infoRow}>
            <span style={styles.label}>📧 Email :</span> rrealmiagadir174@gmail.com
          </p>
          <p style={styles.infoRow}>
            <span style={styles.label}>📍 Adresse :</span> Agadir, Maroc
          </p>
          <p style={styles.infoRow}>
            <span style={styles.label}>📍 CEF :</span> 2006111900128
          </p>
        </div>

        <Link to="/" style={styles.backBtn}>
          ← Retour
        </Link>
      </div>
    </div>
  );
}
