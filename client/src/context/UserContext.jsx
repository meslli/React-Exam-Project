import { useState, createContext, useEffect } from "react";

const defaultData = {
    email: "",
    accessToken: "",
    isAuthenticated: false,
    changeAuthState: (data) => null,
}

export const UserContext = createContext(defaultData)

export const UserProvider = ({ children }) => {
    const [authState, setAuthState] = useState({})

    const changeAuthState = (data) => {
        setAuthState(data)
    }

    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        authState,
        changeAuthState,
    }

    useEffect(() => {
        const localAuth = localStorage.getItem('auth')

        if(localAuth) {
            setAuthState(JSON.parse(localAuth))
        }
    }, [])

    return (
        <UserContext.Provider value={ contextData }>
            { children }
        </UserContext.Provider>
    )
}



