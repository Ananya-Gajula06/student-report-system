// SignIn.jsx
import React from "react";

function SignIn({ onSignIn, goToSignUp }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.username.value;
    onSignIn(name);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Sign In</h2>
      <input name="username" placeholder="Username" required style={inputStyle} />
      <input type="password" placeholder="Password" required style={inputStyle} />
      <button type="submit" style={buttonStyle}>Sign In</button>
      <p style={{ marginTop: "1rem" }}>
        Don't have an account? <span onClick={goToSignUp} style={linkStyle}>Sign Up</span>
      </p>
    </form>
  );
}

const formStyle = {
  background: "#fff",
  padding: "2rem",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "400px",
  margin: "auto"
};

const inputStyle = {
  padding: "0.75rem",
  border: "1px solid #ccc",
  borderRadius: "6px"
};

const buttonStyle = {
  backgroundColor: "#1D4ED8",
  color: "#fff",
  border: "none",
  padding: "0.75rem",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold"
};

const linkStyle = {
  color: "#1D4ED8",
  cursor: "pointer",
  textDecoration: "underline"
};

export default SignIn;
