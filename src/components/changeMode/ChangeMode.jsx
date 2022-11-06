import './ChangeMode.css'
import { motion } from 'framer-motion'
import { useMode } from '../../hooks/useMode'
import darkMode from '../../assets/dark.svg'
import lightMode from '../../assets/light.svg'
import setting from '../../assets/setting.svg'
import { useState } from 'react'

const ChangeMode = () => {
    const { changeMode, mode } = useMode()
    const [modee, setMode] = useState(false)


    const handleDark = () => {
        changeMode('dark')
    }
    const handleLight = () => {
        changeMode('')
    }

    return (
        <div id="mode" className={modee ? 'set-mode' : ''}
        >
            <div className="set" style={{ display: modee ? 'none' : '' }}>
                <motion.img
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, yoyo: Infinity }}

                    onClick={() => setMode(modee === false ? true : false)}

                    src={setting} alt="" />
            </div>
            {modee && (<div className="toggle-mode">
                <span className="set" onClick={handleLight}><img
                    onClick={() => setMode(false)}
                    src={lightMode} alt="" /></span>
                <span className="set" onClick={handleDark}><img
                    onClick={() => setMode(false)}
                    src={darkMode} alt="" /></span>
            </div>)}
        </div>
    );
}

export default ChangeMode;