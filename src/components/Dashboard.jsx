import React from 'react';

const user = {
  name: 'Abc',
  profileLink: '#',
  progress: [
    { subject: 'Chemistry', completed: 5, total: 10 },
    { subject: 'Physics', completed: 3, total: 8 },
  ],
  badgesEarned: 2,
};

const courses = [
  { id: 1, name: 'Chemistry', icon: '⚗️' },
  { id: 2, name: 'Physics', icon: '💡' },
  { id: 3, name: 'Biology', icon: '🦠' },
];

const filters = ['ALL', 'Courses', 'Games', 'Live', 'Classes', 'Assessment', 'Self-Study'];

function Dashboard() {
  return (
    <div style={styles.container}>
      <nav style={styles.sidebar}>
        <div style={styles.profile}>
          <div style={styles.avatarPlaceholder}></div>
          <a href={user.profileLink} style={styles.profileLink}>
            {user.name}
            <br />
            <small style={{ color: '#888' }}>View profile</small>
          </a>
        </div>
        <ul style={styles.navList}>
          <li style={{ ...styles.navItem, ...styles.navItemActive }}>
            <span role="img" aria-label="dashboard" style={styles.icon}>🏠</span> Dashboard
          </li>
          <li style={styles.navItem}><span role="img" aria-label="courses" style={styles.icon}>🎓</span> Courses</li>
          <li style={styles.navItem}><span role="img" aria-label="assessment" style={styles.icon}>📋</span> Assessment</li>
          <li style={styles.navItem}><span role="img" aria-label="chat" style={styles.icon}>💬</span> Chat</li>
          <li style={styles.navItem}><span role="img" aria-label="support" style={styles.icon}>🎧</span> Support</li>
          <li style={styles.navItem}><span role="img" aria-label="settings" style={styles.icon}>⚙️</span> Settings</li>
        </ul>
      </nav>

      <main style={styles.main}>
        <header style={styles.header}>
          <div>
            <h1 style={styles.greeting}>Good morning</h1>
            <p style={styles.subGreeting}>What do you want to learn today?</p>
          </div>
          <div>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={styles.searchInput}
            />
          </div>
        </header>

        <section style={styles.progressSection}>
          <div style={styles.progressCard}>
            <h2 style={styles.sectionTitle}>My Progress</h2>
            <ul style={styles.progressList}>
              {user.progress.map(({ subject, completed, total }) => (
                <li key={subject} style={styles.progressItem}>
                  <span style={styles.checkmark}>✓</span>
                  <span>{`${subject} - ${completed}/${total} chapters completed`}</span>
                </li>
              ))}
              <li style={{ ...styles.progressItem, ...styles.badgeItem }}>
                <span role="img" aria-label="trophy" style={styles.trophyIcon}>🏆</span>
                {`Badges Earned - ${user.badgesEarned}`}
              </li>
            </ul>
          </div>

          <aside style={styles.tipCard}>
            <h3 style={styles.tipTitle}>Daily tip</h3>
            <p style={styles.tipText}><strong>Did you know?</strong><br />The moon has no air.</p>
            <div style={styles.tipIcon}>🌙</div>
          </aside>
        </section>

        <section style={styles.filters}>
          {filters.map(filter => (
            <button key={filter} style={filter === 'ALL' ? { ...styles.filterButton, ...styles.filterActive } : styles.filterButton}>
              {filter}
            </button>
          ))}
        </section>

        <section style={styles.coursesSection}>
          <h2 style={styles.sectionTitle}>Courses</h2>
          <div style={styles.courseCards}>
            {courses.map(({ id, name, icon }) => (
              <div key={id} style={styles.courseCard}>
                <div style={styles.courseIcon}>{icon}</div>
                <div style={styles.courseName}>{name.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f5f7fa',
    height: '100vh',
    color: '#374151',
  },
  sidebar: {
    flexShrink: 0,
    width: '220px',
    backgroundColor: '#1f2937',
    color: '#e0e7ff',
    padding: '20px 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  profile: {
    marginBottom: '40px',
    textAlign: 'center',
  },
  avatarPlaceholder: {
    width: '72px',
    height: '72px',
    backgroundColor: '#9ca3af',
    borderRadius: '50%',
    margin: '0 auto 12px',
  },
  profileLink: {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '1.2',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    flexGrow: 1,
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 12px',
    marginBottom: '8px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '500',
    color: '#d1d5db',
    transition: 'background-color 0.25s ease',
  },
  navItemActive: {
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: '700',
  },
  icon: {
    marginRight: '10px',
    fontSize: '18px',
  },
  main: {
    flexGrow: 1,
    padding: '24px 40px',
    overflowY: 'auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '24px',
  },
  greeting: {
    fontSize: '28px',
    margin: 0,
    fontWeight: '700',
  },
  subGreeting: {
    fontSize: '16px',
    marginTop: '4px',
    color: '#6b7280',
  },
  searchInput: {
    padding: '10px 14px',
    fontSize: '14px',
    borderRadius: '8px',
    border: '1.5px solid #cbd5e1',
    width: '220px',
    outlineColor: '#3b82f6',
  },
  progressSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
    gap: '28px',    
  },
  progressCard: {
    flexBasis: '65%',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 15px rgb(59 130 246 / 0.15)',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#1f2937',
  },
  progressList: {
    listStyle: 'none',
    paddingLeft: '0',
  },
  progressItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '15px',
    color: '#374151',
    marginBottom: '14px',
  },
  checkmark: {
    display: 'inline-block',
    width: '22px',
    height: '22px',
    backgroundColor: '#d1fae5',
    color: '#10b981',
    borderRadius: '50%',
    fontWeight: '700',
    lineHeight: '22px',
    textAlign: 'center',
    marginRight: '12px',
  },
  badgeItem: {
    fontWeight: '600',
    color: '#374151',
  },
  trophyIcon: {
    fontSize: '20px',
    marginRight: '10px',
  },
  tipCard: {
    flexBasis: '30%',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 15px rgb(59 130 246 / 0.1)',
    color: '#374151',
    position: 'relative',
  },
  tipTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  tipText: {
    fontSize: '14px',
    color: '#4b5563',
    lineHeight: '1.4',
  },
  tipIcon: {
    position: 'absolute',
    bottom: '16px',
    right: '16px',
    fontSize: '26px',
    color: '#3b82f6',
  },
  filters: {
    marginBottom: '26px',
  },
  filterButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '15px',
    marginRight: '16px',
    color: '#374151',
    padding: '4px 8px',
    borderRadius: '6px',
    transition: 'background-color 0.3s ease',
  },
  filterActive: {
    backgroundColor: '#3b82f6',
    color: 'white',
    fontWeight: '600',
  },
  coursesSection: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 15px rgb(59 130 246 / 0.15)',
  },
  courseCards: {
    display: 'flex',
    gap: '22px',
    marginTop: '16px',
  },
  courseCard: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#e0e7ff',
    color: '#1e40af',
    boxShadow: '0 2px 8px rgb(49 46 129 / 0.25)',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  },
  courseCardHover: {
    backgroundColor: '#c7d2fe',
    boxShadow: '0 4px 12px rgb(49 46 129 / 0.35)',
  },
  courseIcon: {
    fontSize: '40px',
    marginBottom: '12px',
  },
  courseName: {
    fontWeight: '600',
    fontSize: '16px',
    letterSpacing: '1.1px',
  },
};

export default Dashboard;

