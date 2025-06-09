import { useState } from "react";
import "../Header.css";
import SignUp from "../components/SignUp";
import Modal from "../components/Modal";
import Login from "../components/Login";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSignUpToggle = () => {
    setIsSignUpOpen((prevState) => !prevState);
  };

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoginOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname === "/")

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
        {location.pathname !== "/" && <button type="button" onClick={() => navigate("/")}>Home</button>}
        <button type="button" onClick={handleSignUpToggle}>
          Sign Up
        </button>
        {!isLoggedIn ? (
          <button type="button" onClick={handleLoginToggle}>
            Log In
          </button>
        ) : (
          <button type="button">Log Out</button>
        )}
        <button type="button" onClick={() => navigate("/help")}>
          Help
        </button>
      </nav>
    </div>
  );
}

export default Header;
