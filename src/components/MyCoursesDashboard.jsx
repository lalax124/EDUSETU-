import "./MyCoursesDashboard.css";

const courses = [
  {
    icon: "📚", // Physics book
    subject: "Physics",
    progress: 40,
    next: "Chapter 5- Motion",
    badgeIcon: "🏆",
    badgeText: "Quiz Master"
  },
  {
    icon: "🧬", // Biology DNA
    subject: "Biology",
    progress: 60,
    next: "Chapter 4- Biomolecules",
    badgeIcon: "🏅",
    badgeText: "Completed 3 chapters"
  },
  {
    icon: "🧪", // Chemistry beaker
    subject: "Chemistry",
    progress: 25,
    next: "Chapter 3- States of matter",
    badgeIcon: "🥇",
    badgeText: "Top performer"
  }
];

export default function MyCoursesDashboard() {
  return (
    <div className="courses-dashboard">
      <div className="courses-header">
        <h1 className="courses-title">My Courses</h1>
        <div className="courses-searchbar">
          <span className="search-icon">&#128269;</span>
          <input type="text" className="search-input" placeholder="Search courses" />
        </div>
      </div>
      <div className="courses-cards">
        {courses.map((c, i) => (
          <div key={i} className="courses-card">
            <div className="card-row">
              <span className="card-icon">{c.icon}</span>
              <div className="card-heading">
                {c.eq && <span className="card-eq">{c.eq}</span>}
                <span className="card-subject">{c.subject}</span>
              </div>
            </div>
            <div className="card-progressbar">
              <div className="progress-bg">
                <div className="progress-fill" style={{width: `${c.progress}%`}} />
              </div>
              <span className="progress-percent">{c.progress}%</span>
            </div>
            <div className="card-next">Next: {c.next}</div>
            <div className="card-badge">
              <span className="badge-icon">{c.badgeIcon}</span>
              <span className="badge-text">{c.badgeText}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
