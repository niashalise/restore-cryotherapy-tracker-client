import { useState } from "react";
import "../Header.css";
import SignUp from "../components/SignUp";
import Modal from "../components/Modal";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

function Header({isAuthenticated}) {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSignUpToggle = () => {
    setIsSignUpOpen((prevState) => !prevState);
  };

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginToggle = () => {
    setIsLoginOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  // call the backend for logout route
  // remove user from local storage
  const handleLogout = async () => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    try {
      const response = await fetch(`${API_BASE_URL}/auth/logout`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      
      if (response.ok) {
        localStorage.removeItem("user");
        navigate("/");
        window.location.reload();
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJb26fAz9y5rbhVh_OpiLCnhjFfesHHUMGQ&s"
        alt="Restore Hyper Wellness Logo"
      />
      <Modal isOpen={isSignUpOpen} handleToggle={handleSignUpToggle}>
        <SignUp />
      </Modal>
      <Modal isOpen={isLoginOpen} handleToggle={handleLoginToggle}>
        <Login />
      </Modal>
      <nav>
        {location.pathname !== "/" && (
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>
        )}
        {!isAuthenticated ? (
          <>
            <button type="button" onClick={handleSignUpToggle}>
              Sign Up
            </button>
            <button type="button" onClick={handleLoginToggle}>
              Log In
            </button>
          </>
        ) : (
          <button type="button" onClick={handleLogout}>Log Out</button>
        )}
        <button type="button" onClick={() => navigate("/help")}>
          Help
        </button>
      </nav>
    </div>
  );
}

export default Header;
