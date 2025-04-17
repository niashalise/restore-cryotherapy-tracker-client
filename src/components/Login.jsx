function Login() {

        const handleOnSubmit = (e) => {
            // setUser


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