import "../Styles/Components/Signup.css"

function Login() {
    return(
        <div className="Signup">
            <form className="Signup-form">
                <h1 className="Signup-form-bmh">Book My Hostel</h1>
                <h1 className="Signup-form-heading">Login</h1>
                <label className="Signup-form-label">Email Address</label>
                <input placeholder="Enter Email Address" className="Signup-form-input"></input>
                <label className="Signup-form-label">Password</label>
                <input type="password" placeholder="Enter Password" className="Signup-form-input"></input>
                <button className="Signup-form-submit">Submit</button>
                <p>Do not have an account? <a href="/signup">Signup</a></p>
            </form>
        </div>
    );
}

export default Login;