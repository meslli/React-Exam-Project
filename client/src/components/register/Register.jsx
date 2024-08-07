import { Link } from "react-router-dom"

import useForm from "../../hooks/useForm"

const initialValues = {
    email: "",
    password: "",
    ["confirm-password"]: ""
}
    

const Register = () => {
    const { values, updateValues } = useForm(initialValues);

    return (
        // <!-- Register Page ( Only for Guest users ) -->
        <section id="register-page" className="content auth">
            <form id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

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
                        type="password" 
                        name="password" 
                        id="register-password"
                        value={values.password}
                        onChange={updateValues} 
                    />
                    

                    <label htmlFor="confirm-password">Confirm Password: </label>
                    <input 
                        type="password" 
                        name="confirm-password" 
                        id="confirm-password" 
                        value={values["confirm-password"]}
                        onChange={updateValues} 
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