import React, { useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  const [stage, setStage] = useState("welcome");
  const [username, setUsername] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.username.value;
    setUsername(name);
    setStage("dashboard");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.username.value;
    // Simulating account creation success (you can replace this with actual API call)
    alert("Account created successfully! Please sign in.");
    setUsername(name);
    setStage("signin"); // Redirect to Sign In after successful signup
  };

  return (
    <div className="App">
      {stage === "dashboard" ? (
        <Dashboard username={username} />
      ) : (
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: "#1D4ED8",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            color: "#ffffff",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              color: "#1D4ED8",
              backgroundColor: "#ffffff",
              padding: "0.5rem 1.25rem",
              borderRadius: "0.5rem",
            }}
          >
            Student Report System
          </h1>

          {stage === "welcome" && (
            <div style={{ display: "flex", gap: "1rem" }}>
              <button onClick={() => setStage("signin")} style={buttonStyle}>
                Sign In
              </button>
              <button onClick={() => setStage("signup")} style={buttonStyle}>
                Sign Up
              </button>
            </div>
          )}

          {stage === "signin" && (
            <form onSubmit={handleLoginSubmit} style={formStyle}>
              <h2 style={formTitle}>Sign In</h2>
              <input
                name="username"
                type="text"
                placeholder="Username"
                required
                style={inputStyle}
              />
              <input
                type="password"
                placeholder="Password"
                required
                style={inputStyle}
              />
              <span style={forgotStyle}>Forgot Password?</span>
              <button type="submit" style={submitStyle}>
                Submit
              </button>
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <span>Don't have an account? </span>
                <button
                  type="button"
                  style={linkButtonStyle}
                  onClick={() => setStage("signup")}
                >
                  Create New Account
                </button>
              </div>
            </form>
          )}

          {stage === "signup" && (
            <form onSubmit={handleSignupSubmit} style={formStyle}>
              <h2 style={formTitle}>Sign Up</h2>
              <input
                name="username"
                type="text"
                placeholder="Username"
                required
                style={inputStyle}
              />
              <input
                type="password"
                placeholder="Password"
                required
                style={inputStyle}
              />
              <button type="submit" style={submitStyle}>
                Create Account
              </button>
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <span>Already have an account? </span>
                <button
                  type="button"
                  style={linkButtonStyle}
                  onClick={() => setStage("signin")}
                >
                  Sign In
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  padding: "0.75rem 1.5rem",
  backgroundColor: "#ffffff",
  color: "#1D4ED8",
  borderRadius: "8px",
  fontSize: "1rem",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

const formStyle = {
  marginTop: "2rem",
  padding: "1.5rem",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  width: "100%",
  maxWidth: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  color: "#000000",
};

const inputStyle = {
  padding: "0.75rem",
  border: "1px solid #ccc",
  borderRadius: "6px",
};

const forgotStyle = {
  color: "#1D4ED8",
  fontSize: "0.875rem",
  textAlign: "right",
  cursor: "pointer",
  textDecoration: "underline",
};

const submitStyle = {
  padding: "0.75rem",
  backgroundColor: "#1D4ED8",
  color: "#fff",
  borderRadius: "6px",
  fontSize: "1rem",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

const linkButtonStyle = {
  background: "none",
  border: "none",
  color: "#1D4ED8",
  cursor: "pointer",
  textDecoration: "underline",
  fontSize: "1rem",
  fontWeight: "bold",
};

const formTitle = {
  textAlign: "center",
  color: "#1D4ED8",
  marginBottom: "1rem",
};

export default App;