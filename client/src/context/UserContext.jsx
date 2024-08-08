import { useState, createContext, useEffect } from "react";

const defaultData = {
    email: "",
    accessToken: "",
    isAuthenticated: false,
    changeAuthState: (data) => null,
    localLogout: () => null,
}

export const UserContext = createContext(defaultData)

export const UserProvider = ({ children }) => {
    const [authState, setAuthState] = useState({})

    const changeAuthState = (data) => {        
        setAuthState(data)
    }

    const localLogout = () => {
        localStorage.removeItem('auth')

        setAuthState({})
    }

    useEffect(() => {
        const localAuth = localStorage.getItem('auth')

        if(localAuth) {
            setAuthState(JSON.parse(localAuth))
        }
    }, [])

    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        authState,
        changeAuthState,
        localLogout
    }

    return (
        <UserContext.Provider value={ contextData }>
            { children }
        </UserContext.Provider>
    )
}



