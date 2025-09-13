import React, { useState } from "react";

// All styles are now defined within the component file as a JavaScript object.
const styles = {
  // Body styles should be applied in a global stylesheet like index.css
  // as they cannot be scoped to a single component this way.
  appBody: {
    backgroundColor: 'rgb(233, 236, 246)',
    fontFamily: "'Nunito', sans-serif",
  },
  uploadDashboard: {
    background: '#f0f4fa',
    padding: '28px',
    margin: '30px auto',
    width: '80%',
    borderRadius: '24px',
    fontFamily: "'Inter', sans-serif",
  },
  uploadTitle: {
    fontSize: '2rem',
    color: '#2d387e',
    fontWeight: 700,
    marginBottom: '18px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  uploadIcon: {
    fontSize: '2.2rem',
    color: '#2d387e',
  },
  uploadOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '18px',
    marginBottom: '18px',
  },
  optionCard: {
    background: '#dcdef2',
    borderRadius: '18px',
    width: '160px',
    height: '84px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(44, 56, 126, 0.07)',
    fontSize: '1.15rem',
    cursor: 'pointer',
  },
  optionIcon: {
    fontSize: '2.2rem',
    color: '#2d387e',
  },
  optionLabel: {
    marginTop: '6px',
    color: '#2d387e',
    fontWeight: 600,
  },
  uploadDetailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '18px',
    marginBottom: '12px',
  },
  detailOption: {
    background: '#c3c6e2',
    borderRadius: '10px',
    padding: '12px 20px',
    width: '47%',
    fontSize: '1.05rem',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
    color: '#2d387e',
    boxShadow: '0 2px 8px rgba(44, 56, 126, 0.10)',
  },
  detailIcon: {
    fontSize: '1.5rem',
    marginRight: '15px',
    color: '#2d387e',
  },
  uploadFileRow: {
    background: '#e1e6f6',
    borderRadius: '12px',
    padding: '18px',
    marginBottom: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fileInput: {
    marginBottom: '10px',
    width: '70%',
  },
  fileInstruction: {
    color: '#595f8c',
    fontSize: '1.08rem',
  },
  descriptionInput: {
    width: '95%',
    background: '#e1e6f6',
    borderRadius: '12px',
    border: 'none',
    padding: '14px',
    fontSize: '1.02rem',
    marginBottom: '22px',
    color: '#2d387e',
    boxSizing: 'border-box', // Added for better sizing consistency
  },
  uploadBtn: {
    display: 'block',
    background: '#25327a',
    color: '#fff',
    border: 'none',
    borderRadius: '18px',
    padding: '20px 0',
    fontSize: '1.4rem',
    fontWeight: 700,
    cursor: 'pointer',
    width: '340px',
    margin: '0px auto',
    boxShadow: '0 2px 8px rgba(44,56,126,0.08)',
    textAlign: 'center',
    transition: 'background-color 0.3s', // Added for smooth transition
  },
  uploadBtnHover: {
    background: '#21285b',
  }
};

export default function UploadContent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.uploadDashboard}>
      <h2 style={styles.uploadTitle}>
        <span style={styles.uploadIcon}>⬆</span>
        Upload Contents
      </h2>
      <div style={styles.uploadOptions}>
        <div style={styles.optionCard}>
          <span style={styles.optionIcon}>📄</span>
          <span style={styles.optionLabel}>Pdf Notes</span>
        </div>
        <div style={styles.optionCard}>
          <span style={styles.optionIcon}>🎬</span>
          <span style={styles.optionLabel}>Video Lecture</span>
        </div>
        <div style={styles.optionCard}>
          <span style={styles.optionIcon}>✍️</span>
          <span style={styles.optionLabel}>Quiz/Test</span>
        </div>
      </div>
      <div style={styles.uploadDetailRow}>
        <div style={styles.detailOption}>
          <span style={styles.detailIcon}>📊</span> PPT / Presentation ▼
        </div>
        <div style={styles.detailOption}>
          <span style={styles.detailIcon}>🔗</span> External Links / Resources ▼
        </div>
      </div>
      <div style={styles.uploadDetailRow}>
        <div style={styles.detailOption}>
          <span style={styles.detailIcon}>🔊</span> Audio Explanation ▼
        </div>
        <div style={styles.detailOption}>
          <span style={styles.detailIcon}>▶</span> Video Explanation ▼
        </div>
      </div>
      <div style={styles.uploadFileRow}>
        <input type="file" style={styles.fileInput} />
        <div style={styles.fileInstruction}>Choose File / Drag & Drop</div>
      </div>
      <input style={styles.descriptionInput} placeholder="Add Description / Instructions" />
      <button 
        style={{...styles.uploadBtn, ...(isHovered && styles.uploadBtnHover)}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Upload Now
      </button>
    </div>
  );
}