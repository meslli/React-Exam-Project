import { Link } from "react-router-dom"

import { useEffect, useState } from "react"

import useForm from "../../hooks/useForm"
import { useRegister } from "../../hooks/useLogin"

const initialValues = {
    email: "",
    password: "",
    ["confirm-password"]: ""
}

const Register = () => {  
    const register = useRegister()
    const [pswError, setPswError] = useState(false)
    const { values, updateValues, submitForm } = useForm(initialValues, register);
  
    useEffect(() => {
        if(values.password !== values['confirm-password'] && values['confirm-password'] !== '') {
            setPswError(true)
            return
        } 

        setPswError(false)
    }, [values.password, values['confirm-password']])

    return (
        // <!-- Register Page ( Only for Guest users ) -->
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitForm}>
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

                    {pswError && <p style={{marginTop: '3px', color: 'red', fontSize: '18px'}}>Passwords do not match!</p>}

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