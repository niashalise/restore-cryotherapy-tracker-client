import { useState } from "react";

function Header() {

    return (
        <div className="header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJb26fAz9y5rbhVh_OpiLCnhjFfesHHUMGQ&s"
                alt="Restore Hyper Wellness Logo" />
            <nav>
                <button type="button">Sign Up</button>
                <button type="button">Log In</button>
            </nav>
            
        </div>
    )
}

export default Header;