import React from "react";

function Signup({ setPage }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully!");
        setPage("signin"); // Redirect to Sign In page
      } else {
        alert(data.error || "Signup failed");
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
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

      <form
        onSubmit={handleSubmit}
        style={{
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
        }}
      >
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          required
          style={{
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <input
          name="username"
          type="text"
          placeholder="Username"
          required
          style={{
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          style={{
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.75rem",
            backgroundColor: "#1D4ED8",
            color: "#fff",
            borderRadius: "6px",
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
