import { useState } from "react";

function SignUp() {
    const [user, setUser] = useState({
        email,
        storeName,
        isLoggedIn: false,
    });

    const handleSubmit = (e) => {
        console.log(e.target.email.value);
        console.log(e.target.storeName.value);
        // set the User
        setUser({
            email: e.target.email.value,
            storeName: e.target.storeName.value,
            isLoggedIn: true
            // will there be a way to conditionally set isLoggedIn to true - only if signup is successful
        })

        // automatically logs them in if successful submit
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="storeName">Store Name: </label>
                    <input id="storeName" name="storeName" type="text" placeholder="PA019" required />
                </div>
                <div>
                    <label htmlFor="email">Email Address: </label>
                    <input id="email" name="email" type="email" placeholder="frontdeskpa019@restore.com" required />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input id="password" name="password" type="password" required />
                </div>

            </form>
        </div>
    );
}

export default SignUp;