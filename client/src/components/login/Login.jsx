import { Link } from "react-router-dom";

import Input from '../input/Input'


const Login = () => {

    return(
        // <!-- Login Page ( Only for Guest users ) -->
        <section id="login-page" className="auth">
            <form id="login">

                <div className="container">
                    <div className="brand-logo"></div>

                    <h1>Login</h1>

                    <label htmlFor="email">Email: </label>
                    <Input 
                        name="email"
                        type="email"
                        id="email"
                    />

                    <label htmlFor="password">Password: </label>
                    <Input 
                        name="password"
                        type="email"
                        id="login-password"
                    />
                    
                    <input type="submit" className="btn submit" value="Login" />
                    
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default Login