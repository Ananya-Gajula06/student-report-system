import React, { useState } from "react";

function Dashboard({ username }) {
  const [activeSection, setActiveSection] = useState("home");

  const handleLogout = () => {
    window.location.reload(); 
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#1D4ED8", color: "#ffffff" }}>
      <div
        style={{
          width: "220px",
          backgroundColor: "#ffffff",
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          position: "relative",
          boxShadow: "2px 0 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "#1D4ED8", fontWeight: "bold", fontSize: "1.5rem" }}>Gradify</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <button onClick={() => setActiveSection("attendance")} style={navLinkStyle}> Attendance</button>
          <button onClick={() => setActiveSection("reports")} style={navLinkStyle}> Reports</button>
          <button onClick={() => setActiveSection("grades")} style={navLinkStyle}> Grades</button>
        </nav>
        <button
          onClick={handleLogout}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            backgroundColor: "#1D4ED8",
            color: "#ffffff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      
      <div style={{ flex: 1, padding: "2rem" }}>
        {activeSection === "home" && (
          <>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#ffffff" }}>
              Welcome, {username}!
            </h1>

            <input
              type="text"
              placeholder="Search Reports, Attendance, or Grades"
              style={{
                marginTop: "1rem",
                width: "100%",
                maxWidth: "600px",
                padding: "0.75rem 1rem",
                borderRadius: "10px",
                border: "none",
                outline: "none",
                fontSize: "1rem",
              }}
            />

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
              {["Chemistry", "Maths", "Physics", "Linear Algebra"].map((subject, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: "#e0e7ff",
                    color: "#1D4ED8",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  {subject}
                </span>
              ))}
            </div>

            <h2 style={{ marginTop: "2rem", fontSize: "1.25rem" }}>Recommended</h2>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
              {[
                { name: "Elsa", subject: "Particle Physics", likes: 1232 },
                { name: "Flynn", subject: "Calculus", likes: 759 },
              ].map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: "1 1 150px",
                    backgroundColor: "#ffffff",
                    padding: "1rem",
                    borderRadius: "1rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    textAlign: "center",
                    color: "#1D4ED8",
                  }}
                >
                  <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{card.name}</p>
                  <p style={{ fontSize: "0.9rem" }}>{card.subject}</p>
                  <p style={{ fontSize: "0.8rem", color: "#3b82f6", marginTop: "0.5rem" }}>
                     {card.likes}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeSection === "attendance" && (
          <>
            <BackButton setActiveSection={setActiveSection} />
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#ffffff" }}> Attendance</h1>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Subject</th>
                  <th style={tableHeaderStyle}>Total Classes</th>
                  <th style={tableHeaderStyle}>Attended</th>
                  <th style={tableHeaderStyle}>Percentage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { subject: "Maths", total: 40, attended: 36 },
                  { subject: "Physics", total: 42, attended: 39 },
                  { subject: "Chemistry", total: 38, attended: 35 },
                ].map((item, idx) => (
                  <tr key={idx}>
                    <td style={tableCellStyle}>{item.subject}</td>
                    <td style={tableCellStyle}>{item.total}</td>
                    <td style={tableCellStyle}>{item.attended}</td>
                    <td style={tableCellStyle}>
                      {Math.round((item.attended / item.total) * 100)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {activeSection === "reports" && (
          <>
            <BackButton setActiveSection={setActiveSection} />
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#ffffff" }}> Reports</h1>
            <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
              Download or view performance reports, test results, and feedback.
            </p>
            <ul style={{ marginTop: "1.5rem" }}>
              <li>Mid-Term Report – <a href="#" style={{ color: "#fff", textDecoration: "underline" }}>Download PDF</a></li>
              <li>Lab Performance Report – <a href="#" style={{ color: "#fff", textDecoration: "underline" }}>Download PDF</a></li>
              <li>Instructor Feedback – <a href="#" style={{ color: "#fff", textDecoration: "underline" }}>View</a></li>
            </ul>
          </>
        )}

        {activeSection === "grades" && (
          <>
            <BackButton setActiveSection={setActiveSection} />
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#ffffff" }}> Grades</h1>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Subject</th>
                  <th style={tableHeaderStyle}>Grade</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { subject: "Maths", grade: "A+" },
                  { subject: "Physics", grade: "A" },
                  { subject: "Chemistry", grade: "B+" },
                ].map((item, idx) => (
                  <tr key={idx}>
                    <td style={tableCellStyle}>{item.subject}</td>
                    <td style={tableCellStyle}>{item.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

function BackButton({ setActiveSection }) {
  return (
    <button
      onClick={() => setActiveSection("home")}
      style={{
        marginBottom: "1rem",
        padding: "0.5rem 1rem",
        backgroundColor: "#ffffff",
        color: "#1D4ED8",
        borderRadius: "8px",
        border: "none",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
       Back to Dashboard
    </button>
  );
}

const navLinkStyle = {
  backgroundColor: "#e0e7ff",
  color: "#1D4ED8",
  textDecoration: "none",
  fontSize: "1rem",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  fontWeight: "500",
  border: "none",
  textAlign: "left",
  cursor: "pointer",
};

const tableStyle = {
  width: "100%",
  marginTop: "2rem",
  backgroundColor: "#ffffff",
  color: "#000",
  borderRadius: "10px",
  padding: "1rem",
};

const tableHeaderStyle = {
  padding: "0.75rem",
  textAlign: "left",
  backgroundColor: "#e0e7ff",
};

const tableCellStyle = {
  padding: "0.75rem",
  borderBottom: "1px solid #ccc",
};

export default Dashboard;