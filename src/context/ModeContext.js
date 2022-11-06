import { createContext, useReducer } from "react";

export const ModeContext = createContext()
const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload }
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'SIGNUP':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }

        default:
            return state;
    }
}

export function ModeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {

        mode: '',
        user: null
    })
    const changeMode = (mode) => {
        dispatch({ type: 'CHANGE_MODE', payload: mode })
    }
    return (
        <ModeContext.Provider value={{ ...state, dispatch, changeMode }}>
            {children}
        </ModeContext.Provider>
    )
}