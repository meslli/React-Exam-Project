import { Link } from "react-router-dom"

import Input from "../input/Input";

const Register = () => {
    return (
        // <!-- Register Page ( Only for Guest users ) -->
        <section id="register-page" className="content auth">
            <form id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email: </label>
                    <Input 
                        type="email" 
                        id="email" 
                        name="email"
                    />

                    <label htmlFor="password">Password: </label>
                    <Input 
                        type="password" 
                        name="password" 
                        id="register-password"
                    />

                    <label htmlFor="confirm-password">Confirm Password: </label>
                    <Input 
                        type="password" 
                        name="confirm-password" 
                        id="confirm-password" 
                    />

                    <input 
                        className="btn submit"
                        type="submit" 
                        value="Register" 
                    />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default Register