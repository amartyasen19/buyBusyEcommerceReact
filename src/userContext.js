// import context and hooks
import {
    useContext,
    createContext
} from 'react'

// create context
const userContext = createContext();

// use custome hook
export const useUserContext = () => {
    const value = useContext(userContext);
    return value;
}

//use cutom hook
export const UserContextProvider = ({ children }) => {
    const contextValue = {
        user: null
    }
    return (
        <userContext.Provider value={{contextValue}}>
            {children}
        </userContext.Provider>
    )
}