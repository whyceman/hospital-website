import React, { useState } from 'react'
import { Link } from 'react-scroll'
//styles
import './Navbar.css'
import { useMode } from '../../hooks/useMode'
//icons
import bar from '../../assets/bar.svg'
//animationh
import { motion } from 'framer-motion'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const mobile = window.innerWidth <= 768 ? true : false;
    const { mode } = useMode()
    return (
        <div className={`navbar ${mode}`}>
            <div className="logo">
                <span>
                    <span>why</span><span>ce</span>
                </span>
            </div>
            {mobile && showMenu === false ? (
                <span className='bar'>
                    <img src={bar} alt=""
                        onClick={() => setShowMenu(true)}
                    />
                </span>

            ) : <motion.ul
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="menu">
                <li><Link onClick={() => setShowMenu(false)} to='services' span='true' smooth='true'>Services </Link ></li>
                <li><Link onClick={() => setShowMenu(false)} to='facilities' span='true' smooth='true'>Facilities</Link></li>
                <li><Link onClick={() => setShowMenu(false)} to='testimonials' span='true' smooth='true'>Testimonials</Link></li>
                <li><Link onClick={() => setShowMenu(false)} to='footer' span='true' smooth='true'>Contact</Link></li>
                <li onClick={() => setShowMenu(false)}><a href='#home' span='true' smooth='true'>Home</a> </li>
                <li onClick={() => setShowMenu(false)} className="btn"><Link to='signup'>Sign Up</Link></li>
            </motion.ul>
            }

            {/* {(mobile && showMenu === false) && (
                <span className='bar'>
                    <img src={bar} alt=""
                        onClick={() => setShowMenu(true)}
                    />
                </span>
            )
            }

            {showMenu && (<motion.ul
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="menu">
                <li ><Link onClick={() => setShowMenu(false)} to='services' span='true' smooth='true'>Services </Link ></li>
                <li ><Link onClick={() => setShowMenu(false)} to='facilities' span='true' smooth='true'>Facilities</Link></li>
                <li ><Link onClick={() => setShowMenu(false)} to='testimonials' span='true' smooth='true'>Testimonials</Link></li>
                <li ><Link onClick={() => setShowMenu(false)} to='footer' span='true' smooth='true'>Contact</Link></li>
                <li onClick={() => setShowMenu(false)}><a href='#home' span='true' smooth='true'>Home</a> </li>
                <li onClick={() => setShowMenu(false)} className="btn"><Link to='signup'>Sign Up</Link></li>
            </motion.ul>)} */}



        </div>
    )
}

export default Navbar