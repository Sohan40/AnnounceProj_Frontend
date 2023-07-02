import "./Login.css"
export default function Login() {
    return (
        <div className="login">
            <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" name="username" id="username" placeholder="Your username"/>
                            
                        </div>

                        <div className="mb-3">
                            <input type="text" className="form-control" name="password" id="password" placeholder="Your password"/>
                            
                        </div>
                    
                        <input type="submit" value="Login"/>
                    </form>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>
            </div>
        </div>
    </div>

        </div>
    )
}
