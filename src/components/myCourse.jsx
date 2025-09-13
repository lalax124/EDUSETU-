import React from "react";

// YOUR SUBJECT CARD DATA (with image icons)
const COURSES = [
  {
    title: "Physics",
    chaptersCompleted: 8,
    totalChapters: 10,
    icon: (
      <img
        src="phySign.png"
        alt="Physics"
        style={{
          width: 64,
          height: 48,
          objectFit: "contain",
          display: "block",
        }}
      />
    ),
    subtitle: null,
  },
  {
    title: "Chemistry",
    chaptersCompleted: 6,
    totalChapters: 10,
    icon: (
      <img
        src="Chem.png"
        alt="Chemistry"
        style={{
          width: 64,
          height: 48,
          objectFit: "contain",
          display: "block",
        }}
      />
    ),
    subtitle: null,
  },
  {
    title: "Biology",
    chaptersCompleted: 7,
    totalChapters: 10,
    icon: (
      <img
        src="bio.png"
        alt="Biology"
        style={{
          width: 54,
          height: 44,
          objectFit: "contain",
          display: "block",
        }}
      />
    ),
    subtitle: "Assigned teacher : Mr. Smith",
  },
  {
    title: "English",
    chaptersCompleted: 5,
    totalChapters: 10,
    icon: (
      <img
        src="engSign.png"
        alt="English"
        style={{
          width: 64,
          height: 48,
          objectFit: "contain",
          display: "block",
        }}
      />
    ),
    subtitle: "Assigned teacher: Mr. Smith",
  },
];

// PROGRESS BAR COMPONENT
function ProgressBar({ completed, total }) {
  const percent = (completed / total) * 100;
  return (
    <div style={{
      background: "#E7EAFA",
      borderRadius: 10,
      height: 16,
      width: "100%",
      margin: "7px 0 5px 0",
      boxSizing: "border-box",
    }}>
      <div
        style={{
          height: "100%",
          width: `${percent}%`,
          background: "#252672",
          borderRadius: 10,
          transition: "width 0.6s",
        }}
      />
    </div>
  );
}

// COURSE CARD COMPONENT (matches your screenshot)
function CourseCard({ course }) {
  return (
    <div
      style={{
        background: "#CDD7F6",
        borderRadius: 22,
        width: 520,
        height: 186,
        display: "flex",
        flexDirection: "column",
        padding: "22px 34px 12px 32px",
        boxSizing: "border-box",
        boxShadow: "0 2px 8px rgba(49, 62, 153, 0.07)",
        fontFamily: "inherit",
        position: "relative",
        justifyContent: "flex-start"
      }}
    >
      {/* Icon + Name row */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 0 }}>
        <div style={{ marginRight: 18, display: "flex", alignItems: "center" }}>
          {course.icon}
        </div>
        <div style={{ 
          fontWeight: 700,
          fontSize: 30,
          color: "#252672",
          display: "flex",
          alignItems: "center",
        }}>
          {course.title}
        </div>
      </div>
      {/* Progress + stats/teacher */}
      <div style={{ marginTop: 6 }}>
      <ProgressBar completed={course.chaptersCompleted} total={course.totalChapters} />
      <div style={{
        fontWeight: 500,
        fontSize: 16,
        color: "#252672",
        marginTop: 0,
        marginBottom: course.subtitle ? 0 : 10,
      }}>
        {course.chaptersCompleted}/{course.totalChapters} Chapter
      </div>
      {course.subtitle && (
        <div style={{
          fontSize: 14,
          color: "#565778",
        }}>
          {course.subtitle}
        </div>
      )}
      </div>
      {/* Three dots in bottom-right */}
      <span style={{
        position: "absolute",
        bottom: 15,
        right: 32,
        fontSize: 22,
        color: "#232263",
        cursor: "pointer",
        letterSpacing: 2,
      }}>⋯</span>
    </div>
  );
}

// MAIN COMPONENT
export default function MyCourse() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#F7F9FF",
      width: "100%",
      maxWidth: 1200,
      margin: "0 auto",
      fontFamily: "Inter, Arial, sans-serif",
      overflowX: "hidden",
    }}>
      {/* HEADER */}
      <div style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "58px 0 0 0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <h1 style={{
          fontSize: "3.3rem",
          fontWeight: 700,
          color: "#252672",
          margin: 0,
          paddingLeft: "58px",
        }}>
          My Courses
        </h1>
        <button style={{
          background: "#CDD7F6",
          border: "none",
          borderRadius: 32,
          padding: "23px 54px 23px 30px",
          fontSize: 30,
          fontWeight: 500,
          color: "#252672",
          display: "flex",
          alignItems: "center",
          outline: "none",
          marginRight: "48px",
          marginTop: 0,
          whiteSpace: "nowrap"
        }}>
          <span style={{
            fontSize: 40, fontWeight: 700, marginRight: 19, marginTop: -2
          }}>+</span>
          Add New Courses
        </button>
      </div>
      {/* CARD GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "40px 54px",
          maxWidth: "100%",
          margin: "54px auto 0 auto",
          justifyContent: "center",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {COURSES.map((course, idx) => (
          <CourseCard course={course} key={idx} />
        ))}
      </div>
    </div>
  );
}