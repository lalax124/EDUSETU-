import React from "react";

const cards = [
  {
    left: "Assignment Title",
    middle: "5 September 25",
    right: "Pending",
  },
  {
    left: "Assignment Due",
    middle: "23 August 25",
    right: "Submitted",
  },
  {
    left: "Assignment status",
    middle: "16 August 25",
    right: "Checked",
  }
];

const styles = {
  page: {
    fontFamily: "sans-serif",
    background: "#e3ecf8ff",
    minHeight: "100vh",
    padding: "40px",
    overflow: "hidden",
  },
  heading: {
    fontWeight: 700,
    fontSize: "2.9rem",
    color: "#282875",
    margin: "17px 60px",
  },
  cardColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px",
    width: "100%",
    maxWidth: "1600px",
    margin: "50px auto",
  },
  card: {
    background: "#5f6a77ff",
    color: "#fff",
    borderRadius: "32px",
    width: "100%",
    maxWidth: "1300px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 200px",
    fontSize: "1.25rem",
    boxShadow: "0 2px 16px rgba(40,40,110,0.10)",
    height: "55px",
  },
  cardSection: {
    flex: 1,
    textAlign: "left"
  },
  cardMiddle: {
    flex: 1.2,
    textAlign: "center"
  },
  cardRight: {
    flex: 1,
    textAlign: "right"
  }
};

const extraStyles = {
  section: {
    marginTop: "8px",
    maxWidth: "1300px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "28px",
  },
  progressSide: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    minWidth: "400px",
    maxWidth: "650px",
    background: "none",
    height: "220px",
    padding: "10px 0 10px 0"
  },
  progressLabel: {
    fontSize: "2.3rem",
    fontWeight: 700,
    color: "#282875",
    marginBottom: "18px",
    marginLeft: "2px",
    textAlign: "left",
    letterSpacing: "1px",
  },
  progressBarBg: {
    width: "480px",
    background: "#ffffffa3",
    borderRadius: "16px",
    height: "27px", // <== thickness reduced here
    overflow: "hidden",
    marginBottom: "18px",
    marginTop: "6px",
    boxShadow: "0 1px 5px rgba(22, 22, 59, 0.04)"
  },
  progressBarFg: {
    width: "62%",
    height: "100%",
    background: "#282875",
    borderRadius: "16px",
    transition: "width 0.3s ease",
  },
  submissionBoxTitle: {
    fontSize: "3rem",
    color: "#282875",
    fontWeight: 700,
    marginTop: "18px",
    marginBottom: "2px",
    textAlign: "left",
    lineHeight: "1.1",
  },
  submissionSide: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    minWidth: "340px",
    maxWidth: "600px",
    margin: "0px",
  },
  submissionBox: {
    background: "#5f6a77ff",
    borderRadius: "23px",
    padding: "50px 49px 50px 50px",
    boxShadow: "0 2px 18px rgba(40,40,110,0.07)",
    maxWidth: "460px",
    minWidth: "330px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0px",
  },
  horizontalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
    width: "100%",
  },
  submissionTitle: {
    fontSize: "1.45rem",
    color: "#e9eaef",
    fontWeight: 700,
    textAlign: "center",
    lineHeight: "1.2",
  },
  uploadIcon: {
    width: "32px",
    height: "32px",
    color: "#e9eaef",
    verticalAlign: "middle",
    margin: "-10px 0 0 -22px",
  },
  submissionInput: {
    width: "100%",
    padding: "13px",
    borderRadius: "9px",
    border: "none",
    fontSize: "1.15rem",
    marginBottom: "22px",
    background: "#f4f6fb",
    color: "#282875",
    boxSizing: "border-box",
    fontWeight: 500,
  },
  buttonRow: {
    display: "flex",
    gap: "16px",
    marginTop: "7px",
    width: "100%",
    justifyContent: "center"
  },
  button: {
    background: "#282875",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    minWidth: "110px",
    padding: "9px 0px",
    fontSize: "1.12rem",
    fontWeight: 700,
    cursor: "pointer",
  },
  buttonCancel: {
    background: "#282875",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    minWidth: "110px",
    padding: "9px 0px",
    fontSize: "1.12rem",
    fontWeight: 700,
    cursor: "pointer",
  }
};

function DashboardExtras() {
  return (
    <div style={extraStyles.section}>
      <div style={extraStyles.progressSide}>
        <div style={extraStyles.progressLabel}>
          5/8 Submitted (62% completed)
        </div>
        <div style={extraStyles.progressBarBg}>
          <div style={extraStyles.progressBarFg} />
        </div>
        <div style={extraStyles.submissionBoxTitle}>
          Submission Box
        </div>
      </div>
      <div style={extraStyles.submissionSide}>
        <div style={extraStyles.submissionBox}>
          <div style={extraStyles.horizontalHeader}>
            <svg style={extraStyles.uploadIcon} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 16V8M12 8L8 12M12 8L16 12"
                stroke="#e9eaef"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 16V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V16"
                stroke="#e9eaef"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div style={extraStyles.submissionTitle}>Upload File</div>
          </div>
          <input
            type="text"
            style={extraStyles.submissionInput}
            placeholder="Type your response"
          />
          <div style={extraStyles.buttonRow}>
            <button style={extraStyles.button}>Submit</button>
            <button style={extraStyles.buttonCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssessmentCards() {
  return (
    <div style={styles.page}>
      <div style={styles.heading}>Assessment</div>
      <div style={styles.cardColumn}>
        {cards.map((c, i) => (
          <div style={styles.card} key={i}>
            <div style={styles.cardSection}>{c.left}</div>
            <div style={styles.cardMiddle}>{c.middle}</div>
            <div style={styles.cardRight}>{c.right}</div>
          </div>
        ))}
      </div>
      <DashboardExtras />
    </div>
  );
}

export default AssessmentCards;