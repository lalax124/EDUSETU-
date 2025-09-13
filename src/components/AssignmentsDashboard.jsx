import "./AssignmentsDashboard.css";
const Subject = ["Physics", "Biology", "Chemistry", "Mathematics", "English"];
const Status = ["Active", "Completed", "Overdue"];
const assignments = [
  {
    subject: "Physics",
    title: "Law of Motion HW",
    assigned: "5 Sept",
    deadline: "10 Sept",
    submissions: "20/25 Submitted",
    status: "Active",
    action: "View/Edit/Delete",
    statusClass: "status-active"
  },
  {
    subject: "Biology",
    title: "Biomolecules HW",
    assigned: "19 Aug",
    deadline: "23 Aug",
    submissions: "15/25 submitted",
    status: "Overdue",
    action: "Send Reminder",
    statusClass: "status-overdue"
  },
  {
    subject: "Chemistry",
    title: "Atomic Structure Quiz",
    assigned: "10 Aug",
    deadline: "14 Aug",
    submissions: "10/25 Submitted",
    status: "Completed",
    action: "View Results",
    statusClass: "status-completed"
  }
];

export default function AssignmentsDashboard() {
  return (
    <div className="assignments-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Assignments</h1>
        <div className="dashboard-search">
          <input
            type="text"
            className="search-input"
            placeholder="Search Assignment"
          />
          <span className="search-icon"><i class="bi bi-search"></i></span>
          <span className="mic-icon"><i class="bi bi-mic"></i></span>
        </div>
      </div>

      {/* Cards */}
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <span className="dashboard-card-icon">&#128196;</span>
          <div className="dashboard-card-title">Total Assignments</div>
          <div className="dashboard-card-value">3</div>
        </div>
        <div className="dashboard-card">
          <span className="dashboard-card-icon">&#10003;</span>
          <div className="dashboard-card-title">Completed</div>
          <div className="dashboard-card-value">1</div>
        </div>
        <div className="dashboard-card">
          <span className="dashboard-card-icon">&#128336;</span>
          <div className="dashboard-card-title">Pending</div>
          <div className="dashboard-card-value">1</div>
        </div>
        <div className="dashboard-card">
          <span className="dashboard-card-icon">&#9888;</span>
          <div className="dashboard-card-title">Overdue</div>
          <div className="dashboard-card-value">1</div>
        </div>
        <div className="dashboard-card dashboard-card-notify">
          <span className="dashboard-card-icon">&#128276;</span>
          <div className="dashboard-card-title">Notifications</div>
          <div className="dashboard-card-details">
            <div>
              <span className="dashboard-card-detail-icon">&#128200;</span>
              Student Performance
            </div>
            <div>
              <span className="dashboard-card-detail-icon">&#128196;</span>
              Export Reports
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="dashboard-filters">
        <span>Filter By</span>
        <div className="filter-row">
          
          <select className="filter-select">
            <option value="">Subject</option>
            {Subject.map((subj, i) => (
              <option key={i} value={subj}>{subj}</option>
            ))}
          </select>
          <select className="filter-select">
            <option value="">Status</option>
            {Status.map((stat, i) => (
              <option key={i} value={stat}>{stat}</option>
            ))}
          </select>
          <input className="filter-date" placeholder="Date Range" />
        </div>
      </div>

      {/* Table */}
      <div className="dashboard-table">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Assignment Title</th>
              <th>Assigned Date</th>
              <th>Deadline</th>
              <th>Submissions</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((item, i) => (
              <tr key={i}>
                <td>{item.subject}</td>
                <td>{item.title}</td>
                <td>{item.assigned}</td>
                <td>{item.deadline}</td>
                <td>{item.submissions}</td>
                <td>
                  <span className={`status-tag ${item.statusClass}`}>
                    {item.status}
                  </span>
                </td>
                <td>{item.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
