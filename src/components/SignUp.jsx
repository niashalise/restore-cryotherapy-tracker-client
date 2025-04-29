import { useState } from "react";
import styles from '../SignUp.module.css'

function SignUp() {
    const [user, setUser] = useState({
        email: "",
        storeName: "",
        password: ""
    });

    const [loggedIn, setLoggedIn] = useState(false)

    const handleSubmit = (e) => {
        console.log(e.target.email.value);
        console.log(e.target.storeName.value);
        // set the User
        setUser({
            email: e.target.email.value,
            storeName: e.target.storeName.value,
            password: e.target.password.value
            // will there be a way to conditionally set isLoggedIn to true - only if signup is successful
        })

        // automatically logs them in if successful submit
        setLoggedIn(true)
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="storeName" className={styles.label}>Store Name: </label>
                    <input id="storeName" name="storeName" type="text" placeholder="PA019" required className={styles.input} />
                </div>
                <div>
                    <label htmlFor="email" className={styles.label}>Email Address: </label>
                    <input id="email" name="email" type="email" placeholder="frontdeskpa019@restore.com" required className={styles.input} />
                </div>
                <div>
                    <label htmlFor="password" className={styles.label}>Password: </label>
                    <input id="password" name="password" type="password" required className={styles.input} />
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    );
}

export default SignUp;