// import action from firebase-auth
import { onAuthStateChanged } from "firebase/auth";

// import hooks
import { createContext, useEffect } from "react";

// import react-redux component
import {useDispatch, useSelector} from "react-redux"

// import auth from firebase
import { auth } from "../../firebaseinit";

// import action from auth-reducer
import { setCurrentUser, authSelector } from "../reducers/authReducer";

//making of auth context
export const AuthContext = createContext();

//making of auth context provider
export const AuthContextProvider = ({children}) => {

    //setting for user
    const { currentUser } = useSelector(authSelector)
    const dispatch = useDispatch();

    //authentication
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            dispatch(setCurrentUser(user));
        })
        return () => {
            unsub()
        }
    }, [dispatch]);

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}