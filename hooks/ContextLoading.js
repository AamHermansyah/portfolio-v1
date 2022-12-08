import { createContext, useState } from "react";

export const ContextLoadingApp = createContext();

export const ContextLoading = ({children}) => {
    const [loading, setLoading] = useState(true)

    const state = {
        loading
    }

    const handleFunction = {
        setLoading
    }

    return (
        <ContextLoadingApp.Provider value={{
            state,
            handleFunction
        }}>
            {children}
        </ContextLoadingApp.Provider>
    )
}