import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!email.trim() || !password.trim()) {
      setMessage("❌ Please fill in all fields");
      return;
    }
    if (!email.includes("@")) {
      setMessage("❌ Email must contain @");
      return;
    }
    setMessage("✅ Success! Logged in.");
  };
  return (
    <div className="container">
      <h1>Login Form</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={!email ? "input error" : "input"}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={!password ? "input error" : "input"}
      />

      <button onClick={handleSubmit}>Login</button>

      {message && <p className="message">{message}</p>}
    </div>
  );
}
