import React, { useState } from "react";
import attendanceOverview from './Images/Sign up (7).png';

function FilterDropdown({ label, value, onChange, options, type }) {
  return (
    <div style={{ textAlign: "left" }}>
      <label style={{ color: "#31286f", fontWeight: 500, fontSize: 18 }}>{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "8px 12px",
          fontSize: 17,
          marginTop: 4,
          borderRadius: 6,
          border: "1px solid #ccc",
          outline: "none",
        }}
      >
        {options.map(opt =>
          <option key={opt} value={opt}>{type === "date" ? new Date(opt).toLocaleDateString() : opt}</option>
        )}
      </select>
    </div>
  );
}

function SummaryCard({ label, value, color }) {
  const progress = label === "Total Students" ? 1 : value / 40;
  return (
    <div
      style={{
        background: color,
        color: "#fff",
        borderRadius: 24,
        minWidth: 80,
        width: "80%",
        height: 80,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flex: 1,
        boxShadow: "0 2px 8px #ececec"
      }}
    >
      <span style={{ fontSize: 34, fontWeight: 700 }}>{value}</span>
      <div style={{ width: 110, height: 8, background: "#fff2fc", borderRadius: 5, marginTop: 12 }}>
        <div style={{
          height: "100%",
          background: "#f1b5f8",
          width: `${progress * 100}%`,
          borderRadius: 5,
          transition: "width 0.3s"
        }} />
      </div>
      <span style={{
        position: "absolute",
        bottom: 8,
        left: 12,
        fontWeight: 500,
        fontSize: 14
      }}>{label}</span>
    </div>
  );
}

function AttendanceTable({ students, height }) {
  return (
    <div style={{
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "0 2px 12px #ececec",
      background: "#fff",
      width: "100%",
      height: height,
      display: "flex",
      flexDirection: "column"
    }}>
      <table style={{
        borderCollapse: "collapse",
        width: "100%",
        fontSize: 18,
        background: "#fff",
        height: "100%"
      }}>
        <thead>
          <tr style={{ background: "#eaf0fa" }}>
            <th style={cellStyle}>Roll No.</th>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Status</th>
            <th style={cellStyle}>Remark</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.roll}>
              <td style={cellStyle}>{s.roll}</td>
              <td style={cellStyle}>{s.name}</td>
              <td style={cellStyle}>
                <span style={{ color: "#31286f", fontWeight: 600 }}>{s.status === "P" ? '● P' : '○ P'}</span>
                <span style={{ marginLeft: 8, color: "#db2d7d" }}>{s.status === "A" ? '● A' : '○ A'}</span>
              </td>
              <td style={cellStyle}>{s.remark || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const cellStyle = {
  border: "1px solid #31286f",
  padding: "8px 12px",
  textAlign: "center",
  fontSize: 16
};

const Attendance = () => {
  const [selectedClass, setSelectedClass] = useState("6A");
  const [selectedDate, setSelectedDate] = useState("2025-09-10");
  const [selectedSubject, setSelectedSubject] = useState("Chemistry");
  const students = [
    { roll: "01", name: "Riya", status: "P", remark: "" },
    { roll: "02", name: "Arjun", status: "A", remark: "Sick" },
    { roll: "03", name: "Sameer", status: "P", remark: "" },
    { roll: "04", name: "Aman", status: "P", remark: "" },
    { roll: "05", name: "Manav", status: "P", remark: "" },
  ];
  const totalStudents = 40;
  const present = 32;
  const absent = 8;

  const sharedHeight = "330px";

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#eaf0fa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 0,
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      <div style={{
        width: "100vw",
        maxWidth: "100vw",
        margin: 0,
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column"
      }}>
        {/* Title */}
        <h1 style={{
          fontWeight: 700,
          color: "#31286f",
          fontSize: "2.7rem",
          marginLeft: 40,
          marginBottom: 0,
          marginTop: "38px" // WAS "10px" -- this shifts heading down!
        }}>
          Attendance
        </h1>
        {/* Filter Bar */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 18,
          margin: "10px 40px 8px 40px"
        }}>
          <FilterDropdown
            label="Select Class"
            value={selectedClass}
            onChange={setSelectedClass}
            options={["6A", "6B", "6C"]}
          />
          <FilterDropdown
            label="Select Date"
            value={selectedDate}
            onChange={setSelectedDate}
            options={["2025-09-10", "2025-09-09"]}
            type="date"
          />
          <FilterDropdown
            label="Select Subject"
            value={selectedSubject}
            onChange={setSelectedSubject}
            options={["Chemistry", "Math", "English"]}
          />
        </div>
        {/* Summary Cards */}
        <div style={{
          display: "flex",
          gap: 18,
          margin: "20px 40px 7px 40px", // WAS "25px ..." -- this shifts cards down!
          width: 'calc(100vw - 80px)',
        }}>
          <SummaryCard label="Total Students" value={totalStudents} color="#31286f" />
          <SummaryCard label="Present" value={present} color="#98b3df" />
          <SummaryCard label="Absent" value={absent} color="#7b96ae" />
        </div>
        {/* Attendance Table and Overview */}
        <div
          className="attendance-content"
          style={{
            display: "flex",
            gap: 36,
            width: "calc(100vw - 80px)",
            marginLeft: 40,
            marginBottom: 15,
            marginTop: 60,
            alignItems: "flex-start",
            minHeight: "355px",
            height: "auto",
          }}
        >
          <div style={{
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            flex: 1,
            height: sharedHeight
          }}>
            <AttendanceTable students={students} height={sharedHeight} />
            <div style={{
              display: "flex",
              alignItems: "center",
              marginTop: 20,
              width: "100%"
            }}>
              <span style={{ fontWeight: 700, fontSize: 19, color: "#31286f" }}>Student</span>
              <div style={{
                flex: 1,
                height: 3,
                marginLeft: 12,
                background: "#a3aed6",
                borderRadius: 2
              }}></div>
            </div>
          </div>
          <div style={{
            flex: 0.86,
            display: "flex",
            flexDirection: "column",
            background: "#d6e4f7",
            borderRadius: 16,
            marginBottom: 2,
            padding: 10,
            minWidth: 0,
            height: sharedHeight,
            alignSelf: "flex-start",
            boxShadow: "0 2px 12px #ececec",
            justifyContent: "space-between",
            position: "relative"
          }}>
            <h2 style={{
              fontWeight: 700,
              color: "#31286f",
              fontSize: 22,
              margin: "10px 0 0 0",
              textAlign: "center"
            }}>
              Attendance overview
            </h2>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              margin: "0px 2px 8px 2px",
            }}>
              <img
                src={attendanceOverview}
                alt="Attendance Overview"
                style={{
                  width: "83%",
                  maxWidth: 310,
                  background: "#eaf0fa",
                  borderRadius: 10,
                  objectFit: "contain"
                }}
              />
            </div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 4,
              marginLeft: 8,
              marginRight: 8,
              fontSize: 16
            }}>
              <span>Present <strong>80%</strong></span>
              <span>Absent <strong>20%</strong></span>
            </div>
            <button
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: 12,
                width: "95%",
                background: "#31286f",
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
                border: "none",
                borderRadius: 13,
                padding: "10px 0",
                cursor: "pointer",
                letterSpacing: "0.05em",
                transition: "background 0.2s"
              }}
            >
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Attendance;