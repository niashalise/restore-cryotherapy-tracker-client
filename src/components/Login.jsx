import { useState } from "react";
import styles from "../Login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login/local`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginFormData),
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
    <>
      <h1 className={styles.header}>Login</h1>
      <form className="content" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="email" className={styles.label}>
            Email address:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={loginFormData.email}
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
            value={loginFormData.password}
            required
            className={styles.input}
            onChange={handleInputChange}
          />
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
