import { createContext, useState } from "react";

export const ContextApp = createContext();

export const ContextProvider = ({children}) => {
    const [loading, setLoading] = useState(true)

    const state = {
        loading
    }

    const handleFunction = {
        setLoading
    }

    return (
        <ContextApp.Provider value={{
            state,
            handleFunction
        }}>
            {children}
        </ContextApp.Provider>
    )
}