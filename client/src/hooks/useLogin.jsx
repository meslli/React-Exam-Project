import { useNavigate } from "react-router-dom"
import { useContext } from "react"

import { loginUser, registerUser } from "../api/users-api"

import { UserContext } from "../context/UserContext"

export const useLogin = () => {            
    const navigate = useNavigate()
    const { changeAuthState } = useContext(UserContext)

    const login = async (values) => {
        try {
            const { password, ...result } = await loginUser(values)

            changeAuthState(result)
            localStorage.setItem('auth', JSON.stringify(result))
            navigate('/')
        } catch(err) {
            console.error(err.message)
        }
    }

    return login
}

export const useRegister = () => {
    const navigate = useNavigate()
    const { changeAuthState } = useContext(UserContext)

    const register = async (values) => {
        try {
            const { password, ...result } = await registerUser(values.email, values.password)

            changeAuthState(result)
            localStorage.setItem('auth', JSON.stringify(result))
            navigate('/')
        } catch(err) {
            console.error(err.message)
        }
    }

    return register
}