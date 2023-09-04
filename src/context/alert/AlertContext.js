import { createContext, useReducer } from "react";
import alertReducer from './AlertReducer'

const AlertReducer = createContext()

export const AlertProvider = ({children}) => {
    const initialState = null
    const [state, dispatch] = useReducer(alertReducer, initialState)

    return <AlertContext.Provider>
        {children}
    </AlertContext.Provider>
}