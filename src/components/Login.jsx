import { useState } from "react";

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
                    <label htmlFor="email">Email address: </label>
                    <input id="email" name="email" type="email" placeholder="frontdeskpa019@restore.com" required />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input id="password" name="password" type="password" required />
                </div>
                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </>
    )
}

export default Login;