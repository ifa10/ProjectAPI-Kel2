import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/loginAdmin.module.css"; // Ensure the CSS Modules path is correct

const LoginAdmin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);

        // Store token in localStorage or cookies if needed
        localStorage.setItem("token", data.token);

        // Redirect to the admin page after successful login
        await router.push("/loginAdmin/welcome");
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.loginAdminTitle}>Login Admin</h1>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.inputField} // Apply local class here
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField} // Apply local class here
        />
      </div>
      <button className={styles.button} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginAdmin;
