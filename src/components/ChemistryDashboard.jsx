
// All styles are now defined within the component file as a JavaScript object.
const styles = {
  // Styles for the body can't be applied directly here.
  // This should be applied to a parent container or in a global stylesheet (e.g., index.css).
  appBody: {
    backgroundColor: 'rgb(233, 236, 246)',
    fontFamily: "'Nunito', sans-serif",
  },
  dashboardContainer: {
    background: '#f0f4fa',
    borderRadius: '24px',
    width: '80%',
    height: '90vh',
    margin: '32px auto',
    padding: '24px',
    fontFamily: "'Nunito', sans-serif",
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '16px',
  },
  logoTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  chemLogo: {
    fontSize: '35px',
  },
  chemTitle: {
    fontSize: '32px',
    fontWeight: '600',
    color: '#303460',
  },
  progressSection: {
    flex: 1,
    margin: '0 32px',
  },
  progressBar: {
    width: '150px',
    height: '18px',
    background: '#dde6f7',
    borderRadius: '9px',
    overflow: 'hidden',
  },
  progressFill: {
    width: '60%', // This can be dynamic based on state
    height: '100%',
    background: 'linear-gradient(90deg, #2d387e 60%, #c4d6f6 100%)',
    borderRadius: '9px',
  },
  streak: {
    fontSize: '22px',
    color: '#2d387e',
    fontWeight: '600',
  },
  chaptersCard: {
    background: '#e8eef9',
    borderRadius: '24px',
    margin: '18px 0',
    padding: '24px 18px',
  },
  chaptersTitle: {
    fontSize: '22px',
    color: '#2d387e',
    marginBottom: '12px',
    marginTop: 0, // Reset default h2 margin
  },
  chapterList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  chapter: {
    display: 'flex',
    alignItems: 'center',
    background: '#bed8f9',
    borderRadius: '18px',
    padding: '12px 18px',
    fontSize: '20px',
    color: '#27325c',
    transition: 'background 0.2s',
  },
  chapterCompleted: {
    background: '#86d1a0',
  },
  chapterIcon: {
    fontSize: '24px',
    marginRight: '18px',
  },
  chapterLabel: {
    fontWeight: '500',
  },
  resourcesCard: {
    background: '#e8eef9',
    borderRadius: '24px',
    padding: '24px 18px',
    marginTop: '12px',
  },
  resourcesTitle: {
    fontSize: '22px',
    color: '#2d387e',
    marginBottom: '16px',
    marginTop: 0, // Reset default h2 margin
  },
  resourcesList: {
    display: 'flex',
    gap: '18px',
    justifyContent: 'flex-start',
  },
  resourceBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#f0f4fa',
    borderRadius: '16px',
    width: '110px',
    height: '110px',
    justifyContent: 'center',
    fontSize: '20px',
    color: '#2d387e',
    boxShadow: '0 2px 12px rgba(44,56,126,0.04)',
    gap: '10px',
    cursor: 'pointer',
  },
  resourceIcon: {
    fontSize: '36px',
  },
  resourceLabel: {
    fontSize: '18px',
    fontWeight: '500',
  },
};

export default function ChemistryDashboard() {
  return (
    // Note: The body style is not applied here. It should be applied to a parent div in your App.js
    // or in your global index.css file.
    <div style={styles.dashboardContainer}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.logoTitle}>
          <span style={styles.chemLogo}>🔬</span>
          <span style={styles.chemTitle}>Chemistry</span>
        </div>
        <div style={styles.progressSection}>
          <div style={styles.progressBar}>
            <div style={styles.progressFill}></div>
          </div>
        </div>
        <div style={styles.streak}>Streak: 5 days</div>
      </div>

      {/* Chapters List */}
      <div style={styles.chaptersCard}>
        <h2 style={styles.chaptersTitle}>Chapters</h2>
        <div style={styles.chapterList}>
          {/* Example of conditional styling for a completed chapter */}
          <div style={{ ...styles.chapter, ...styles.chapterCompleted }}>
            <span style={styles.chapterIcon}>✓</span>
            <span style={styles.chapterLabel}>1. Introduction</span>
          </div>
          <div style={styles.chapter}>
            <span style={styles.chapterIcon}>🔍</span>
            <span style={styles.chapterLabel}>2. Atomic Structure</span>
          </div>
          <div style={styles.chapter}>
            <span style={styles.chapterIcon}>💡</span>
            <span style={styles.chapterLabel}>3. Chemical Bonding</span>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div style={styles.resourcesCard}>
        <h2 style={styles.resourcesTitle}>Resources</h2>
        <div style={styles.resourcesList}>
          <div style={styles.resourceBtn}>
            <span style={styles.resourceIcon}>▶</span>
            <span style={styles.resourceLabel}>Videos</span>
          </div>
          <div style={styles.resourceBtn}>
            <span style={styles.resourceIcon}>📄</span>
            <span style={styles.resourceLabel}>Notes</span>
          </div>
          <div style={styles.resourceBtn}>
            <span style={styles.resourceIcon}>🤔</span>
            <span style={styles.resourceLabel}>Quizzes</span>
          </div>
          <div style={styles.resourceBtn}>
            <span style={styles.resourceIcon}>🔗</span>
            <span style={styles.resourceLabel}>Mind Maps</span>
          </div>
        </div>
      </div>
    </div>
  );
}