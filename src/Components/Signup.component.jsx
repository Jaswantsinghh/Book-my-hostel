import "../Styles/Components/Signup.css"

function Signup() {
    return(
        <div className="Signup">
            <form className="Signup-form">
                <h1 className="Signup-form-bmh">Book My Hostel</h1>
                <h1 className="Signup-form-heading">Sign Up</h1>
                <label className="Signup-form-label">Email Address</label>
                <input placeholder="Enter Email Address" className="Signup-form-input"></input>
                <label className="Signup-form-label">Year</label>
                <input placeholder="Enter Year" className="Signup-form-input"></input>
                <label className="Signup-form-label">Branch</label>
                <input placeholder="Enter Branch" className="Signup-form-input"></input>
                <label className="Signup-form-label">Mobile number</label>
                <input placeholder="Enter Mobile Number" className="Signup-form-input"></input>
                <label className="Signup-form-label">Password</label>
                <input type="password" placeholder="Enter Password" className="Signup-form-input"></input>
                <button className="Signup-form-submit">Submit</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    );
}

export default Signup;