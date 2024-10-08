import { Link } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { loginUser } from "../../api/users-api"
import { useLogin } from "../../hooks/useAuth";

const initialValues = {
    email: "",
    password: ""
}

const Login = () => {
    const login = useLogin()
    const { values, updateValues, submitForm } = useForm(initialValues, login);

    return(
        // <!-- Login Page ( Only for Guest users ) -->
        <section id="login-page" className="auth">
            <form id="login" onSubmit={e=> submitForm(e)}>

                <div className="container">
                    <div className="brand-logo"></div>

                    <h1>Login</h1>

                    <label htmlFor="email">Email: </label>
                    <input 
                        name="email"
                        type="email"
                        id="email"
                        value={values.email}
                        onChange={updateValues} 
                    />

                    <label htmlFor="password">Password: </label>
                    <input 
                         name="password"
                         type="password"
                         id="login-password"
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