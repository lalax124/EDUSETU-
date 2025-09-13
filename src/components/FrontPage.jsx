import React from "react";
import Dashboard from "./Dashboard";
import heroImage from "./Images/Sign up (1).png"; 
import heroIrregularBg from './Images/Sign up (2).png';
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const styles = {
  container: {
    background: "#D6D2EC",
    minHeight: "100vh",
    fontFamily: "'Fredoka', 'Poppins', sans-serif",
    overflow: "hidden",
    width: "100vw",
    boxSizing: "border-box",
  },
  navBarContainer: {
    position: "relative",
    width: "100%",
    minHeight: 90,
    zIndex: 1,
  },
  navBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "none",
    width: "800px",
    margin: "0 auto",
    padding: "24px 0 36px 0",
    zIndex: 10,
  },
  navMenu: {
    display: "flex",
    gap: 58,
    background: "#E5E4F6",
    padding: "8px 30px",
    borderRadius: "40px",
    alignItems: "center",
    color: "#1F1F1F",
    fontWeight: "600",
    justifyContent: "center",
    fontFamily: "'Fredoka', 'Poppins', sans-serif",
    fontSize: 15,
    boxShadow: "none",
    position: "relative",
    zIndex: 2,
    width: "70%",
  },
  dashboardItem: {
    position: "relative",
    zIndex: 20,
    background: "#E5E4F6",
    padding: "0 6px",
    borderRadius: "20px",
  },
  overlapImage: {
    position: "absolute",
    top: "-30px",
    right: "54px",
    width: "670px",
    zIndex: 0,
    pointerEvents: "none",
  },
  navButton: {
    position: "absolute",
    top: 24,
    right: 50,
    background: "#FFF3D4",
    borderRadius: "12px",
    boxShadow: "2px 2px 0 #222",
    border: "1px solid #b8a9d9",
    padding: "10px 28px",
    fontSize: 18,
    cursor: "pointer",
    fontFamily: "'Fredoka', 'Poppins', sans-serif",
    fontWeight: "600",
    zIndex: 20,
  },
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 64px 0 64px",
  },
  heroText: {
    flex: 1,
  },
  heroTitle: {
    fontFamily: "'Fredoka', 'Poppins', sans-serif",
    fontSize: "3rem",
    fontWeight: 700,
    lineHeight: 1.15,
    marginBottom: 10,
    color: "#1F1F1F",
  },
  academic: {
    color: "#A259F7",
  },
  startButton: {
    fontFamily: "'Press Start 2P', 'Fredoka', 'Poppins', monospace",
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#fff",
    padding: "8px 38px",
    border: "3px solid #727272",
    background: "#5A3895",
    borderRadius: "12px",
    boxShadow: "2px 4px 0 #7C3AED",
    textShadow: "2px 4px 0 #3a1c6eff",
    letterSpacing: "2px",
    outline: "1px solid #222",
    marginRight: 15,
    marginTop: 30,
    transition: "none",
    cursor: "pointer",
  },
  cardsRow: {
    display: "flex",
    gap: 30,
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 32,
    position: "relative",
    zIndex: 2,
  },
  card: {
    background: "#C7C1E9",
    borderRadius: "22px",
    border: "3px solid #7551B5",
    padding: "32px 28px",
    width: 298,
    minHeight: 170,
    position: "relative",
    boxShadow: "5px 5px 0 #533D9A",
    fontWeight: "700",
    color: "#231f20",         // corrected font color for all cards
    zIndex: 2,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 800,
    margin: "24px 0 16px 0",
    color: "#44219bff",
  },
  cardSubtitle: {
    color: "#8a44f3ff",
    fontWeight: 500,
    fontSize: 16,
    marginTop: 10,
  },
  trophy: {
    position: "absolute",
    left: -30,
    top: -36,
    fontSize: 59,
  },
  cardIcon: {
    fontSize: 36,
    marginBottom: 14,
  },
  signInButton: {
    fontFamily: "'Press Start 2P', 'Fredoka', 'Poppins', monospace",
    fontSize: "1.3rem",
    background: "#FFE7A8",
    color: "#fff",
    border: "3px solid #ffd085",
    marginTop: 15,
    borderRadius: "10px",
    padding: "12px 38px",
    fontWeight: "bold",
    textShadow: "2px 3px 0 #F4c542",
    letterSpacing: "1.5px",
    outline: "1px solid #b98e39",
    transition: "none",
    cursor: "pointer",
  },
};

export default function HomePage() {
  return (
    <div style={styles.container}>
      {/* Navbar container with overlapping illustration */}
      <div style={styles.navBarContainer}>
        <div style={styles.overlapImage}>
          <img
            src={heroIrregularBg}
            alt="Group illustration"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              imageRendering: "pixelated",
            }}
          />
        </div>

        <div style={styles.navBar}>
          <div style={styles.navMenu}>
            <div style={styles.dashboardItem}>Dashboard</div>
            <div>Teacher</div>
            <div>Assessment</div>
            <div>Library</div>
          </div>
          <button style={styles.navButton}>Login or Sign Up</button>
        </div>
      </div>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroText}>
          <div style={styles.heroTitle}>
            Your Journey <br />
            To <span style={styles.academic}>Academic</span> Excellence <br />
            <button style={styles.startButton}>START</button> Here
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div style={styles.cardsRow}>
        <div style={styles.card}>
          <span style={styles.trophy}>🏆</span>
          <div style={styles.cardTitle}>interactive learning games</div>
          <button style={styles.signInButton}>SIGN IN</button>
        </div>
        <div style={{ ...styles.card, background: "#E9D8FE" }}>
          <span style={styles.cardIcon}>📊</span>
          <div style={styles.cardTitle}>personalized dashboards</div>
          <div style={styles.cardSubtitle}>self assessment assignments</div>
        </div>
        <div style={{ ...styles.card, background: "#FFF7D4" }}>
          <span style={styles.cardIcon}>💾</span>
          <div style={styles.cardTitle}>offline accessible content</div>
        </div>
      </div>
    </div>
  );
}
