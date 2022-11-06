//styles
import './About.css'
//images and icon
import bars from '../../assets/bar.svg'
import arrow from '../../assets/arrow-left.svg'
//react
import { Link } from 'react-router-dom'
//animation
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className="about">
            <div className="header-a">
                <span>
                    <img
                        src={bars} alt="" />
                </span>
                <span> abdulwaasii hospital web</span>
            </div>
            <div className="hero-a">
                <span>Improving the Health of the Community and the World</span>
            </div>

            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.4 }}
                transition={{ duration: 1.5, yoyo: Infinity }}
            ><Link to='/'>
                    <img src={arrow} alt="" />
                </Link>
            </motion.div>
        </div>
    )
}

export default About