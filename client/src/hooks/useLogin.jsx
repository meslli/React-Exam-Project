import { loginUser } from "../api/users-api"

export const useLogin = () => {
    const login = async (values) => {
        try {
            const result = await loginUser(values)

            console.log(result)
        } catch(err) {
            console.error(err.message)
        }
    }

    return login
}