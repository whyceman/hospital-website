import { useState } from 'react';
import Select from 'react-select';
import './Appointment.css'
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMode } from '../../hooks/useMode';
import ChangeMode from '../../components/changeMode/ChangeMode';
const specialities = [
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'surgery', label: 'Surgery' },
    { value: 'pediatrics', label: 'Pediatrics' },
    { value: 'family medicine', label: 'Family Medicine' },
]

const Appointment = () => {
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [date, setDate] = useState('')
    const [complaint, setComplaint] = useState('')
    const [department, setDepartment] = useState('')
    const { mode } = useMode()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setTimeout(() => {
            setShowModal(true)
        }, 300)

    }


    return (
        <div className="appoint" style={{ background: showModal ? 'white' : '' }}>
            <div className="top-a">
                <span style={{ zIndex: showModal ? '-1' : '1', color: mode === 'dark' ? 'white' : '' }}>book an appointment</span>
            </div>
            <form onSubmit={handleSubmit} style={{ zIndex: showModal ? '-1' : '1' }}>
                <label>
                    <span>name:</span>
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <span>phone number:</span>
                    <input type="tel"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                </label>
                <label >
                    <span>department:</span>
                    <Select
                        options={specialities}
                        onChange={(option) => setDepartment(option)}
                    />
                </label>
                <label>
                    <span>complaint:</span>
                    <textarea
                        value={complaint}
                        onChange={(e) => setComplaint(e.target.value)}
                        required
                    ></textarea>
                </label>
                <label>
                    <span>date:</span>
                    <input type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
                <button className="btn">booknow</button>
            </form>

            {showModal && (
                <div className={`backdrop ${mode}`}
                >
                    <motion.div className="modal"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4, type: 'spring', bounce: 0.2 }}
                    >
                        <span>hey {name}, you have successfully made an appointment to see our clinic on {date}</span>
                        <div>
                            <button className="btn"><Link to='/'>Home</Link></button>
                        </div>
                    </motion.div>
                </div>
            )}
            <ChangeMode />
        </div>
    );
}

export default Appointment;