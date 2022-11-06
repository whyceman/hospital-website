import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//styles
import './Header.css'
//components
import Navbar from './Navbar'
//counter
import NumberCounter from 'number-counter'
// //images and icons
// import darkMode from '../../assets/dark.svg'
// import lightMode from '../../assets/light.svg'
// import setting from '../../assets/setting.svg'
//animation
import { motion } from 'framer-motion'
import { useMode } from '../../hooks/useMode'
import ChangeMode from '../changeMode/ChangeMode'

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const { changeMode, mode } = useMode()


    return (
        <div className={`header ${mode}`}>
            <Navbar />
            <div className={mode === '' ? 'overlay' : ''}>

            </div>
            <div className="header-text">
                <span>
                    <span>your </span><span>health </span><span>is</span>
                    <br />
                    <span>our </span><span>mission</span>
                </span>
                <div>
                    <p>combining unparalleled expertise and matchless quality assurance <br /> to taking care of you.</p>
                    <motion.button
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4, yoyo: Infinity }}
                        className="btn"><Link to='/appointment'>Appointment</Link></motion.button>
                    <motion.button
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="btn"><Link to='/about'>Read More</Link></motion.button>
                </div>

            </div>
            <div className="figures">
                <span>why us???</span>
                <div>
                    <span>
                        <span>
                            <NumberCounter start={100} end={178} delay='4' preFix='+' />
                        </span>
                        <span>professional {mobile && <br />} doctors</span>
                    </span>
                    <span>
                        <span>
                            <NumberCounter start={700} end={789} delay='4' preFix='+' />
                        </span>
                        <span>patients {mobile && <br />} managed</span>
                    </span>
                    <span>
                        <span>
                            <NumberCounter start={0} end={35} delay='4' preFix='+' />
                        </span>
                        <span>years {mobile && <br />} experience</span>
                    </span>
                </div>
            </div>
            <ChangeMode />
        </div>
    )
}

export default Header