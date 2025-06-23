import { useState } from "react";
import styles from "../SignUp.module.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [signupFormData, setSignupFormData] = useState({
    email: "",
    storeName: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupFormData),
      });
      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(result.data.user));
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div>
      <h1 className={styles.header}>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="storeName" className={styles.label}>
            Store Name:
          </label>
          <input
            id="storeName"
            name="storeName"
            type="text"
            placeholder="PA019"
            value={signupFormData.storeName}
            required
            className={styles.input}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email" className={styles.label}>
            Email Address:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={signupFormData.email}
            placeholder="frontdeskpa019@restore.com"
            required
            className={styles.input}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={signupFormData.password}
            required
            className={styles.input}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
