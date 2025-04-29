import { useState } from "react";
import "../Header.css"
import SignUp from "../components/SignUp"
import Modal from "../components/Modal"
import Login from "../components/Login"

function Header() {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const handleSignUpToggle = () => {
        setIsSignUpOpen((prevState)  => !prevState);
    }

    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleLoginToggle = () => {
        setIsLoginOpen((prevState) => !prevState);
    }

    return (
        <div className="header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJb26fAz9y5rbhVh_OpiLCnhjFfesHHUMGQ&s"
                alt="Restore Hyper Wellness Logo" />
            <Modal isOpen={isSignUpOpen} handleToggle={handleSignUpToggle}><SignUp /></Modal>
            <Modal isOpen={isLoginOpen} handleToggle={handleLoginToggle}><Login /></Modal>
            <nav>
                <button type="button" onClick={handleSignUpToggle}>Sign Up</button>
                <button type="button" onClick={handleLoginToggle}>Log In</button>
            </nav>
            
        </div>
    )
}

export default Header;