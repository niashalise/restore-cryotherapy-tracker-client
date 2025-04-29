import { useState } from "react";
import styles from '../Login.module.css'

function Login() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleOnSubmit = (e) => {
        // set user
        setUser({
            email: e.target.email.value,
            password: e.target.password.value
        })

        //Index Page renders
    }

    return (
        <>
            <h1>Login</h1>
            <form className="content">
                <div>
                    <label htmlFor="email" className={styles.label}>Email address: </label>
                    <input id="email" name="email" type="email" placeholder="frontdeskpa019@restore.com" required className={styles.input} />
                </div>
                <div>
                    <label htmlFor="password" className={styles.label}>Password: </label>
                    <input id="password" name="password" type="password" required className={styles.input}/>
                </div>
                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </>
    )
}

export default Login;