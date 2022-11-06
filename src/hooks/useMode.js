import { useContext } from "react"
import { ModeContext } from "../context/ModeContext"


export const useMode = () => {
    const context = useContext(ModeContext)

    if (context === undefined) {
        throw new Error('useTheme() must be used within its scope')
    }

    return context
}