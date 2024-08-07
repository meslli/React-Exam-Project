import useForm from "../../hooks/useForm"

import { Link } from "react-router-dom";

const initialValues = { email: '', password: '' }

const Login = () => {
    const [values, updateValues] = useForm(initialValues);

    return(
        // <!-- Login Page ( Only for Guest users ) -->
        <section id="login-page" className="auth">
            <form id="login">

                <div className="container">
                    <div className="brand-logo"></div>

                    <h1>Login</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={values.email}
                        onChange={updateValues}
                        placeholder="Sokka@gmail.com" 
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input 
                        type="password" 
                        id="login-password" 
                        name="password" 
                        value={values.password}
                        onChange={updateValues}
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