import { useNavigate } from "react-router-dom"

import { loginUser } from "../api/users-api"

export const useLogin = () => {            
    const navigate = useNavigate()

    const login = async (values) => {
        try {
            const result = await loginUser(values)

            console.log(result)
            navigate('/')
        } catch(err) {
            console.error(err.message)
        }
    }

    return login
}